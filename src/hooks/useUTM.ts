'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureUTMParams, persistUTMParams, getStoredUTMParams } from '@/lib/utm';
import { trackEvent, setUserProperties } from '@/lib/analytics';

export function useUTM() {
  const pathname = usePathname();

  // Capture UTM params from URL on mount
  useEffect(() => {
    const params = captureUTMParams();
    if (Object.keys(params).length > 0) {
      persistUTMParams(params);
    }
  }, []);

  // Fire page_view with UTM on every route change
  useEffect(() => {
    const stored = getStoredUTMParams();

    trackEvent('page_view', {
      page_path: pathname,
      ...stored,
    });

    if (Object.keys(stored).length > 0) {
      setUserProperties(stored);
    }
  }, [pathname]);
}
