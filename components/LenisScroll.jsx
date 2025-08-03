'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smooth: true,
      easing:true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    window.lenis = lenis;

    let rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
