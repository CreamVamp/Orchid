import {
  Droplets,
  Trash2,
  Wrench,
  Sparkles,
  ClipboardCheck,
  Shield,
  SprayCanIcon,
  CircleCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Commercial Pressure Washing | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Commercial pressure washing across Southern California. Building exteriors, parking lots, sidewalks, driveways, and loading docks. Surface-safe techniques. Free estimate.',
  h1: 'Commercial Pressure Washing.',
  subhead:
    'If grime has settled into it, we can lift it off without damaging the surface underneath.',
  heroIcon: Droplets,
  heroImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    'Pressure washing is about calibration. Too much PSI and you etch concrete or strip paint. Too little and you move the dirt around without actually cleaning it. We know the difference because we measure the difference — every surface gets its own pressure setting, nozzle selection, and detergent pairing.',
    "Our equipment is commercial-grade hot water systems, not the consumer units you rent at a hardware store. That means faster cleaning, better grease and oil removal, and results that last longer because we're actually killing the organic growth, not just blasting off the top layer.",
    "Clean exteriors signal a well-maintained property. For retail, it drives foot traffic. For offices, it sets the tone before a client walks through the door. For warehouses and industrial sites, it's about safety — oil-slicked loading docks and algae-covered walkways are liability issues waiting to happen.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&q=80',
  whoTags: [
    'Building exteriors',
    'Parking lots',
    'Sidewalks',
    'Driveways',
    'Loading docks',
    'Storefronts',
    'Drive-thrus',
    'Common areas',
  ],
  whoHeading: "If the outside of your property doesn't match the inside, we can fix that.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Surface assessment and PSI calibration' },
    { text: 'Commercial-grade hot water pressure washing' },
    { text: 'Surfactant and degreaser application when needed' },
    { text: 'Concrete, brick, stucco, vinyl, wood' },
    { text: 'Gum and graffiti removal' },
    { text: 'Oil and grease stain treatment' },
    { text: 'Eco-friendly cleaning agents' },
    { text: 'Before/after photo documentation' },
  ],
  processSteps: [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Walkthrough',
      description:
        'We identify every surface type, measure the grime level, and select the right PSI and technique for each area.',
    },
    {
      number: '02',
      icon: Shield,
      title: 'Prep',
      description:
        'We clear the area, protect landscaping and fixtures, and set up containment for runoff when required.',
    },
    {
      number: '03',
      icon: SprayCanIcon,
      title: 'Wash',
      description:
        'Commercial-grade hot water equipment with surface-appropriate technique. Every square foot gets the right treatment.',
    },
    {
      number: '04',
      icon: CircleCheck,
      title: 'Inspect',
      description:
        'Final walkthrough with you. Before-and-after photos for your records. We leave when you say it looks right.',
    },
  ],
  relatedServices: [
    {
      icon: Sparkles,
      name: 'Janitorial Services',
      description: 'Recurring cleaning for offices, retail, and multi-unit properties.',
      href: '/services/janitorial',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
    {
      icon: Trash2,
      name: 'Junk Removal',
      description: 'Full-service haul-out for debris and waste.',
      href: '/services/junk-removal',
    },
  ],
  schemaDescription:
    'Commercial pressure washing for building exteriors, parking lots, sidewalks, and loading docks across Southern California. Surface-safe techniques with commercial-grade equipment.',
};

export default function PressureWashingPage() {
  return <ServicePageLayout data={data} />;
}
