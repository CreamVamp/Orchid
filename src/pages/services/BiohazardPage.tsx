import {
  ShieldAlert,
  Trash2,
  Clock,
  Wrench,
  Phone,
  Shield,
  Sparkles,
  ClipboardCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Certified Biohazard Cleanup | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'OSHA-compliant biohazard cleanup across Southern California. Discreet, certified response for trauma, sewage, hoarding, and bodily fluid incidents. Available 24/7.',
  h1: 'Certified Biohazard Cleanup.',
  subhead:
    'Trained, discreet, and OSHA-compliant. We respond to the calls nobody else wants to take.',
  heroIcon: ShieldAlert,
  heroImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    'Biohazard cleanup is not standard cleaning. It requires trained technicians, proper PPE, certified disposal pathways, and a level of discretion that respects what the people on the other end of the phone are going through. We understand that.',
    'Every technician on our biohazard team is certified in bloodborne pathogen handling, OSHA-compliant remediation, and biohazardous material transport. We follow federal and state regulations at every step — containment, remediation, sanitization, verification, and documentation.',
    "We arrive in unmarked vehicles. We work quietly and efficiently. We coordinate directly with insurance adjusters when needed and provide full compliance documentation for property managers, landlords, and facility operators. You don't have to explain the situation to multiple vendors — we handle it from first call to final sign-off.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80',
  whoTags: [
    'Bodily fluid incidents',
    'Sewage backup',
    'Unattended death cleanup',
    'Hoarding remediation',
    'Crime scene response',
    'Trauma cleanup',
  ],
  whoHeading: "If you're dealing with this, we can help.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Site assessment and containment' },
    { text: 'OSHA-compliant PPE for all techs' },
    { text: 'Bloodborne pathogen remediation' },
    { text: 'Biohazardous material removal and certified disposal' },
    { text: 'Surface and structural sanitization' },
    { text: 'Odor remediation' },
    { text: 'ATP testing post-cleanup (verifies sanitization)' },
    { text: 'Coordination with insurance adjusters' },
    { text: 'Documentation for compliance records' },
    { text: 'Discreet, unmarked vehicles' },
  ],
  processSteps: [
    {
      number: '01',
      icon: Phone,
      title: 'Call',
      description:
        '24/7 dispatch, immediate response coordination. A real person answers and begins mobilizing the right crew for your situation.',
    },
    {
      number: '02',
      icon: Shield,
      title: 'Containment',
      description:
        'We isolate the affected area, set up engineering controls, and establish a clear remediation perimeter before any work begins.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Remediation',
      description:
        'Full cleanup, decontamination, and sanitization using EPA-registered disinfectants and OSHA-compliant protocols throughout.',
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Verification',
      description:
        'ATP testing confirms the space is fully sanitized. Full documentation provided for insurance and compliance records.',
    },
  ],
  relatedServices: [
    {
      icon: Clock,
      name: '24/7 Emergency Services',
      description: 'Rapid response for floods, spills, and urgent property damage.',
      href: '/services/emergency-services',
    },
    {
      icon: Trash2,
      name: 'Junk Removal',
      description: 'Full-service haul-out for debris, furniture, and waste.',
      href: '/services/junk-removal',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
  ],
  schemaDescription:
    'OSHA-compliant biohazard cleanup services across Southern California. Certified trauma, sewage, hoarding, and crime scene remediation with discreet response and full documentation.',
};

export default function BiohazardPage() {
  return <ServicePageLayout data={data} />;
}
