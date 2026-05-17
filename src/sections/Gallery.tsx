import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', label: 'Office Building — Downtown LA' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'Commercial Space — Santa Monica' },
  { src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80', label: 'Pressure Washing — Long Beach' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', label: 'Warehouse — Commerce' },
  { src: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=80', label: 'Lobby Cleaning — Century City' },
  { src: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=600&q=80', label: 'Retail Space — Pasadena' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', label: 'Section 8 Turnover — Compton' },
  { src: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&q=80', label: 'Commercial Exterior — Burbank' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headers = [eyebrowRef.current, titleRef.current, subtitleRef.current];
      gsap.set(headers, { opacity: 0, y: 24 });
      gsap.to(headers, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', once: true },
      });

      const imgs = imagesRef.current.filter(Boolean);
      gsap.set(imgs, { opacity: 0, y: 24 });
      gsap.to(imgs, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06,
        scrollTrigger: { trigger: gridRef.current, start: 'top 88%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: '#F8F6FF', padding: 'clamp(80px, 10vw, 120px) 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <span ref={eyebrowRef} className="eyebrow block mb-4" style={{ opacity: 0 }}>
          — OUR WORK
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
          Recent jobs.
        </h2>
        <p
          ref={subtitleRef}
          className="leading-relaxed mb-10 lg:mb-14"
          style={{
            fontSize: '16px',
            color: '#6B6B7A',
            maxWidth: '520px',
            opacity: 0,
          }}
        >
          A sample of properties we've serviced across LA County. Click any image to see project details.
        </p>

        {/* PLACEHOLDER GALLERY — Client will replace these Unsplash images with real job photos. */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => { imagesRef.current[index] = el; }}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              style={{
                boxShadow: '0 4px 24px rgba(124, 93, 251, 0.08)',
                opacity: 0,
                aspectRatio: '4/3',
              }}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#7C5DFB]/80 via-[#7C5DFB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              >
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm font-medium"
          style={{ color: '#7C5DFB' }}
        >
          More projects coming soon
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].label}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
            />
            <p className="text-white text-center mt-3 font-medium text-sm">
              {galleryImages[lightboxIndex].label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
