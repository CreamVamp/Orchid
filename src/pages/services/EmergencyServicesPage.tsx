import {
  Clock,
  ShieldAlert,
  Droplet,
  Wrench,
  Phone,
  Radio,
  Truck,
  CircleCheck,
} from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import type { ServicePageData } from './ServicePageLayout';

const data: ServicePageData = {
  title: '24/7 Emergency Cleaning Response | Orchid Cleaning & Maintenance LLC',
  metaDescription:
    '24/7 emergency cleaning response across Southern California. Floods, spills, storm damage, and urgent property cleanup. Sub-90-minute response. Real dispatch, not voicemail.',
  h1: '24/7 Emergency Cleaning Response.',
  subhead:
    'Floods, after-hours spills, urgent calls when something goes wrong at 2am. We pick up. We show up. We clean up.',
  heroIcon: Clock,
  heroImage: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=900&q=80',
  overviewEyebrow: '— THE SERVICE',
  overviewParagraphs: [
    "There's a difference between 'we offer 24/7 service' and actually answering the phone at 2am. We know because we've tested the difference — when our clients call our emergency line, a real person picks up. Every time. No voicemail, no callback tomorrow, no 'please hold.'",
    "Our emergency crews carry water extraction equipment, industrial fans, dehumidifiers, and containment supplies on every vehicle. That means the first crew on site can start stabilization immediately — not just assess and wait for equipment to arrive.",
    "We coordinate directly with insurance adjusters, document everything for claims, and follow up with full restoration if needed. The immediate response stops the damage from getting worse. The follow-up makes sure the property is fully restored to pre-incident condition.",
  ],
  overviewImage: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=900&q=80',
  whoTags: [
    'Flood and water damage',
    'After-hours spills',
    'Glass and debris cleanup',
    'Storm damage',
    'Vandalism response',
    'Post-incident cleanup',
    'Property damage triage',
  ],
  whoHeading: "If it's after hours and something's wrong at your property, call us.",
  whoClosing: "We've handled it. We can handle yours.",
  includedItems: [
    { text: '24/7 dispatch (real person, not voicemail)' },
    { text: 'Sub-90-minute response across LA County' },
    { text: 'Water extraction equipment on standby' },
    { text: 'Containment and damage mitigation' },
    { text: 'Initial cleanup and triage' },
    { text: 'Coordination with insurance adjusters' },
    { text: 'Documentation for claims' },
    { text: 'Follow-up full restoration' },
  ],
  processSteps: [
    {
      number: '01',
      icon: Phone,
      title: 'Call',
      description:
        '24/7 dispatch line, real human every time. We gather the details, assess urgency, and start mobilizing before the call ends.',
    },
    {
      number: '02',
      icon: Radio,
      title: 'Triage',
      description:
        'Remote assessment of what equipment and crew size is needed. We give you an honest ETA and start dispatch immediately.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'Respond',
      description:
        'Crew arrives with extraction equipment, containment supplies, and everything needed to stop the damage from spreading.',
    },
    {
      number: '04',
      icon: CircleCheck,
      title: 'Resolve',
      description:
        'Immediate stabilization, full cleanup, and documentation. Follow-up restoration scheduled if the scope requires it.',
    },
  ],
  relatedServices: [
    {
      icon: ShieldAlert,
      name: 'Biohazard Cleanup',
      description: 'OSHA-certified remediation for trauma, sewage, and biohazard incidents.',
      href: '/services/biohazard',
    },
    {
      icon: Droplet,
      name: 'Emergency Plumbing',
      description: 'Rapid response coordination for burst pipes, leaks, and backups.',
      href: '/services/emergency-plumbing',
    },
    {
      icon: Wrench,
      name: 'Maintenance & Repairs',
      description: 'Light repairs and ongoing property upkeep.',
      href: '/services/maintenance-repairs',
    },
  ],
  schemaDescription:
    '24/7 emergency cleaning response across Southern California. Flood cleanup, water extraction, storm damage, and urgent property restoration with sub-90-minute response times.',
};

export default function EmergencyServicesPage() {
  return <ServicePageLayout data={data} />;
}
