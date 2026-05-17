import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, Phone, User, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: BadgeCheck,
    title: 'Licensed in California, fully insured.',
  },
  {
    icon: Phone,
    title: 'Same-day emergency callouts across LA County.',
  },
  {
    icon: User,
    title: 'One person you talk to from quote to invoice.',
  },
  {
    icon: Sparkles,
    title: 'Crews who show up in uniform, on time, every time.',
  },
];

export default function WhyOrchid() {
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
      style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
          — WHY ORCHID
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
          Built for properties that matter.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-white rounded-2xl p-7 lg:p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                style={{
                  borderColor: '#E8E6F0',
                  boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#EDE9FF' }}
                  >
                    <Icon size={24} style={{ color: '#7C5DFB' }} />
                  </div>
                  <h3
                    className="font-semibold pt-2.5"
                    style={{ fontSize: '17px', color: '#1A1A1F', lineHeight: '1.4' }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
