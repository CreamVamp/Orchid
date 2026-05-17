import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (contentRef.current) {
        const children = contentRef.current.querySelectorAll('.hero-animate');
        gsap.set(children, { opacity: 0, y: 28 });
        tl.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        });
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, { opacity: 0, scale: 0.97 });
        tl.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, 0.3);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-white">
      {/* Fixed Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <img
              src="/orchid-logo.png"
              alt="Orchid Cleaning & Maintenance LLC"
              className="h-10 lg:h-12 w-auto"
            />
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:323-636-4771"
                className="text-sm text-text-secondary hover:text-brand transition-colors duration-200"
              >
                323-636-4771
              </a>
              <a
                href="#walkthrough"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-xs font-semibold tracking-wide uppercase rounded-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-button hover:-translate-y-px"
              >
                Schedule Walkthrough
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column - text */}
          <div ref={contentRef} className="lg:col-span-3">
            <span className="hero-animate eyebrow block mb-4">
              — LOS ANGELES
            </span>
            <h1
              className="hero-animate font-bold leading-tight"
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                letterSpacing: '-0.02em',
                color: '#1A1A1F',
              }}
            >
              Properties that can't afford{' '}
              <span style={{ color: '#7C5DFB' }}>downtime.</span>
            </h1>
            <p
              className="hero-animate mt-6 leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 18px)',
                color: '#6B6B7A',
                maxWidth: '520px',
              }}
            >
              Commercial cleaning, maintenance, and emergency response across Los Angeles County. Licensed, insured, and on call 24/7.
            </p>
            <div className="hero-animate flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#walkthrough"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-button-hover hover:-translate-y-px"
              >
                Schedule a Walkthrough
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:323-636-4771"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#7C5DFB' }}
              >
                Or call (323) 636-4771
                <ArrowRight size={14} />
              </a>
            </div>
            <p
              className="hero-animate mt-6 text-sm"
              style={{ color: '#6B6B7A' }}
            >
              Free walkthrough — written estimate within 24 hours.
            </p>
          </div>

          {/* Right column - image */}
          <div ref={imageRef} className="lg:col-span-2" style={{ opacity: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Professional cleaning crew at work"
              className="w-full h-auto rounded-2xl shadow-card"
              style={{ maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
