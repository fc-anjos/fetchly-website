interface SubmitOptions {
  partial?: boolean;
  honeypot?: string;
}

export async function submitToHubSpot(
  fields: Record<string, string>,
  options?: SubmitOptions,
): Promise<{ ok: boolean; status: number }> {
  const res = await fetch('/api/hubspot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields,
      partial: options?.partial ?? false,
      _hp: options?.honeypot ?? '',
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    }),
  });

  return { ok: res.ok, status: res.status };
}
