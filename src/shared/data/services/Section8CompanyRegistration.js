import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  IndianRupee,
  HeartHandshake,
  FileText,
  Folder,
  Headset,
  MapPinCheck,
  MessageCircle,
  Send,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const section8CompanyRegistration =
{
  id: "section-8-company-registration",
  slug: "section-8-company-registration",

  category: CATEGORIES.REGISTRATION,
  label: "Section 8 Company Registration",
  subtitle: "Set up a company for charitable or social objectives",


  hero: {
    title: "Section 8 Company Registration",
    description: "Get assistance setting up a Section 8 Company for eligible charitable, social, educational, or other approved objectives.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'SECTION 8', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: HeartHandshake, text: 'Social Purpose' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Guided Process' },
      { icon: ShieldCheck, text: 'Compliance Support' },
    ],
  },

  overview: {
    title: 'Who is a Section 8 Company for?',
    description: 'Section 8 Companies are intended for eligible objectives such as charitable, educational, social, or other approved purposes.\n\nIt can help you:',
    benefits: [
      'Create a formal nonprofit structure',
      'Establish organizational credibility',
      'Operate with defined objectives',
      'Build a structured governance framework',
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
        title: 'Objective Discussion',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Name & Document Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "3",
        title: 'Application Filing',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'Incorporation Completion',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Director Details',
      icon: Users,
      list: [
        'PAN Card',
        'Aadhaar / Identity Proof',
        'Photographs',
      ],
    },
    {
      title: 'Registered Office',
      icon: MapPinCheck,
      list: [
        'Address Proof',
        'Rent Agreement / Ownership Proof',
        'NOC if applicable',
      ],
    },
    {
      title: 'Organization Details',
      icon: Building2,
      list: [
        'Proposed Name',
        'Objects of the Company',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'MOA / AOA Inputs',
        'Declarations and other required documents',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is a Section 8 Company?',
      answer: 'It is a company structure intended for eligible nonprofit objectives such as charitable, educational, social, or similar purposes.',
    },
    {
      question: 'Who can start one?',
      answer: 'Eligible individuals or organizations can establish one subject to the applicable legal requirements.',
    },
    {
      question: 'What documents are needed?',
      answer: 'Director, registered office, proposed objectives, and incorporation documents are generally required.',
    },
    {
      question: 'How long does registration take?',
      answer: 'The timeline depends on name approval, document preparation, government processing, and any queries raised.',
    },
    {
      question: 'Can you help after incorporation?',
      answer: 'We can guide you on the immediate documentation and compliance requirements.',
    },
  ],
};
