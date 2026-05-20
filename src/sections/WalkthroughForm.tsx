import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/** Inbox that receives walkthrough form submissions (FormSubmit delivers here). */
const WALKTHROUGH_NOTIFICATION_EMAIL = 'orchidcleaningservices@outlook.com';

const serviceOptions = [
  'Janitorial Services',
  'Biohazard Cleanup',
  'Junk Removal',
  'Pressure Washing',
  'Maintenance & Repairs',
  'Apartment Move-In / Section 8 Inspection Ready',
  '24/7 Emergency Services',
];

const propertyTypes = [
  'Commercial Office',
  'Warehouse',
  'Retail',
  'Multi-Unit Residential',
  'Single-Family',
  'Other',
];

const frequencyOptions = [
  'Weekly',
  'Biweekly',
  'Monthly',
  'Daily',
  'Other',
];

const bestTimeOptions = [
  'Morning',
  'Afternoon',
  'Evening',
  'Anytime',
];

function isFormSubmitSuccess(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const s = (data as { success?: unknown }).success;
  return s === true || s === 'true';
}

export default function WalkthroughForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showFrequency, setShowFrequency] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [eyebrowRef.current, titleRef.current, subheadRef.current, cardRef.current];
      gsap.set(elements, { opacity: 0, y: 24 });
      gsap.to(elements, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setShowFrequency(selectedServices.includes('Janitorial Services'));
  }, [selectedServices]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.set('services', selectedServices.join(', '));

    const payload: Record<string, string> = {
      _subject: 'New walkthrough request — Orchid Cleaning website',
      _template: 'table',
    };
    formData.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : value.name;
    });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(WALKTHROUGH_NOTIFICATION_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = (await response.json().catch(() => null)) as { success?: unknown; message?: string } | null;

      if (response.ok && isFormSubmitSuccess(data)) {
        if (cardRef.current && confirmationRef.current) {
          gsap.to(cardRef.current, {
            opacity: 0, y: -20, duration: 0.5,
            onComplete: () => {
              setSubmitted(true);
              setSubmitting(false);
              gsap.fromTo(confirmationRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            },
          });
        } else {
          setSubmitted(true);
          setSubmitting(false);
        }
      } else {
        setSubmitting(false);
        setSubmitError(
          data?.message?.trim() ||
            'We could not send your request. Please email orchidcleaningservices@outlook.com or call 323-636-4771.'
        );
      }
    } catch {
      setSubmitting(false);
      setSubmitError(
        'We could not send your request. Please email orchidcleaningservices@outlook.com or call 323-636-4771.'
      );
    }
  };

  const inputClass =
    'w-full rounded-lg px-4 py-3.5 text-sm font-medium transition-all duration-150 focus:outline-none';
  const inputStyle = {
    backgroundColor: '#F8F6FF',
    border: '1px solid #E8E6F0',
    color: '#1A1A1F',
  };
  const inputFocusStyle = {
    borderColor: '#7C5DFB',
    boxShadow: '0 0 0 3px rgba(124, 93, 251, 0.15)',
  };

  const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-2';
  const labelStyle = { color: '#6B6B7A', letterSpacing: '0.08em' };

  return (
    <section
      ref={sectionRef}
      id="walkthrough"
      className="w-full"
      style={{ backgroundColor: '#F8F6FF', padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
            — WALKTHROUGH
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
            Schedule a walkthrough.
          </h2>
          <p
            ref={subheadRef}
            className="leading-relaxed"
            style={{ fontSize: '16px', color: '#6B6B7A', opacity: 0 }}
          >
            Tell us about the property. We'll reach out within one business day to confirm a time.
          </p>
        </div>

        {submitted ? (
          <div
            ref={confirmationRef}
            className="bg-white rounded-3xl p-10 lg:p-14 text-center"
            style={{ boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)', opacity: 0 }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#EDE9FF' }}
            >
              <Check size={28} style={{ color: '#7C5DFB' }} />
            </div>
            <p className="font-bold text-xl" style={{ color: '#1A1A1F' }}>
              Thank you!
            </p>
            <p className="mt-3 leading-relaxed" style={{ fontSize: '16px', color: '#6B6B7A' }}>
              We'll reach out within one business day to schedule your walkthrough.
            </p>
          </div>
        ) : (
          <div
            ref={cardRef}
            className="bg-white rounded-3xl p-8 md:p-12 lg:p-14"
            style={{ boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)', opacity: 0 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '20px' }}>
              {/* Name */}
              <div>
                <label className={labelClass} style={labelStyle}>Name</label>
                <input
                  type="text" name="name" placeholder="e.g. Maria Gonzalez" required
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={labelStyle}>Phone</label>
                  <input
                    type="tel" name="phone" placeholder="where we should call back" required
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Email</label>
                  <input
                    type="email" name="email" placeholder="your work email" required
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className={labelClass} style={labelStyle}>Property Type</label>
                <select
                  name="property_type" required
                  className={inputClass + ' appearance-none cursor-pointer'}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="" disabled selected>Select property type</option>
                  {propertyTypes.map((t) => (
                    <option key={t} value={t} style={{ backgroundColor: '#F8F6FF' }}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Services */}
              <div>
                <label className={labelClass} style={labelStyle}>Services Needed</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className="flex items-center gap-3 text-left group cursor-pointer py-1"
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: selectedServices.includes(service) ? '#7C5DFB' : '#E8E6F0',
                          borderRadius: '6px',
                          backgroundColor: selectedServices.includes(service) ? '#7C5DFB' : 'white',
                        }}
                      >
                        {selectedServices.includes(service) && (
                          <Check size={12} className="text-white" strokeWidth={3} />
                        )}
                      </span>
                      <span
                        className="text-sm transition-colors duration-200"
                        style={{
                          color: selectedServices.includes(service) ? '#1A1A1F' : '#6B6B7A',
                          fontWeight: selectedServices.includes(service) ? 500 : 400,
                        }}
                      >
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Frequency */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: showFrequency ? '120px' : '0',
                  opacity: showFrequency ? 1 : 0,
                }}
              >
                <label className={labelClass} style={labelStyle}>Janitorial Frequency</label>
                <select
                  name="janitorial_frequency"
                  className={inputClass + ' appearance-none cursor-pointer'}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="" disabled selected>Select frequency</option>
                  {frequencyOptions.map((o) => (
                    <option key={o} value={o} style={{ backgroundColor: '#F8F6FF' }}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div>
                <label className={labelClass} style={labelStyle}>Property Address or Neighborhood</label>
                <input
                  type="text" name="address" placeholder="e.g. Downtown LA, Burbank" required
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Best Time */}
              <div>
                <label className={labelClass} style={labelStyle}>Best Time to Reach You</label>
                <select
                  name="best_time" required
                  className={inputClass + ' appearance-none cursor-pointer'}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="" disabled selected>Select time</option>
                  {bestTimeOptions.map((o) => (
                    <option key={o} value={o} style={{ backgroundColor: '#F8F6FF' }}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Details */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Tell us about the project <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  name="details"
                  placeholder="Square footage, timeline, anything that'd help us scope the job."
                  rows={4}
                  className={inputClass + ' resize-y'}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = inputFocusStyle.borderColor; e.currentTarget.style.boxShadow = inputFocusStyle.boxShadow; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = inputStyle.border; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {submitError ? (
                <p
                  className="text-sm rounded-lg px-4 py-3"
                  style={{ backgroundColor: '#FFF0F0', border: '1px solid #F5C2C2', color: '#9B1C1C' }}
                  role="alert"
                >
                  {submitError}
                </p>
              ) : null}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4.5 bg-brand text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-brand-hover hover:shadow-button-hover hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ padding: '16px 40px' }}
                >
                  {submitting ? 'Sending...' : 'Request Walkthrough'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
