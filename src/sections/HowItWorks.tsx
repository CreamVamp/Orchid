import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, Users, FileCheck, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Request a walkthrough',
    description: 'Tell us about the property and what you need.',
  },
  {
    number: '02',
    icon: Users,
    title: 'We meet you on-site',
    description: 'A member of our team scopes the job in person.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Written estimate in 24 hours',
    description: 'Clear pricing, no surprises.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEls = [eyebrowRef.current, titleRef.current];
      gsap.set(headerEls, { opacity: 0, y: 24 });
      gsap.to(headerEls, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });

      const stepEls = stepsRef.current.filter(Boolean);
      gsap.set(stepEls, { opacity: 0, y: 24 });
      gsap.to(stepEls, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: stepEls[0], start: 'top 88%', once: true },
      });

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, y: 20 });
        gsap.to(ctaRef.current, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 92%', once: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: '#F8F6FF', padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20">
        <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
          — PROCESS
        </span>
        <h2
          ref={titleRef}
          className="font-bold mb-12 lg:mb-16"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#1A1A1F',
            letterSpacing: '-0.01em',
            lineHeight: '1.15',
            opacity: 0,
          }}
        >
          How it works.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="text-center md:text-left"
                style={{ opacity: 0 }}
              >
                <span
                  className="block font-bold mb-4"
                  style={{ fontSize: '48px', color: '#7C5DFB', lineHeight: 1 }}
                >
                  {step.number}
                </span>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-5"
                  style={{ backgroundColor: '#EDE9FF' }}
                >
                  <Icon size={26} style={{ color: '#7C5DFB' }} />
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', color: '#1A1A1F' }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: '15px', color: '#6B6B7A' }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            ref={ctaRef}
            href="#walkthrough"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-button-hover hover:-translate-y-px"
            style={{ opacity: 0 }}
          >
            Schedule a Walkthrough
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
