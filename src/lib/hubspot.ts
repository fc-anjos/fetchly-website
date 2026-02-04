const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? '8974887';
const FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID ?? '';

export interface HubSpotField {
  name: string;
  value: string;
}

export async function submitToHubSpot(
  fields: Record<string, string>,
): Promise<{ ok: boolean; status: number }> {
  if (!FORM_GUID) {
    console.warn('[HubSpot] NEXT_PUBLIC_HUBSPOT_FORM_GUID is not set');
    return { ok: false, status: 0 };
  }

  const hubspotFields: HubSpotField[] = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([name, value]) => ({ name, value }));

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: hubspotFields,
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    }),
  });

  return { ok: res.ok, status: res.status };
}
