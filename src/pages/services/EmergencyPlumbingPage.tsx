import {
  Droplet,
  Clock,
  ShieldAlert,
  Wrench,
  Phone,
  Radio,
  Handshake,
  CircleCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Emergency Plumbing Response | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Emergency plumbing response across Southern California. Burst pipes, backed-up drains, leaks, and sewer backups. We respond fast and coordinate licensed plumbing partners.',
  h1: 'Emergency Plumbing Response.',
  subhead:
    "Burst pipes, backed-up drains, leaks that can't wait until morning. We respond, coordinate, and resolve — fast.",
  heroIcon: Droplet,
  heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    "When a pipe bursts at 11pm, the first 30 minutes matter more than the repair itself. Shutting off the water, containing the damage, and getting a licensed plumber on site fast — that's what determines whether you're dealing with a cleanup or a rebuild.",
    "Orchid responds directly. We coordinate with our network of licensed plumbing partners, manage the water damage cleanup in-house, and handle the customer experience from first call to final invoice. You call one number. We handle everything behind it.",
    'Our role is response and coordination. We mobilize the right resources, manage the timeline, and make sure nothing falls through the cracks — from the initial water shut-off to the last bit of drywall being repainted.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=900&q=80',
  whoTags: [
    'Burst pipes',
    'Backed-up drains',
    'After-hours leaks',
    'Sewer backups',
    'Water heater failures',
    'Toilet overflows',
    'Slab leaks',
    'Pipe damage',
  ],
  whoHeading: "If water is going where it shouldn't, call us first.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: '24/7 emergency dispatch' },
    { text: 'Sub-90-minute response coordination' },
    { text: 'Immediate water shut-off guidance' },
    { text: 'On-site triage and damage assessment' },
    { text: 'Coordination with licensed plumbing partners' },
    { text: 'Water extraction and damage mitigation' },
    { text: 'Documentation for insurance claims' },
    { text: 'Follow-up cleanup and restoration' },
  ],
  processSteps: [
    {
      number: '01',
      icon: Phone,
      title: 'Call',
      description:
        '24/7 dispatch, real human. We talk you through the immediate steps — water shut-off, safety, what to avoid — while we mobilize.',
    },
    {
      number: '02',
      icon: Radio,
      title: 'Assess',
      description:
        'Remote triage and water shut-off guidance. We determine scope and dispatch both a cleanup crew and a licensed plumbing partner.',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Coordinate',
      description:
        'We manage both the plumbing repair and the water damage cleanup. One timeline, one point of contact, no coordination headaches for you.',
    },
    {
      number: '04',
      icon: CircleCheck,
      title: 'Resolve',
      description:
        'Plumbing fix plus full water damage restoration — extraction, drying, cleanup, repair. One invoice, fully resolved.',
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
      icon: ShieldAlert,
      name: 'Biohazard Cleanup',
      description: 'OSHA-certified remediation for trauma and biohazard incidents.',
      href: '/services/biohazard',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
  ],
  schemaDescription:
    'Emergency plumbing response across Southern California. Burst pipes, backed-up drains, leaks, and sewer backups with rapid coordination of licensed plumbing partners and full damage restoration.',
};

export default function EmergencyPlumbingPage() {
  return <ServicePageLayout data={data} />;
}
