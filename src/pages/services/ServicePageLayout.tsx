import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import useScrollToTop from '../../hooks/useScrollToTop';
import Footer from '../../sections/Footer';
import type { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IncludedItem {
  text: string;
}

export interface RelatedService {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

export interface ServicePageData {
  title: string;
  metaDescription: string;
  h1: string;
  subhead: string;
  heroIcon: LucideIcon;
  heroImage: string;
  overviewEyebrow: string;
  overviewParagraphs: string[];
  overviewImage: string;
  whoTags: string[];
  whoHeading: string;
  whoClosing: string;
  includedItems: IncludedItem[];
  processSteps: ProcessStep[];
  relatedServices: RelatedService[];
  schemaDescription: string;
}

const logoPurpleFilter =
  'brightness(0) saturate(100%) invert(36%) sepia(98%) saturate(2576%) hue-rotate(244deg) brightness(98%) contrast(102%)';

function SectionReveal({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 24 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
      },
    });
    return () => { trigger.kill(); };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  useScrollToTop();
  const topBarRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // Sticky top bar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        if (window.scrollY > 10) {
          topBarRef.current.style.boxShadow = '0 1px 0 #E8E6F0';
        } else {
          topBarRef.current.style.boxShadow = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Process cards stagger
  useEffect(() => {
    if (!processRef.current) return;
    const cards = processRef.current.querySelectorAll('.process-card');
    gsap.set(cards, { opacity: 0, y: 20 });
    ScrollTrigger.create({
      trigger: processRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06,
        });
      },
    });
  }, []);

  const HeroIcon = data.heroIcon;

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.schemaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Orchid Cleaning & Maintenance LLC',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Commerce',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      telephone: '323-636-4771',
      email: 'orchidcleaningservices@outlook.com',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '34.0522',
        longitude: '-118.2437',
      },
      geoRadius: '100 mi',
    },
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Section 1: Top Bar */}
        <header
          ref={topBarRef}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-200"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center h-14">
              <Link to="/" className="flex items-center">
                <img
                  src="/orchid-logo.png"
                  alt="Orchid Cleaning & Maintenance LLC"
                  className="h-9 w-auto"
                  style={{ filter: logoPurpleFilter }}
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Section 2: Hero */}
        <section
          className="pt-24 lg:pt-32"
          style={{ paddingBottom: 'clamp(80px, 10vw, 140px)' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <SectionReveal>
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{ backgroundColor: '#EDE9FF' }}
              >
                <HeroIcon size={40} style={{ color: '#7C5DFB' }} />
              </div>
            </SectionReveal>

            <SectionReveal>
              <h1
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  letterSpacing: '-0.02em',
                  color: '#1A1A1F',
                  lineHeight: '1.08',
                }}
              >
                {data.h1}
              </h1>
            </SectionReveal>

            <SectionReveal>
              <p
                className="mt-6 mx-auto leading-relaxed"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  color: '#6B6B7A',
                  maxWidth: '600px',
                }}
              >
                {data.subhead}
              </p>
            </SectionReveal>

            <SectionReveal>
              <div className="mt-8">
                <a
                  href="/#walkthrough"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-button-hover hover:-translate-y-px"
                >
                  Schedule a Walkthrough
                  <ArrowRight size={16} />
                </a>
              </div>
              <p
                className="mt-4 text-sm"
                style={{ color: '#6B6B7A' }}
              >
                Free walkthrough — written estimate within 24 hours.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Section 3: Visual Overview */}
        <section
          style={{ backgroundColor: '#F8F6FF', padding: 'clamp(80px, 10vw, 120px) 0' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <SectionReveal>
                <img
                  src={data.overviewImage}
                  alt={`${data.h1} service preview`}
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{
                    boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                    maxHeight: '500px',
                  }}
                  loading="lazy"
                />
              </SectionReveal>
              <div>
                <SectionReveal>
                  <span className="eyebrow block mb-4">{data.overviewEyebrow}</span>
                </SectionReveal>
                {data.overviewParagraphs.map((p, i) => (
                  <SectionReveal key={i}>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: '16px',
                        color: '#6B6B7A',
                        marginBottom: i < data.overviewParagraphs.length - 1 ? '16px' : '0',
                      }}
                    >
                      {p}
                    </p>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Who This Is For */}
        <section style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <SectionReveal>
              <span className="eyebrow block mb-4">— WHO THIS IS FOR</span>
            </SectionReveal>
            <SectionReveal>
              <h2
                className="font-bold mb-8"
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: '#1A1A1F',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2',
                }}
              >
                {data.whoHeading}
              </h2>
            </SectionReveal>
            <SectionReveal>
              <div className="flex flex-wrap gap-3 mb-8">
                {data.whoTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: '#EDE9FF',
                      color: '#7C5DFB',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal>
              <p
                className="italic"
                style={{ fontSize: '16px', color: '#6B6B7A' }}
              >
                {data.whoClosing}
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Section 5: What's Included */}
        <section
          style={{ backgroundColor: '#F8F6FF', padding: 'clamp(80px, 10vw, 120px) 0' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <SectionReveal>
              <span className="eyebrow block mb-4">— WHAT'S INCLUDED</span>
            </SectionReveal>
            <SectionReveal>
              <h2
                className="font-bold mb-10"
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: '#1A1A1F',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2',
                }}
              >
                Here's exactly what you get.
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.includedItems.map((item, i) => (
                <SectionReveal key={i}>
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: '#EDE9FF' }}
                    >
                      <Check size={14} style={{ color: '#7C5DFB' }} />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#1A1A1F' }}>
                      {item.text}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Process */}
        <section style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <SectionReveal>
              <span className="eyebrow block mb-4">— OUR PROCESS</span>
            </SectionReveal>
            <SectionReveal>
              <h2
                className="font-bold mb-12 lg:mb-16"
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: '#1A1A1F',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2',
                }}
              >
                How a {data.h1.replace(/\.$/, '').toLowerCase()} job actually goes.
              </h2>
            </SectionReveal>

            <div ref={processRef} className="relative">
              {/* Dashed line — desktop horizontal, mobile vertical */}
              <div
                className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px border-t-2 border-dashed"
                style={{ borderColor: '#7C5DFB', opacity: 0.25 }}
              />
              <div
                className="lg:hidden absolute top-[30px] bottom-[30px] left-[27px] w-px border-l-2 border-dashed"
                style={{ borderColor: '#7C5DFB', opacity: 0.25 }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                {data.processSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="process-card relative bg-white rounded-2xl p-6 lg:p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
                      style={{
                        borderColor: '#E8E6F0',
                        boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                        opacity: 0,
                      }}
                    >
                      <span
                        className="block font-extrabold mb-4"
                        style={{
                          fontSize: '56px',
                          color: '#7C5DFB',
                          opacity: 0.3,
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>
                      <div className="mb-4">
                        <StepIcon size={32} style={{ color: '#7C5DFB' }} />
                      </div>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontSize: '18px', color: '#1A1A1F' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ fontSize: '14px', color: '#6B6B7A' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Pricing */}
        <section
          style={{ backgroundColor: '#F8F6FF', padding: 'clamp(60px, 8vw, 100px) 0' }}
        >
          <div className="max-w-[640px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <SectionReveal>
              <span className="eyebrow block mb-4">— PRICING</span>
            </SectionReveal>
            <SectionReveal>
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  color: '#1A1A1F',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.25',
                }}
              >
                Every job is different. Every quote is custom.
              </h3>
            </SectionReveal>
            <SectionReveal>
              <p className="leading-relaxed mb-6" style={{ fontSize: '16px', color: '#6B6B7A' }}>
                Pricing varies based on scope, frequency, and property size. We don't believe in surprise costs — that's why every job starts with a free on-site walkthrough and a written estimate within 24 hours.
              </p>
            </SectionReveal>
            <SectionReveal>
              <a
                href="/#walkthrough"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:gap-2.5"
                style={{ color: '#7C5DFB' }}
              >
                Add this to your walkthrough
                <ArrowRight size={14} />
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* Section 8: Related Services */}
        <section style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
            <SectionReveal>
              <span className="eyebrow block mb-4">— EXPLORE MORE</span>
            </SectionReveal>
            <SectionReveal>
              <h3
                className="font-bold mb-8"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  color: '#1A1A1F',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.25',
                }}
              >
                Other services that pair well with this.
              </h3>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.relatedServices.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <SectionReveal key={service.href}>
                    <Link
                      to={service.href}
                      className="block bg-white rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover group"
                      style={{
                        borderColor: '#E8E6F0',
                        boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#EDE9FF' }}
                        >
                          <ServiceIcon size={22} style={{ color: '#7C5DFB' }} />
                        </div>
                        <div>
                          <h4
                            className="font-bold mb-1"
                            style={{ fontSize: '16px', color: '#1A1A1F' }}
                          >
                            {service.name}
                          </h4>
                          <p className="text-sm leading-relaxed mb-2" style={{ color: '#6B6B7A' }}>
                            {service.description}
                          </p>
                          <span
                            className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                            style={{ color: '#7C5DFB' }}
                          >
                            Learn more
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 9: CTA */}
        <section
          style={{
            backgroundColor: '#7C5DFB',
            padding: 'clamp(80px, 10vw, 120px) 0',
          }}
        >
          <div className="max-w-[640px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <SectionReveal>
              <span
                className="block mb-4 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                — READY?
              </span>
            </SectionReveal>
            <SectionReveal>
              <h2
                className="font-extrabold mb-4"
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.15',
                }}
              >
                Schedule your free walkthrough.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mb-8" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                Tell us about the property. We'll get back to you within one business day.
              </p>
            </SectionReveal>
            <SectionReveal>
              <a
                href="/#walkthrough"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-px"
                style={{ color: '#7C5DFB' }}
              >
                Schedule a Walkthrough
                <ArrowRight size={16} />
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* Section 10: Back Link */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3 group"
              style={{ color: '#7C5DFB' }}
            >
              <ChevronLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>
        </section>

        {/* Section 11: Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
