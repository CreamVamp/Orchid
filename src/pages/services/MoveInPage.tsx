import {
  KeyRound,
  Wrench,
  Trash2,
  Sparkles,
  ClipboardCheck,
  Search,
  Paintbrush,
  FileCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Section 8 & Move-In Turnovers | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Section 8 inspection-ready unit prep and move-in turnovers across Southern California. HACLA-compliant deep cleaning and repairs. First-time pass, every time.',
  h1: 'Section 8 & Move-In Turnovers.',
  subhead:
    "We've prepped enough units for HACLA inspection to know exactly what they look for. First-time pass, every time.",
  heroIcon: KeyRound,
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    "A failed Section 8 inspection costs more than the re-inspection fee. It costs weeks of lost rent, tenant displacement, and back-and-forth with HACLA that nobody has time for. We've prepped enough units across LA County to know exactly what inspectors look for — and we make sure they find it on the first visit.",
    "Our turnover process is comprehensive: deep cleaning to HACLA standards, functional checks on every outlet and fixture, paint touch-ups, caulking, appliance cleaning, and a final walkthrough using the same checklist HACLA inspectors use. We don't guess. We verify.",
    "Property owners who use us for turnovers report shorter vacancy periods and zero re-inspections. That's not luck — it's a system. Every unit goes through the same 40-point checklist before we hand it back to you, inspection-ready.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  whoTags: [
    'HACLA Section 8 units',
    'Multi-unit property owners',
    'Apartment managers',
    'Single-family rentals',
    'Post-tenant turnovers',
    'Move-in prep',
  ],
  whoHeading: "If inspection day makes you nervous, we can change that.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Deep cleaning to HACLA standards' },
    { text: 'GFCI outlet inspection' },
    { text: 'Smoke and CO detector testing' },
    { text: 'Window and screen condition check' },
    { text: 'Door, lock, and lockset verification' },
    { text: 'Caulking and sealing' },
    { text: 'Wall and paint touch-ups' },
    { text: 'Appliance cleaning and condition check' },
    { text: 'Plumbing leak inspection' },
    { text: 'Final walkthrough checklist' },
  ],
  processSteps: [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Assess',
      description:
        'We walk the unit and build a complete punch list — every item that needs cleaning, repair, or replacement before inspection.',
    },
    {
      number: '02',
      icon: Paintbrush,
      title: 'Prep',
      description:
        'Deep cleaning plus repairs as needed. Paint, caulk, fixtures, appliances — everything brought to HACLA standard.',
    },
    {
      number: '03',
      icon: Search,
      title: 'Pre-inspect',
      description:
        'We run through the full HACLA checklist ourselves before you ever schedule the official inspection. Nothing gets missed.',
    },
    {
      number: '04',
      icon: FileCheck,
      title: 'Hand off',
      description:
        'Unit is inspection-ready. Documentation provided. You schedule HACLA with confidence, not anxiety.',
    },
  ],
  relatedServices: [
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
    {
      icon: Trash2,
      name: 'Junk Removal',
      description: 'Full-service haul-out for abandoned furniture and debris.',
      href: '/services/junk-removal',
    },
    {
      icon: Sparkles,
      name: 'Janitorial Services',
      description: 'Recurring cleaning for offices, retail, and multi-unit properties.',
      href: '/services/janitorial',
    },
  ],
  schemaDescription:
    'Section 8 inspection-ready unit preparation and move-in turnovers across Southern California. HACLA-compliant deep cleaning, repairs, and a 40-point pre-inspection checklist for first-time pass rates.',
};

export default function MoveInPage() {
  return <ServicePageLayout data={data} />;
}
