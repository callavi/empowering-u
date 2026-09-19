import { CATEGORIES } from "./catalogueInfo";
import {
  Clock,
  Send,
  Building2,
  Users,
  FileText,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const AOC4Filing = {
  id: "aoc-4-filing",
  slug: "aoc-4-filing",
  category: CATEGORIES.REGISTRATION,
  subcategory: "corporate-compliance",
  label: "AOC-4 Filing",
  subtitle: "Get assistance preparing and filing applicable AOC-4 forms with the Registrar of Companies.",
  seo: {
    title: "AOC-4 Filing | Empowering Biz",
    description: "Get assistance preparing and filing applicable AOC-4 forms with the Registrar of Companies.",
  },

  hero: {
    title: "AOC-4 Filing",
    description: "Get assistance preparing and filing applicable AOC-4 forms with the Registrar of Companies.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Clock, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Send, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Clock, text: "ROC Assistance" },
      { icon: Send, text: "Document Review" },
      { icon: Building2, text: "Filing Support" },
      { icon: Users, text: "Compliance Guidance" },
    ],
  },

  overview: {
    title: "Who is AOC-4 Filing for?",
    description: "Get assistance preparing and filing applicable AOC-4 forms with the Registrar of Companies.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Financial Data Review",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "2",
        title: "Document Preparation",
        variant: "lucide",
        icon: Send,
      },
      {
        id: "3",
        title: "Form Preparation",
        variant: "lucide",
        icon: Building2,
      },
      {
        id: "4",
        title: "ROC Filing",
        variant: "lucide",
        icon: Users,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "Financial statements",
        "Board-approved accounts",
        "Company details",
        "Digital signatures / filing credentials, where applicable",
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
