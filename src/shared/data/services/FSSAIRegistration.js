import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  ClipboardCheck,
  Utensils,
  Headset,
  FileSearchCorner,
  Folder,
  Clock,
  MapPinCheck,
  Send,
  ShieldCheck,
  UserRound,
  IndianRupee,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const fssaiRegistration =
{
  id: "fssai-registration",
  slug: "fssai-registration",

  category: CATEGORIES.REGISTRATION,
  label: "FSSAI Registration",
  subtitle: "Get your food business registration support",


  hero: {
    title: "FSSAI Registration",
    description: "Get assistance with FSSAI registration for your eligible food business.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'FSSAI', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Utensils, text: 'Food Business' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Follow-up' },
      { icon: ShieldCheck, text: 'Compliance Support' },
    ],
  },

  overview: {
    title: 'Who needs FSSAI registration?',
    description: 'Food businesses may require FSSAI registration or licensing depending on their nature and scale.\n\nIt helps you:',
    benefits: [
      'Meet applicable food safety requirements',
      'Build customer confidence',
      'Support legal business operations',
      'Maintain proper food business records',
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
        title: 'Business Assessment',
        variant: "lucide",
        icon: ClipboardCheck,
      },
      {
        id: "2",
        title: 'Document Verification',
        variant: "lucide",
        icon: FileSearchCorner,
      },
      {
        id: "3",
        title: 'Application Submission',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'Registration / License',
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
        'PAN Card',
        'Aadhaar / Identity Proof',
        'Photograph',
      ],
    },
    {
      title: 'Business Premises',
      icon: MapPinCheck,
      list: [
        'Address Proof',
        'Rent Agreement / Ownership Proof',
      ],
    },
    {
      title: 'Food Business Details',
      icon: Utensils,
      list: [
        'Nature of Food Business',
        'Food Products / Activities',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Business Registration Documents (if applicable)',
        'Other documents based on business type',
      ],
    },
  ],

  faqs: [
    {
      question: 'Who needs FSSAI registration?',
      answer: 'Food businesses generally need the applicable FSSAI registration or license depending on their activity and scale.',
    },
    {
      question: 'Is basic registration enough for every food business?',
      answer: 'The applicable category depends on the nature and scale of the food business.',
    },
    {
      question: 'Can a new food business apply?',
      answer: 'Yes, eligible new food businesses can apply for the applicable registration or license.',
    },
    {
      question: 'What documents are needed?',
      answer: 'Documents vary according to the food business and applicable category.',
    },
    {
      question: 'Will you help with the application?',
      answer: 'Yes. We assist with document preparation and the application process.',
    },
  ],
};
