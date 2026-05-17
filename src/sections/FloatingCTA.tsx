import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > heroHeight);
    };

    // IntersectionObserver to hide when form is in view
    const formEl = document.getElementById('walkthrough');
    let observer: IntersectionObserver;

    if (formEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setFormVisible(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );
      observer.observe(formEl);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer && formEl) observer.unobserve(formEl);
    };
  }, []);

  const show = visible && !formVisible;

  return (
    <a
      href="#walkthrough"
      className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-50 inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-brand-hover animate-pulse-soft"
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(10px)',
        boxShadow: '0 4px 16px rgba(124, 93, 251, 0.3)',
      }}
    >
      Schedule a Walkthrough
      <ArrowRight size={16} />
    </a>
  );
}
