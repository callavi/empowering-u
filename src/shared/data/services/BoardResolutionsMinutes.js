import { CATEGORIES } from "./catalogueInfo";
import {
  Users,
  Folder,
  MessageCircle,
  BadgeCheck,
  FileText,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const BoardResolutionsMinutes = {
  id: "board-resolutions-minutes",
  slug: "board-resolutions-minutes",
  category: CATEGORIES.REGISTRATION,
  subcategory: "corporate-compliance",
  label: "Board Resolutions & Minutes",
  subtitle: "Get assistance preparing business documentation for board decisions, resolutions, and meeting minutes.",
  seo: {
    title: "Board Resolutions & Minutes | Empowering U",
    description: "Get assistance preparing business documentation for board decisions, resolutions, and meeting minutes.",
  },

  hero: {
    title: "Board Resolutions & Minutes",
    description: "Get assistance preparing business documentation for board decisions, resolutions, and meeting minutes.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Users, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Folder, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Users, text: "Structured Documentation" },
      { icon: Folder, text: "Board Support" },
      { icon: MessageCircle, text: "Document Preparation" },
      { icon: BadgeCheck, text: "Compliance Assistance" },
    ],
  },

  overview: {
    title: "Who is Board Resolutions & Minutes for?",
    description: "Get assistance preparing business documentation for board decisions, resolutions, and meeting minutes.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        icon: Users,
      },
      {
        id: "2",
        title: "Resolution / Agenda Drafting",
        variant: "lucide",
        icon: Folder,
      },
      {
        id: "3",
        title: "Review & Approval",
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "4",
        title: "Record Finalization",
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "Company details",
        "Meeting details",
        "Agenda / decision points",
        "Director information",
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
