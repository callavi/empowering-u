import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  IndianRupee,
  ShieldCheck,
  FileText,
  Folder,
  GitBranch,
  MapPinCheck,
  MessageCircle,
  Headset,
  Clock,
  UserRound,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const companyRegistrations =
{
  id: "company-registrations",
  slug: "company-registrations",

  category: CATEGORIES.REGISTRATION,
  label: "Company Registrations",
  subtitle: "Choose the right structure for your business",


  hero: {
    title: "Company Registrations",
    description: "Get expert assistance choosing and registering the right business structure for your needs.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'COMPANY', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Building2, text: 'Business Setup' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Completion' },
      { icon: ShieldCheck, text: 'Reliable Process' },
    ],
  },

  overview: {
    title: 'Which business structure is right for you?',
    description: 'Every business has different needs. We help you choose and register the structure that fits your goals.\n\nYou can choose from:',
    benefits: [
      'Sole Proprietorship',
      'Partnership',
      'LLP',
      'One Person Company (OPC)',
      'Private Limited Company',
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
      primary: { text: "Get Started Now", link: "/checkout" },
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
        title: 'Structure Selection',
        variant: "lucide",
        icon: GitBranch,
      },
      {
        id: "3",
        title: 'Document Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "4",
        title: 'Registration Completion',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Identity Documents',
      icon: UserRound,
      list: [
        'PAN Card',
        'Aadhaar Card',
        'Passport-size Photograph',
      ],
    },
    {
      title: 'Address Proof',
      icon: MapPinCheck,
      list: [
        'Residential Address Proof',
        'Registered Office Address Proof',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Proposed Business Name',
        'Business Activity Details',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Partnership Deed / MOA & AOA (as applicable)',
        'Other documents based on business structure',
      ],
    },
  ],

  faqs: [
    {
      question: 'Which business structure should I choose?',
      answer: 'The right structure depends on your business goals, ownership, liability, compliance needs, and plans for growth. Our team can help you compare the options.',
    },
    {
      question: 'Can a new business apply?',
      answer: 'Yes. We can assist with registration for newly planned businesses as well as businesses that are already operating.',
    },
    {
      question: 'What documents are required?',
      answer: 'Requirements vary by business structure. We will provide a document checklist based on the option you choose.',
    },
    {
      question: 'How long does registration take?',
      answer: 'The timeline depends on the structure, document verification, and government processing.',
    },
    {
      question: 'Will you help after registration?',
      answer: 'We can guide you on the immediate compliance and documentation requirements relevant to your business.',
    },
  ],
};
