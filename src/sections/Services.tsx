import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Trash2,
  Droplets,
  ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  route: string;
}

const services: Service[] = [
  {
    title: 'Janitorial Services',
    description: 'Daily, weekly, monthly — your call. We work around your hours, not the other way around.',
    icon: Sparkles,
    route: '/services/janitorial',
  },
  {
    title: 'Junk Removal',
    description: 'Old furniture, construction debris, that thing you\'ve been meaning to throw out for two years. We haul it. You don\'t think about it ever again.',
    icon: Trash2,
    route: '/services/junk-removal',
  },
  {
    title: 'Pressure Washing',
    description: 'Driveways, sidewalks, building exteriors, parking structures. If grime has settled into it, we can lift it off without damaging the surface underneath.',
    icon: Droplets,
    route: '/services/pressure-washing',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEls = [eyebrowRef.current, titleRef.current, introRef.current];
      gsap.set(headerEls, { opacity: 0, y: 24 });
      gsap.to(headerEls, {
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
          — SERVICES
        </span>
        <h2
          ref={titleRef}
          className="font-bold mb-4"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#1A1A1F',
            letterSpacing: '-0.01em',
            lineHeight: '1.15',
            opacity: 0,
          }}
        >
          What we do.
        </h2>
        <p
          ref={introRef}
          className="leading-relaxed mb-12 lg:mb-16"
          style={{
            fontSize: '16px',
            color: '#6B6B7A',
            maxWidth: '640px',
            opacity: 0,
          }}
        >
          Three services. One standard. From scheduled janitorial programs to junk removal and pressure washing, every job is handled by trained crews and accountable to a single point of contact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.route}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="block bg-white rounded-2xl p-7 lg:p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 group cursor-pointer"
                style={{
                  borderColor: '#E8E6F0',
                  boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                  opacity: 0,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#EDE9FF' }}
                >
                  <Icon size={24} style={{ color: '#7C5DFB' }} />
                </div>
                <h3
                  className="font-bold mb-3 transition-colors duration-200 text-[#1A1A1F] group-hover:text-brand"
                  style={{ fontSize: '18px' }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: '15px', color: '#6B6B7A' }}
                >
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5 text-brand"
                >
                  Learn more
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
