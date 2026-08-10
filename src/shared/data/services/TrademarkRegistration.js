import { CATEGORIES } from "./catalogueInfo";
import {
  IndianRupee,
  BadgeCheck,
  SearchCheck,
  Building2,
  Clock,
  Headset,
  FileText,
  Folder,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const trademarkRegistration =
{
  id: "trademark-registration",
  slug: "trademark-registration",

  category: CATEGORIES.REGISTRATION,
  label: "Trademark Registration",
  subtitle: "Protect your brand identity",


  hero: {
    title: "Trademark Registration",
    description: "Get assistance with trademark registration to protect your business name, logo, or brand identity.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'TRADEMARK', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: SearchCheck, text: 'Application Support' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Follow-up' },
      { icon: ShieldCheck, text: 'Brand Protection' },
    ],
  },

  overview: {
    title: 'Why register a trademark?',
    description: 'A trademark can help protect distinctive elements of your brand.\n\nIt can help you:',
    benefits: [
      'Protect your brand identity',
      'Build customer trust',
      'Create exclusive brand rights',
      'Strengthen your business assets',
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
        title: 'Trademark Requirement',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Availability Check',
        variant: "lucide",
        icon: SearchCheck,
      },
      {
        id: "3",
        title: 'Application Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "4",
        title: 'Application Follow-up',
        variant: "lucide",
        icon: Clock,
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
        'Business Details',
      ],
    },
    {
      title: 'Brand Details',
      icon: BadgeCheck,
      list: [
        'Brand Name',
        'Logo (if applicable)',
        'Goods or Services Details',
      ],
    },
    {
      title: 'Business Information',
      icon: Building2,
      list: [
        'Business Constitution',
        'Business Address',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Authorization / Supporting Documents where applicable',
      ],
    },
  ],

  faqs: [
    {
      question: 'What can be trademarked?',
      answer: 'Distinctive brand elements such as names, logos, and other eligible marks may be registered.',
    },
    {
      question: 'Should I check availability first?',
      answer: 'Yes. A preliminary availability search can help identify potentially conflicting marks before filing.',
    },
    {
      question: 'How long does registration take?',
      answer: 'Trademark registration involves government examination and can take time depending on the application and any objections.',
    },
    {
      question: 'Can an individual apply?',
      answer: 'Yes, eligible individuals and businesses can apply.',
    },
    {
      question: 'Will you help if there is an objection?',
      answer: 'We can discuss the appropriate assistance based on the objection and the scope of service.',
    },
  ],
};
