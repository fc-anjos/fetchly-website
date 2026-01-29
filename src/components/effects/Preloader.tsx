'use client';

import { useEffect, useRef, useState } from 'react';

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip if already loaded this session
    if (sessionStorage.getItem('fetchly-loaded')) {
      setSkip(true);
      window.dispatchEvent(new CustomEvent('preloader-complete'));
      return;
    }

    document.documentElement.classList.add('preloader-active');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = async () => {
      const overlay = overlayRef.current;
      const logo = logoRef.current;
      if (!overlay || !logo) return;

      const paths = logo.querySelectorAll('path');

      if (prefersReducedMotion) {
        // Instant reveal
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => {
          overlay.style.display = 'none';
          document.documentElement.classList.remove('preloader-active');
          sessionStorage.setItem('fetchly-loaded', 'true');
          window.dispatchEvent(new CustomEvent('preloader-complete'));
        }, 100);
        return;
      }

      const { gsap } = await import('gsap');

      // Measure and set stroke-dasharray for each path
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.fill = 'none';
        path.style.stroke = '#69E5FB';
        path.style.strokeWidth = '3';
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      const tl = gsap.timeline({
        onComplete: () => {
          overlay.style.display = 'none';
          document.documentElement.classList.remove('preloader-active');
          sessionStorage.setItem('fetchly-loaded', 'true');
          window.dispatchEvent(new CustomEvent('preloader-complete'));
        },
      });

      // 1. Draw in logo strokes
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        stagger: 0.1,
      });

      // 2. Fill fades in
      tl.to(paths, {
        fill: '#69E5FB',
        fillOpacity: 1,
        duration: 0.4,
        ease: 'power1.in',
      });

      // 3. Logo scales down and fades
      tl.to(logo, {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      });

      // 4. Overlay slides up (curtain reveal)
      tl.to(overlay, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power3.inOut',
      });
    };

    run();
  }, []);

  if (skip) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
    >
      <svg
        ref={logoRef}
        className="w-48 h-auto"
        viewBox="0 0 1458 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1453.6 273.98C1440.44 261.73 1425.47 287 1415.34 294.17C1405.5 303.56 1394.87 312.16 1384.34 320.81C1379.78 323.67 1374.98 319.88 1377.28 315.29C1398.29 257.85 1413.49 198.57 1434.91 141.22C1437.4 133.91 1435.12 129.46 1426.18 129.46C1372.11 129.11 1397.26 123.56 1363.9 196.67C1349.54 226.99 1332.24 298.23 1279.57 281.21C1244.84 258.99 1294.63 174.79 1301.32 142.56C1304.34 134.73 1301.21 128.73 1292.15 128.73C1276.95 130.2 1253.64 123.08 1247.88 142.2C1227.49 191.61 1214.37 277.26 1149.1 291.98C1091.5 300.59 1171.35 118.14 1175.79 87.75C1183.02 63.71 1191.2 39.87 1196.91 15.4C1198.45 8.6 1193.1 2.13 1185.81 2.13C1169.72 1.94 1149.43 -0.690001 1145.05 19.09C1111.5 103.23 1107.34 242.56 1019.88 291.97C1011.13 295.58 996.29 294.93 998.7 280.25C1006.35 239.28 1027.38 210.04 1026.92 170.16C1018.84 105.06 941.66 116.51 905.27 153.11C917.4 106.2 933.4 59.66 948.37 13.39C951.74 -3.24 922.02 2.66 912.43 2.61C898.26 4.72 896.09 19.62 892.8 31.07C879.9 79.21 862.99 126.16 848.96 173.95C837.77 214.69 821.05 251.26 794.07 270.12C659.03 370.19 611.11 168.69 727.07 169.25C762.14 173.18 740.24 196.96 760.22 198.09C767.85 198.4 775.51 198.59 783.13 198.23C797.68 197.47 797.2 185.93 796.8 175.03C796.36 156.56 781.27 138.75 771.42 132.98C710.91 98.7 642.76 143.02 624.09 213.06C563.23 326.54 483.76 322.78 534.34 181.67C537.78 169.67 541.41 169.09 549.92 168.87C564.35 168.48 578.78 168.25 593.21 167.74C605.25 168.28 609.96 154.5 613.42 144.17C616.59 135.84 612.6 130.18 603.47 130.01C533.56 127.59 550.11 144.04 578.34 41.77C582.78 28.87 552.3 34.97 540.78 33.69C533.34 33.69 529.31 38.45 526.88 47.12L506.39 113.93C502.13 127.97 502.52 129.93 483.62 129.8C469.88 129.72 468.3 128.67 466.43 134.72C463.48 144.32 459.71 151.87 457.01 160.61C455.24 166.33 457.05 166.99 465.33 167.28C471.52 167.49 473.12 167.49 477.88 167.72C484.26 168.03 487.23 168.14 485.55 176.63C482.18 242.68 369.15 339.12 312.42 274.97C306.02 263.97 310.76 261.14 318.6 260.03C466.27 255.93 468.39 90.84 328.59 129.7C261.58 148.95 233.26 244.75 268.9 303C314.51 368.56 413.2 340.62 457.01 287.05C458.84 284.15 463.37 282.11 464.5 286.61C464.9 315.93 485.6 340.49 516.35 340.59C564.86 342.65 594.49 301.26 618.98 268.26C642.67 359.96 758.41 346.79 809.26 299.89C808.39 309.01 790.11 335 806.61 337.24C824.4 336.86 848.22 344.38 855.31 320.45C866.51 277.07 896.33 181.82 946.19 170.57C960.18 167.77 974.45 172.59 972.45 188.3C968.3 217.77 953.25 251.52 947.28 281.33C943.05 301.07 947.05 338.22 1008.53 338.22C1045.09 338.22 1058.53 304.53 1075.53 280.86C1073.27 294.43 1082.33 320.41 1098.61 330.25C1140.93 359.96 1187.35 317.82 1212.16 282.68C1219.7 326.11 1274.27 349.91 1326.57 308.91C1322.52 318.9 1323.52 339.2 1310.79 340.87C1282.89 344.75 1255.39 350.36 1229.79 362.02C1172.96 382.37 1175.83 472.17 1243.25 472.37C1304.27 477.73 1334.74 423.78 1356.39 375.98C1361.33 365.66 1368.48 361.85 1377.78 353.46C1409.14 325.16 1422.01 314.34 1454.57 286.66C1457.24 284.41 1459.01 278.82 1453.57 273.98H1453.6ZM305.96 223.13C310.63 200.03 328.85 168.66 361.01 169.22C376.92 169.36 382.94 177.38 381.84 191.83C380.07 215 344.81 228.05 314.6 230.44C312.42 230.64 304.55 229.6 305.96 223.13ZM1302 382C1292.68 397.05 1283.21 412.64 1269.07 423.67C1261.17 430.1 1252.96 430.32 1246.7 430.1C1216.69 428.21 1231.8 390.53 1250.87 386.8C1265.05 381.58 1279.56 377.27 1294.05 372.92C1301.18 370.77 1306.05 377.31 1302 382Z" />
        <path d="M253.44 156.42C254.44 152.55 250.03 149.25 246.03 149.26H217.15C196.03 149.16 154.65 148.54 133.55 149.08H133.34C114.34 149.08 119.2 141.65 121.59 134.13C129.32 109.83 137.3 86.06 144.85 61.68C148 51.56 151.78 48.62 163 48.86C203.34 48.94 280.11 48.8 320.45 48.56C323.94 48.48 327.36 47.54 330.4 45.83C337.08 42 339.07 34 345.85 7.77C346.85 3.71 342.91 0.33 336.76 0.21C332.05 0.12 327.3 0 322.56 0C266 0.45 172.94 -0.46 116.38 0.45C112.05 0.57 105.72 5.14 104 9.12C98.58 21.82 94.81 35.18 90.57 48.34C73.66 101.27 66.6 126.61 41.2 201C31.84 227.69 24.41 255 16.02 281.93C11.07 297.73 5.62001 313.4 0.510012 329.18C-1.43999 335.18 2.44001 338.9 7.67001 339.18C19.85 340.01 32.08 339.96 44.25 339.04C49.25 338.66 56.57 334.11 58.03 329.92C67.48 302.92 75.6 275.44 84.14 248.12C87.88 236.12 90.05 227.61 95.67 209.12C97.33 203.68 103.35 198.46 109.47 198.46C114.32 198.46 118.87 198.62 124.08 198.46C154.98 197.55 190.78 198.21 227 198.21C239.92 198.27 247.07 181 253.44 156.42Z" />
      </svg>
    </div>
  );
}

export default Preloader;
