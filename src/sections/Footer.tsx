import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceLinks = [
  'Janitorial Services',
  'Biohazard Cleanup',
  'Junk Removal',
  'Pressure Washing',
  'Maintenance & Repairs',
  'Apartment Move-In / Section 8 Inspection Ready',
  '24/7 Emergency Services',
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [col1Ref.current, col2Ref.current, col3Ref.current, stripRef.current];
      gsap.set(elements, { opacity: 0, y: 20 });
      gsap.to(elements, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const logoPurpleFilter =
    'brightness(0) saturate(100%) invert(36%) sepia(98%) saturate(2576%) hue-rotate(244deg) brightness(98%) contrast(102%)';

  return (
    <footer
      ref={sectionRef}
      className="w-full bg-white border-t"
      style={{ borderColor: '#E8E6F0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Logo + wordmark */}
          <div ref={col1Ref} style={{ opacity: 0 }}>
            <img
              src="/orchid-logo.png"
              alt="Orchid Cleaning & Maintenance LLC"
              className="h-10 w-auto mb-4"
              style={{ filter: logoPurpleFilter }}
            />
            <p className="font-semibold text-base" style={{ color: '#1A1A1F' }}>
              Orchid Cleaning & Maintenance LLC
            </p>
            <p className="text-sm mt-2" style={{ color: '#6B6B7A' }}>
              Serving Los Angeles County.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div ref={col2Ref} style={{ opacity: 0 }}>
            <p className="eyebrow mb-4">— CONTACT</p>
            <div className="space-y-2">
              <a
                href="tel:323-636-4771"
                className="block text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#7C5DFB' }}
              >
                323-636-4771
              </a>
              <a
                href="tel:818-472-4839"
                className="block text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#7C5DFB' }}
              >
                818-472-4839
              </a>
              <a
                href="mailto:orchidcleaningservices@outlook.com"
                className="block text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#7C5DFB' }}
              >
                orchidcleaningservices@outlook.com
              </a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div ref={col3Ref} style={{ opacity: 0 }}>
            <p className="eyebrow mb-4">— SERVICES</p>
            <div className="space-y-1.5">
              {serviceLinks.map((s) => (
                <p key={s} className="text-sm" style={{ color: '#6B6B7A' }}>
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          ref={stripRef}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t mt-12 pt-6"
          style={{ borderColor: '#E8E6F0', opacity: 0 }}
        >
          <p className="text-xs" style={{ color: '#6B6B7A' }}>
            &copy; 2026 Orchid Cleaning & Maintenance LLC
          </p>
          <p className="text-xs mt-1 sm:mt-0" style={{ color: '#6B6B7A' }}>
            Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
