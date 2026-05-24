import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 20 });
        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            once: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: '#F8F6FF', padding: 'clamp(48px, 5vw, 60px) 0' }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <p
          ref={textRef}
          className="font-medium"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 15px)',
            color: '#6B6B7A',
            lineHeight: '1.6',
            opacity: 0,
          }}
        >
          Trusted by property managers, retail spaces, warehouses, and commercial buildings across Los Angeles, Orange, Ventura, Riverside, San Bernardino, and San Diego Counties.
        </p>
      </div>
    </section>
  );
}
