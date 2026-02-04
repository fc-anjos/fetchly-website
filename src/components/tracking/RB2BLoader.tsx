'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const RB2B_ID = process.env.NEXT_PUBLIC_RB2B_ID ?? '';

export function RB2BLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (!RB2B_ID) return;

    const scriptId = 'rb2b-script';
    // Remove existing script so it reloads on navigation
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://s.rb2b.io/rb/${RB2B_ID}.js`;
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [pathname]);

  return null;
}
