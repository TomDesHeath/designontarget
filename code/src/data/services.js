import serviceGuidance from '../assets/service-guidance.svg'
import serviceKitchen from '../assets/service-kitchen.svg'
import serviceBathroom from '../assets/service-bathroom.svg'
import serviceCabinetry from '../assets/service-cabinetry.svg'

export const services = [
  {
    slug: 'interior-alterations-project-guidance',
    title: 'Interior Alterations & Project Guidance',
    description:
      'Design On Target partners with you from the concept conversation through final handover, coordinating joinery, finishes, and site work so every alteration feels cohesive.',
    highlights: [
      'Collaborative design reviews to refine layouts and finishes',
      'Clear guidance on timelines, sequencing, and site readiness',
      'Hands-on craftsmen who stay with the project from start to finish',
    ],
    image: {
      src: serviceGuidance,
      alt: 'Design On Target team reviewing a interior alteration plan',
    },
  },
  {
    slug: 'kitchen-remodels',
    title: 'Kitchen Remodels',
    description:
      'From open-plan conversions to compact reconfigurations, the team builds kitchens that balance storage, flow, and statement finishes tailored to your lifestyle.',
    highlights: [
      'Structural rework to open spaces and improve circulation',
      'Custom cabinetry, shelving, and appliance integration',
      'Stone countertop fabrication and installation',
    ],
    image: {
      src: serviceKitchen,
      alt: 'Contemporary Port Elizabeth kitchen concept rendering',
    },
  },
  {
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    description:
      'Transform baths into calming retreats or bold showpieces with plumbing re-routes, walk-in showers, and imaginative material palettes that maximise every square metre.',
    highlights: [
      'Relocation of geysers, sanitary ware, and services where required',
      'Feature tiling, copper and metallic detailing, and bespoke storage',
      'Wetroom conversions with concealed drainage and ventilation',
    ],
    image: {
      src: serviceBathroom,
      alt: 'Bathroom renovation illustration with copper detailing',
    },
  },
  {
    slug: 'custom-cabinetry-bespoke-items',
    title: 'Custom Cabinetry & Bespoke Items',
    description:
      'Precision-built cupboards, shelving, and standalone pieces produced in the Horton Street workshop to solve tricky spaces and showcase craftsmanship.',
    highlights: [
      'Tailored built-ins for kitchens, sculleries, and living areas',
      'Handmade furniture and display units finished to spec',
      'On-site fitting with attention to alignment and detailing',
    ],
    image: {
      src: serviceCabinetry,
      alt: 'Custom joinery pieces crafted in the workshop',
    },
  },
]
