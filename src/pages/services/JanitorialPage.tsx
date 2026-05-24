import {
  Sparkles,
  Trash2,
  Droplets,
  Wrench,
  ClipboardCheck,
  Users,
  FileCheck,
  CircleCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Commercial Janitorial Services | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Commercial janitorial services across Southern California. Daily, weekly, or monthly cleaning for offices, retail, warehouses, and multi-unit properties. Free walkthrough.',
  h1: 'Commercial Janitorial Services.',
  subhead:
    'Scheduled cleaning for offices, retail, warehouses, and multi-unit properties. Daily, weekly, monthly — your call.',
  heroIcon: Sparkles,
  heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    'Orchid janitorial is built for property managers who are tired of micromanaging cleaning crews. We assign a uniformed team to your property, build a custom checklist around your space, and show up on schedule without anyone having to remind us.',
    'The same crew comes every time. The same point of contact answers your calls. The same checklist gets completed and documented on every visit. That consistency is what makes the difference between a cleaning vendor and a cleaning partner.',
    "We work around your hours — early mornings, late evenings, weekends. You set the schedule and the scope. We handle the rest so thoroughly that most of our clients forget we're even a thing they have to think about. That's the point.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80',
  whoTags: [
    'Office buildings',
    'Retail spaces',
    'Warehouses',
    'Multi-unit residential',
    'Medical offices',
    'Co-working spaces',
  ],
  whoHeading: "If your property needs regular cleaning, we've got you covered.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Restroom sanitization (sinks, toilets, mirrors, floors)' },
    { text: 'Trash removal and liner replacement' },
    { text: 'Floor cleaning (sweep, mop, vacuum)' },
    { text: 'Common area dusting and wiping' },
    { text: 'Glass and entryway cleaning' },
    { text: 'Kitchen and breakroom maintenance' },
    { text: 'Supply restocking (paper, soap)' },
    { text: 'Monthly deep cleaning rotation' },
    { text: 'Custom add-ons (specify in walkthrough)' },
    { text: 'Documented checklists per visit' },
  ],
  processSteps: [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Walkthrough',
      description:
        'We assess the space and recommend a frequency that fits your property type, traffic, and budget.',
    },
    {
      number: '02',
      icon: CircleCheck,
      title: 'Custom scope',
      description:
        'We build a checklist that covers every area of your property — nothing generic, everything specific to you.',
    },
    {
      number: '03',
      icon: Users,
      title: 'Recurring service',
      description:
        'A uniformed crew shows up on schedule, works through the checklist, and finishes without disrupting your operations.',
    },
    {
      number: '04',
      icon: FileCheck,
      title: 'Accountability',
      description:
        'One point of contact, documented every visit. If something needs attention, you call one person and it gets handled.',
    },
  ],
  relatedServices: [
    {
      icon: Trash2,
      name: 'Junk Removal',
      description: 'Full-service haul-out for debris, furniture, and accumulated waste.',
      href: '/services/junk-removal',
    },
    {
      icon: Droplets,
      name: 'Pressure Washing',
      description: 'Exterior cleaning for building facades, sidewalks, and parking areas.',
      href: '/services/pressure-washing',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep in one call.',
      href: '/services/maintenance-repairs',
    },
  ],
  schemaDescription:
    'Commercial janitorial services for offices, retail, warehouses, and multi-unit properties across Southern California. Recurring cleaning with documented checklists and a single point of contact.',
};

export default function JanitorialPage() {
  return <ServicePageLayout data={data} />;
}
