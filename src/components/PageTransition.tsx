import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Entry animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );

    return () => {
      // Exit animation handled on unmount
      gsap.to(el, {
        opacity: 0,
        y: 8,
        duration: 0.25,
        ease: 'power2.in',
      });
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
