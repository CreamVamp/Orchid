import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  highlight: string;
  name: string;
  role: string;
  date: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We've used Orchid for our four-building portfolio for the past 18 months. They handle the recurring janitorial and any emergency calls without fail. I've never had to follow up on a job.",
    highlight: "I've never had to follow up on a job.",
    name: 'Maria G.',
    role: 'Property Manager, Downtown LA',
    date: 'January 2026',
    initials: 'MG',
  },
  {
    quote: "Called them at 11pm for a flood at one of our retail spaces. They had a crew on-site within 90 minutes. Saved us from what could've been a complete loss.",
    highlight: "They had a crew on-site within 90 minutes.",
    name: 'David K.',
    role: 'Operations Manager, Retail Chain',
    date: 'November 2025',
    initials: 'DK',
  },
  {
    quote: "We've cycled through three cleaning companies for our warehouses before finding Orchid. Two years in, no issues, no excuses. Their crews show up, do the work, and move on. That's all I want.",
    highlight: "Two years in, no issues, no excuses.",
    name: 'James R.',
    role: 'Warehouse Director, Industrial Property',
    date: 'October 2025',
    initials: 'JR',
  },
  {
    quote: "Section 8 inspections used to stress me out. Orchid preps the units so well that every unit has passed first inspection. That alone has saved us weeks of back-and-forth with HACLA.",
    highlight: "every unit has passed first inspection.",
    name: 'Lisa M.',
    role: 'Multi-Unit Property Owner',
    date: 'December 2025',
    initials: 'LM',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headers = [eyebrowRef.current, titleRef.current];
      gsap.set(headers, { opacity: 0, y: 24 });
      gsap.to(headers, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });

      const cards = cardsRef.current.filter(Boolean);
      gsap.set(cards, { opacity: 0, y: 24 });
      gsap.to(cards, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: cards[0], start: 'top 88%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const renderQuote = (t: Testimonial) => {
    const parts = t.quote.split(t.highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: '#5A3FD9', fontWeight: 600 }}>{t.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
      style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
          — TESTIMONIALS
        </span>
        <h2
          ref={titleRef}
          className="font-bold mb-10 lg:mb-14"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#1A1A1F',
            letterSpacing: '-0.01em',
            lineHeight: '1.15',
            opacity: 0,
          }}
        >
          What our clients say.
        </h2>

        {/* PLACEHOLDER TESTIMONIALS — Client will replace these with real customer quotes once collected. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white rounded-2xl p-7 lg:p-8 border"
              style={{
                borderColor: '#E8E6F0',
                boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                opacity: 0,
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#7C5DFB"
                    style={{ color: '#7C5DFB' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="leading-relaxed mb-6"
                style={{ fontSize: '16px', color: '#1A1A1F' }}
              >
                &ldquo;{renderQuote(t)}&rdquo;
              </p>

              {/* Divider + Attribution */}
              <div className="border-t" style={{ borderColor: '#E8E6F0' }}>
                <div className="flex items-center gap-3 pt-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm"
                    style={{ backgroundColor: '#EDE9FF', color: '#7C5DFB' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#1A1A1F' }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: '#6B6B7A' }}>
                      {t.role}
                    </p>
                    <p className="text-xs" style={{ color: '#6B6B7A' }}>
                      {t.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
