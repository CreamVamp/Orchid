import {
  Wrench,
  KeyRound,
  Sparkles,
  Droplet,
  ClipboardList,
  Quote,
  Hammer,
  FileCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Maintenance & Light Repairs | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Property maintenance and light repairs across Southern California. Drywall, plumbing, lighting, doors, and general upkeep. One call instead of three vendors. Free estimate.',
  h1: 'Maintenance & Light Repairs.',
  subhead:
    'Plumbing fixes, drywall patches, lighting, the small stuff that adds up if you ignore it. One call instead of three vendors.',
  heroIcon: Wrench,
  heroImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    "Every property manager knows the pain of calling three different vendors for a drywall patch, a leaky faucet, and a flickering light. We built our maintenance service to end that. One call, one invoice, one person who knows your property and handles it all.",
    "We focus on light repairs — the kind of work that keeps a property functional and presentable but doesn't require a general contractor. If the scope goes beyond what we handle in-house, we coordinate the specialist and manage the handoff so you still only talk to one person.",
    "Response time matters for maintenance. A slow drip becomes water damage. A loose handrail becomes a liability. We prioritize same-day or next-day response for anything that affects tenant safety or property function, and we schedule the cosmetic stuff around your timeline.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80',
  whoTags: [
    'Drywall and paint',
    'Light plumbing',
    'Lighting fixtures',
    'Door and lock fixes',
    'Tile and grout',
    'Caulking and sealing',
    'Hardware replacement',
    'General upkeep',
  ],
  whoHeading: "If it's on your to-do list and has been for a while, give us the list.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Drywall patching and repainting' },
    { text: 'Light plumbing (faucet/toilet repairs, drain unclogging)' },
    { text: 'Lighting fixture installation and replacement' },
    { text: 'Door, lock, and hinge fixes' },
    { text: 'Tile and grout repair' },
    { text: 'Caulking, sealing, weatherstripping' },
    { text: 'Hardware replacement (handles, hinges)' },
    { text: 'Wall hanging and mounting' },
    { text: 'Property turnover prep' },
    { text: 'Quarterly maintenance audits' },
  ],
  processSteps: [
    {
      number: '01',
      icon: ClipboardList,
      title: 'List',
      description:
        'You tell us everything that needs attention — one item or twenty. We walk the property and build a complete scope.',
    },
    {
      number: '02',
      icon: Quote,
      title: 'Quote',
      description:
        'One written estimate for the whole bundle. No per-hour surprises, no add-on fees. You approve the total before we start.',
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Repair',
      description:
        'A uniformed tech handles the work in one visit when possible. In-and-out, clean, done right the first time.',
    },
    {
      number: '04',
      icon: FileCheck,
      title: 'Walkthrough',
      description:
        'We confirm everything is done before invoicing. If something needs a tweak, we fix it on the spot.',
    },
  ],
  relatedServices: [
    {
      icon: KeyRound,
      name: 'Section 8 & Move-In Turnovers',
      description: 'Inspection-ready unit prep for HACLA and private landlords.',
      href: '/services/move-in-section-8',
    },
    {
      icon: Sparkles,
      name: 'Janitorial Services',
      description: 'Recurring cleaning for offices, retail, and multi-unit properties.',
      href: '/services/janitorial',
    },
    {
      icon: Droplet,
      name: 'Emergency Plumbing',
      description: 'Rapid response coordination for burst pipes, leaks, and backups.',
      href: '/services/emergency-plumbing',
    },
  ],
  schemaDescription:
    'Property maintenance and light repairs across Southern California. Drywall, plumbing, lighting, doors, locks, and general upkeep. One vendor for multiple property needs.',
};

export default function MaintenancePage() {
  return <ServicePageLayout data={data} />;
}
