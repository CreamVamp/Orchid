import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceArea() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [eyebrowRef.current, titleRef.current, bodyRef.current, noteRef.current];
      gsap.set(elements, { opacity: 0, y: 24 });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
      style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[760px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
          — SERVICE AREA
        </span>
        <h2
          ref={titleRef}
          className="font-bold mb-6"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#1A1A1F',
            letterSpacing: '-0.01em',
            lineHeight: '1.15',
            opacity: 0,
          }}
        >
          Where we work.
        </h2>
        <p
          ref={bodyRef}
          className="leading-relaxed"
          style={{ fontSize: '16px', color: '#6B6B7A', opacity: 0 }}
        >
          Headquartered in Commerce, California, with crews serving Walnut, Hacienda Heights, La Puente,
          Covina, City of Industry, Whittier, Los Angeles, and the surrounding region across Los Angeles,
          Orange, Ventura, Riverside, San Bernardino, and San Diego Counties.
        </p>
        <p
          ref={noteRef}
          className="mt-5 text-sm italic"
          style={{ color: '#6B6B7A', opacity: 0 }}
        >
          Don&apos;t see your city? We probably still serve it — just ask.
        </p>
      </div>
    </section>
  );
}
