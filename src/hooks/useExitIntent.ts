'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'fetchly_exit_shown';
const DELAY_MS = 5000;

export function useExitIntent() {
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Skip on /intake/* pages
    if (window.location.pathname.startsWith('/intake')) return;

    // Skip if already shown this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage unavailable
    }

    let enabled = false;
    const enableTimer = setTimeout(() => {
      enabled = true;
    }, DELAY_MS);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!enabled) return;
      if (e.clientY <= 0) {
        setShow(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(enableTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { show, dismiss };
}
