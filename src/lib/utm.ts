const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
export type UTMKey = (typeof UTM_KEYS)[number];
export type UTMParams = Partial<Record<UTMKey, string>>;

const STORAGE_KEY = 'fetchly_utm';

export function captureUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  const url = new URL(window.location.href);
  const params: UTMParams = {};
  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value) params[key] = value;
  }
  return params;
}

export function persistUTMParams(params: UTMParams) {
  if (typeof window === 'undefined') return;
  // First-touch attribution: don't overwrite existing params
  const existing = getStoredUTMParams();
  if (Object.keys(existing).length > 0) return;
  if (Object.keys(params).length === 0) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage unavailable
  }
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UTMParams) : {};
  } catch {
    return {};
  }
}

export function getUTMForHubSpot(): Record<string, string> {
  const params = getStoredUTMParams();
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value) result[key] = value;
  }
  return result;
}
