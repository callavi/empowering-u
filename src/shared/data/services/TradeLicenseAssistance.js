import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  ClipboardCheck,
  IndianRupee,
  BadgeCheck,
  FileText,
  Folder,
  FolderOpen,
  MapPinCheck,
  FileCheck2,
  Send,
  Headset,
  UserRound,
  Clock,
  ShieldCheck,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const tradeLicenseAssistance =
{
  id: "trade-license-assistance",
  slug: "trade-license-assistance",

  category: CATEGORIES.REGISTRATION,
  label: "Trade License Assistance",
  subtitle: "Get help with your local trade license",

  path: "/catalogue/trade-license-assistance",

  hero: {
    title: "Trade License Assistance",
    description: "Get assistance preparing and submitting the information required for your trade license application.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'LICENSE', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: FileCheck2, text: 'Document Support' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Follow-up' },
      { icon: ShieldCheck, text: 'Reliable Process' },
    ],
  },

  overview: {
    title: 'Who may need a Trade License?',
    description: 'Businesses operating from a physical location may need local authorization depending on their activity and jurisdiction.\n\nWe help you:',
    benefits: [
      'Understand the application requirements',
      'Prepare the required documents',
      'Submit the application correctly',
      'Track the application process',
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
        title: 'Application Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "4",
        title: 'Submission & Follow-up',
        variant: "lucide",
        icon: Send,
      },
    ],
  },

  documents: [
    {
      title: 'Applicant Details',
      icon: UserRound,
      list: [
        'PAN Card',
        'Aadhaar Card',
        'Photograph',
      ],
    },
    {
      title: 'Business Address',
      icon: MapPinCheck,
      list: [
        'Address Proof',
        'Rent Agreement (if applicable)',
        'Owner NOC (if applicable)',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Nature of Business',
        'Business Activity Details',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Existing Registration Documents (if applicable)',
        'Other local documents as required',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is a Trade License required for every business?',
      answer: 'Requirements depend on the business activity and local authority rules. We can help you understand what applies.',
    },
    {
      question: 'Can a new business apply?',
      answer: 'Yes, where the business activity and local requirements call for a trade license.',
    },
    {
      question: 'What documents are needed?',
      answer: 'The exact checklist varies by location and business activity.',
    },
    {
      question: 'How long does it take?',
      answer: 'Processing depends on the local authority and whether the submitted documents are complete.',
    },
    {
      question: 'Do you handle follow-up?',
      answer: 'Yes. We can assist with application follow-up and responses to document queries.',
    },
  ],
};
