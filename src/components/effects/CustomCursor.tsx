'use client';

import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CursorContext, type CursorType } from '@/hooks/useCursor';

const LIGHT_THEME_PAGES = ['/e-commerce', '/saas-home', '/our-model', '/services'];

interface CursorProviderProps {
  children: ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [type, setType] = useState<CursorType>('default');

  const setCursorType = useCallback((t: CursorType) => setType(t), []);

  return (
    <CursorContext.Provider value={{ type, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const pathname = usePathname();
  const isLight = LIGHT_THEME_PAGES.includes(pathname);

  useEffect(() => {
    // Hide on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor="hover"]')) {
        setCursorType('hover');
      } else if (target.closest('input, textarea, select')) {
        setCursorType('text');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor="hover"], input, textarea, select')) {
        setCursorType('default');
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    const handleFrame = () => {
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(handleFrame);
    };
    rafRef.current = requestAnimationFrame(handleFrame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isVisible]);

  // Don't render on touch devices (SSR-safe check below in style)
  const isHover = cursorType === 'hover';
  const isText = cursorType === 'text';

  const outerSize = isHover ? 50 : isText ? 4 : 20;
  const outerHeight = isText ? 32 : outerSize;
  const innerScale = isHover ? 0 : isText ? 0 : 1;

  // Theme-aware colors
  const ringColor = isLight
    ? 'rgba(31, 68, 75, 0.7)'
    : 'rgba(105, 229, 251, 0.6)';
  const ringHoverBg = isLight
    ? 'rgba(31, 68, 75, 0.1)'
    : 'rgba(105, 229, 251, 0.08)';
  const dotColor = isLight ? '#1F444B' : '#69E5FB';

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 z-[10001] hidden md:block"
        style={{
          width: outerSize,
          height: outerHeight,
          marginLeft: -outerSize / 2,
          marginTop: -outerHeight / 2,
          borderRadius: isText ? 2 : '50%',
          border: isHover ? 'none' : `1.5px solid ${ringColor}`,
          background: isHover ? ringHoverBg : 'transparent',
          transition: 'width 0.3s, height 0.3s, margin 0.3s, background 0.3s, border 0.3s, border-radius 0.3s, border-color 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 z-[10002] hidden md:block"
        style={{
          width: 4,
          height: 4,
          marginLeft: -2,
          marginTop: -2,
          borderRadius: '50%',
          background: dotColor,
          transform: `scale(${innerScale})`,
          transition: 'transform 0.3s, background 0.3s',
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  );
}

export default CustomCursor;
