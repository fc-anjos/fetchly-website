'use client';

import { useState, useEffect, useCallback } from 'react';

export function useExitIntent() {
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Skip on /intake/* pages
    if (window.location.pathname.startsWith('/intake')) return;

    // Skip if form was submitted
    try {
      if (sessionStorage.getItem('fetchly_form_submitted')) return;
    } catch {
      // sessionStorage unavailable
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { show, dismiss };
}
