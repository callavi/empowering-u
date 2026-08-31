import { CATEGORIES } from "./catalogueInfo";
import {
  MessageCircle,
  BadgeCheck,
  FileText,
  ShieldCheck,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const IPDocumentation = {
  id: "ip-documentation",
  slug: "ip-documentation",
  category: CATEGORIES.REGISTRATION,
  subcategory: "intellectual-property-legal",
  label: "IP Documentation",
  subtitle: "Get assistance preparing and organizing documentation relating to intellectual property ownership, use, and protection.",
  seo: {
    title: "IP Documentation | Empowering U",
    description: "Get assistance preparing and organizing documentation relating to intellectual property ownership, use, and protection.",
  },

  hero: {
    title: "IP Documentation",
    description: "Get assistance preparing and organizing documentation relating to intellectual property ownership, use, and protection.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: MessageCircle, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: MessageCircle, text: "Document Preparation" },
      { icon: BadgeCheck, text: "IP Support" },
      { icon: FileText, text: "Record Organization" },
      { icon: ShieldCheck, text: "Guided Assistance" },
    ],
  },

  overview: {
    title: "Who is IP Documentation for?",
    description: "Get assistance preparing and organizing documentation relating to intellectual property ownership, use, and protection.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
    benefits: [
      "Understand the applicable requirement",
      "Organize the required information",
      "Prepare supporting documentation",
      "Complete the relevant formalities",
    ],
  },

  pricing: {
    headline: null,
    highlights: [
      { text: "Government Fees Extra" },
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
    illustration: null,
    features: [
      {
        id: "1",
        title: "Requirement Discussion",
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: "IP Information Collection",
        variant: "lucide",
        icon: BadgeCheck,
      },
      {
        id: "3",
        title: "Document Preparation",
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "4",
        title: "Review & Finalization",
        variant: "lucide",
        icon: ShieldCheck,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "IP ownership details",
        "Asset details",
        "Supporting agreements",
        "Business / applicant documents",
      ],
    },
    {
      title: "Supporting Documents",
      icon: Folder,
      list: [
        "Additional documents based on the specific requirement",
        "Authorization or declarations if applicable",
      ],
    },
  ],

  faqs: [
    {
      question: "What does this service include?",
      answer: "It includes assistance with understanding the requirement, organizing information, preparing applicable documentation, and completing the relevant filing or compliance formalities.",
    },
    {
      question: "What documents are required?",
      answer: "The exact documents depend on the business, transaction, and applicable requirement. The required information can be confirmed during the initial review.",
    },
    {
      question: "Are government or statutory fees included?",
      answer: "Government, statutory, or third-party fees are generally separate and will depend on the applicable requirement.",
    },
    {
      question: "How long does the process take?",
      answer: "The timeline depends on the service, completeness of the information, applicable authority processing, and whether any clarification or additional documents are requested.",
    },
    {
      question: "Can you assist if I receive a query or notice?",
      answer: "Where applicable, assistance can be provided with reviewing the query or notice and organizing the information required for the next step.",
    },
  ],
};
