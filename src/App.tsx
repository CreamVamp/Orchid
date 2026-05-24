import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import ServiceArea from './sections/ServiceArea';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Gallery from './sections/Gallery';
import WhyOrchid from './sections/WhyOrchid';
import Testimonials from './sections/Testimonials';
import WalkthroughForm from './sections/WalkthroughForm';
import Footer from './sections/Footer';
import FloatingCTA from './sections/FloatingCTA';

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Hero />
      <TrustStrip />
      <ServiceArea />
      <Services />
      <HowItWorks />
      <Gallery />
      <WhyOrchid />
      <Testimonials />
      <WalkthroughForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
