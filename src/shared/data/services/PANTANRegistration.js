import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  CreditCard,
  Folder,
  FolderOpen,
  Phone,
  Headset,
  Send,
  Clock,
  ShieldCheck,
  UserRound,
  IndianRupee,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const panTanRegistration =
{
  id: "pan-tan-registration",
  slug: "pan-tan-registration",

  category: CATEGORIES.REGISTRATION,
  label: "PAN & TAN Registration",
  subtitle: "Get essential tax identification for your business",
  seo: {
  title: "PAN & TAN Registration | Empowering U",
  description:
    "Get assistance obtaining PAN and TAN registrations required for applicable business and tax activities, with guidance through the process.",
  },

  hero: {
    title: "PAN & TAN Registration",
    description: "Get assistance obtaining PAN and TAN registrations required for applicable business and tax activities.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'PAN / TAN', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: CreditCard, text: 'Tax Identification' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Processing' },
      { icon: ShieldCheck, text: 'Secure Support' },
    ],
  },

  overview: {
    title: 'Why does your business need PAN & TAN?',
    description: 'PAN and TAN serve different tax-related purposes for businesses and entities.\n\nThey help you:',
    benefits: [
      'Maintain proper tax records',
      'Handle applicable TDS requirements',
      'Complete business documentation',
      'Support financial and banking processes',
    ],
  },

  pricing: {
    headline: null,
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
        title: 'Requirement Check',
        variant: "lucide",
        icon: ClipboardCheck,
      },
      {
        id: "2",
        title: 'Document Collection',
        variant: "lucide",
        icon: FolderOpen,
      },
      {
        id: "3",
        title: 'Application Submission',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'PAN / TAN Issued',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Applicant Details',
      icon: UserRound,
      list: [
        'PAN / Identity Details of Applicant',
        'Aadhaar / Identity Proof',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Name',
        'Constitution Details',
        'Business Address',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Registration Certificate (if applicable)',
        'Authorization Documents (if applicable)',
      ],
    },
    {
      title: 'Contact Details',
      icon: Phone,
      list: [
        'Mobile Number',
        'Email Address',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is PAN used for?',
      answer: 'PAN is a tax identification number used for various financial and tax-related activities.',
    },
    {
      question: 'What is TAN used for?',
      answer: 'TAN is required for entities responsible for collecting or deducting tax at source where applicable.',
    },
    {
      question: 'Does every business need TAN?',
      answer: 'TAN requirements depend on whether the entity is required to deduct or collect tax at source.',
    },
    {
      question: 'Can you help with both?',
      answer: 'Yes. We can assist with the applicable PAN and TAN application process.',
    },
    {
      question: 'How long does it take?',
      answer: 'Processing time depends on the application and the issuing authority.',
    },
  ],
};
