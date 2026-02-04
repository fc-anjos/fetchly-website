import { NextRequest, NextResponse } from 'next/server';

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? '';
const FORM_GUID = process.env.HUBSPOT_FORM_GUID ?? '';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FULL_REQUIRED_FIELDS = ['email', 'firstname', 'lastname', 'company', 'message', 'project_type', 'company_size'];
const ALLOWED_FIELDS = [...FULL_REQUIRED_FIELDS, 'phone', 'linkedin', 'website', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

// Simple in-memory rate limiter (per IP, resets on cold start)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  if (!PORTAL_ID || !FORM_GUID) {
    return NextResponse.json({ error: 'HubSpot not configured' }, { status: 500 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { fields, context, _hp, partial } = body as {
    fields: Record<string, string>;
    context?: { pageUri?: string; pageName?: string };
    _hp?: string;
    partial?: boolean;
  };

  // Honeypot: reject if filled
  if (_hp) {
    // Return 200 so bots think it succeeded
    return NextResponse.json({ ok: true });
  }

  if (!fields || typeof fields !== 'object') {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Email is always required
  if (!fields.email || !EMAIL_REGEX.test(fields.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // Full submissions require all fields; partial submissions (exit intent, autosave) only need email
  if (!partial) {
    for (const key of FULL_REQUIRED_FIELDS) {
      if (!fields[key] || typeof fields[key] !== 'string' || fields[key].trim().length === 0) {
        return NextResponse.json({ error: `Missing required field: ${key}` }, { status: 400 });
      }
    }
  }

  // Filter to allowed fields only
  const hubspotFields = Object.entries(fields)
    .filter(([key, value]) => ALLOWED_FIELDS.includes(key) && typeof value === 'string' && value.trim().length > 0)
    .map(([name, value]) => ({ name, value: value.trim() }));

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: hubspotFields,
      context: {
        pageUri: typeof context?.pageUri === 'string' ? context.pageUri : '',
        pageName: typeof context?.pageName === 'string' ? context.pageName : '',
      },
    }),
  });

  if (res.ok) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Submission failed' }, { status: res.status });
}
