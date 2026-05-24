import {
  Trash2,
  Droplets,
  Wrench,
  KeyRound,
  ClipboardCheck,
  Calendar,
  Truck,
  Recycle,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: 'Junk Removal & Haul-Off | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    'Full-service junk removal and haul-off across Southern California. Furniture, debris, construction waste, and tenant cleanouts. Same-day service available. Free estimate.',
  h1: 'Junk Removal & Haul-Off.',
  subhead:
    "Old furniture, construction debris, that thing you've been meaning to throw out for two years. We haul it. You don't think about it again.",
  heroIcon: Trash2,
  heroImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    "Junk removal sounds simple until you're staring at a warehouse full of old shelving units or an apartment with three tenants' worth of abandoned furniture. We've handled both, and everything in between.",
    "We do the full haul-out — no need to drag anything to the curb. Our crew carries, loads, and removes it all. Then we sort it: donation for what's usable, recycling for what isn't, landfill only as a last resort. You don't have to think about where it goes.",
    "Same-day service is available across LA County when the situation is urgent — post-tenant turnovers, pre-inspection cleanouts, renovation debris that can't sit. We price by volume and scope, not by the mystery-hour. You'll know exactly what it costs before we start.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80',
  whoTags: [
    'Property managers',
    'Office cleanouts',
    'Estate sales',
    'Construction sites',
    'Post-tenant turnover',
    'Renovation debris',
  ],
  whoHeading: "If it's taking up space and shouldn't be, we can make it disappear.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: 'Free on-site assessment' },
    { text: 'Full-service haul-out (you don\'t lift a thing)' },
    { text: 'Furniture, appliances, electronics' },
    { text: 'Construction and renovation debris' },
    { text: 'Yard waste and outdoor junk' },
    { text: 'Sorting for donation, recycling, landfill' },
    { text: 'Responsible disposal documentation' },
    { text: 'Same-day or scheduled service' },
  ],
  processSteps: [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Assess',
      description:
        'We walk the property, identify everything that goes, and give you a firm price before we touch a single item.',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Schedule',
      description:
        'Same-day or scheduled at your convenience. We work around tenant move-outs, construction timelines, and inspection deadlines.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'Haul',
      description:
        'Uniformed crew loads and removes everything. You point, we carry. No scratches, no dents, no damage to the property.',
    },
    {
      number: '04',
      icon: Recycle,
      title: 'Sort & dispose',
      description:
        'Donation for reusable items, recycling for materials, landfill only as last resort. Responsible disposal, documented.',
    },
  ],
  relatedServices: [
    {
      icon: Droplets,
      name: 'Pressure Washing',
      description: 'Exterior cleaning for sidewalks, driveways, and building facades.',
      href: '/services/pressure-washing',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
    {
      icon: KeyRound,
      name: 'Section 8 & Move-In Turnovers',
      description: 'Inspection-ready unit prep for HACLA and private landlords.',
      href: '/services/move-in-section-8',
    },
  ],
  schemaDescription:
    'Full-service junk removal and haul-off across Southern California. Furniture, appliances, construction debris, and tenant cleanouts with responsible disposal and same-day availability.',
};

export default function JunkRemovalPage() {
  return <ServicePageLayout data={data} />;
}
