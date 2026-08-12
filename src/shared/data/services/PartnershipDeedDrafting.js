import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  IndianRupee,
  ClipboardList,
  Headset,
  FilePenLine,
  FileText,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";
import ConsultingIllustration from "../../Illustration/ProductIllustrations/ConsultingIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const partnershipDeedDrafting =
{
  id: "partnership-deed-drafting",
  slug: "partnership-deed-drafting",

  category: CATEGORIES.CONSULTING,
  label: "Partnership Deed Drafting",
  subtitle: "Document your partnership terms clearly",


  hero: {
    title: "Partnership Deed Drafting",
    description: "Get assistance preparing a partnership deed that clearly records the agreed terms between partners.",
    illustration: ConsultingIllustration,
    cards: [
      { icon: null, label: 'PARTNERSHIP', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: FilePenLine, text: 'Document Drafting' },
      { icon: Users, text: 'Partner Details' },
      { icon: Headset, text: 'Guided Process' },
      { icon: ShieldCheck, text: 'Clear Terms' },
    ],
  },

  overview: {
    title: 'Why prepare a partnership deed?',
    description: 'A written partnership deed helps partners clearly document their agreed business terms.\n\nIt can help define:',
    benefits: [
      'Partner roles and responsibilities',
      'Profit and loss sharing',
      'Capital contributions',
      'Decision-making arrangements',
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
        title: 'Partner Discussion',
        variant: "lucide",
        icon: Users,
      },
      {
        id: "2",
        title: 'Terms Collection',
        variant: "lucide",
        icon: ClipboardList,
      },
      {
        id: "3",
        title: 'Deed Drafting',
        variant: "lucide",
        icon: FilePenLine,
      },
      {
        id: "4",
        title: 'Review & Finalization',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Partner Details',
      icon: Users,
      list: [
        'Partner Names',
        'Identity Details',
        'Addresses',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Name',
        'Nature of Business',
        'Business Address',
      ],
    },
    {
      title: 'Financial Terms',
      icon: Landmark,
      list: [
        'Capital Contributions',
        'Profit Sharing Ratio',
      ],
    },
    {
      title: 'Agreed Terms',
      icon: FileText,
      list: [
        'Roles and Responsibilities',
        'Other Partnership Terms',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is a partnership deed?',
      answer: 'It is a written document recording the agreed terms and responsibilities of partners in a partnership.',
    },
    {
      question: 'Do all partners need to provide information?',
      answer: 'Yes. Details and agreed terms from the relevant partners are needed to prepare the document.',
    },
    {
      question: 'Can profit sharing be customized?',
      answer: 'The deed can record the agreed commercial terms, subject to applicable law.',
    },
    {
      question: 'Can an existing partnership update its deed?',
      answer: "Changes can be documented where appropriate based on the partners' agreed terms.",
    },
    {
      question: 'Should the deed be legally reviewed?',
      answer: 'For complex arrangements, independent legal review can be appropriate before execution.',
    },
  ],
};
