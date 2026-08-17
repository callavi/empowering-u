import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  ClipboardCheck,
  BadgeCheck,
  FileCheck2,
  IndianRupee,
  Folder,
  ListChecks,
  MessageCircle,
  Clock,
  Headset,
  SearchCheck,
} from "lucide-react";
import ConsultingIllustration from "../../Illustration/ProductIllustrations/ConsultingIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const msmeConsultation =
{
  id: "msme-consultation",
  slug: "msme-consultation",

  category: CATEGORIES.CONSULTING,
  label: "MSME Consultation",
  subtitle: "Get practical guidance for your MSME",
  seo: {
  title: "MSME Consultation | Empowering U",
  description:
    "Get practical MSME guidance covering setup, compliance, documentation, and business growth to help you make informed decisions for your business.",
  },

  hero: {
    title: "MSME Consultation",
    description: "Get practical guidance on MSME setup, compliance, documentation, and business growth based on your needs.",
    illustration: ConsultingIllustration,
    cards: [
      { icon: null, label: 'MSME', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: MessageCircle, text: 'Personalized Advice' },
      { icon: Headset, text: 'Expert Guidance' },
      { icon: ClipboardCheck, text: 'Practical Support' },
      { icon: Clock, text: 'Flexible Sessions' },
    ],
  },

  overview: {
    title: 'Who can benefit from MSME consultation?',
    description: 'MSME consultation is useful for entrepreneurs and small businesses that need help making informed decisions.\n\nIt can help you:',
    benefits: [
      'Understand applicable registrations',
      'Identify documentation requirements',
      'Plan business improvements',
      'Make better operational decisions',
    ],
  },

  pricing: {
    headline: "Starting from",
    highlights: [
      { text: "Expert Assistance" },
      { text: "Transparent Process" },
      { text: "Dedicated Support" },
    ],
    cta: {
      primary: { text: "Get Started Now", link: "/cart" },
      secondary: { text: "Request a Callback", link: "/contact" },
    },
  },

  process: {
    heading: "Process",
    accent: null,
    variant: "journey",
    illustration: StepsIllustration,
    features: [
      {
        id: "1",
        title: 'Requirement Discussion',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Business Assessment',
        variant: "lucide",
        icon: SearchCheck,
      },
      {
        id: "3",
        title: 'Recommendations',
        variant: "lucide",
        icon: ListChecks,
      },
      {
        id: "4",
        title: 'Action Plan',
        variant: "lucide",
        icon: ClipboardCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Business Information',
      icon: Building2,
      list: [
        'Business Type',
        'Business Activity',
        'Location',
      ],
    },
    {
      title: 'Current Registrations',
      icon: FileCheck2,
      list: [
        'Existing Certificates',
        'Current Compliance Details',
      ],
    },
    {
      title: 'Business Challenges',
      icon: MessageCircle,
      list: [
        'Current Issues',
        'Growth Goals',
      ],
    },
    {
      title: 'Supporting Information',
      icon: Folder,
      list: [
        'Financial / Operational Details if relevant',
      ],
    },
  ],

  faqs: [
    {
      question: 'What topics can I discuss?',
      answer: 'Topics may include registration, compliance, documentation, business setup, operations, and growth depending on your needs.',
    },
    {
      question: 'Is this only for new MSMEs?',
      answer: 'No. Existing businesses can also use consultation to address current challenges and improve operations.',
    },
    {
      question: 'Will I get actionable recommendations?',
      answer: 'Yes. The goal is to provide practical next steps based on your situation.',
    },
    {
      question: 'Can consultation be online?',
      answer: 'Yes. Sessions can be conducted online where appropriate.',
    },
    {
      question: 'How long is a consultation?',
      answer: 'Session length can depend on the complexity of the requirement and the agreed scope.',
    },
  ],
};
