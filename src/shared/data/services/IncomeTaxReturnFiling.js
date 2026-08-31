import { CATEGORIES } from "./catalogueInfo";
import {
  Users,
  Folder,
  MessageCircle,
  BadgeCheck,
  FileText,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const IncomeTaxReturnFiling = {
  id: "income-tax-return-filing",
  slug: "income-tax-return-filing",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "Income Tax Return Filing",
  subtitle: "Get assistance preparing and filing the applicable income tax return using the information and records provided.",
  seo: {
    title: "Income Tax Return Filing | Empowering U",
    description: "Get assistance preparing and filing the applicable income tax return using the information and records provided.",
  },

  hero: {
    title: "Income Tax Return Filing",
    description: "Get assistance preparing and filing the applicable income tax return using the information and records provided.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Users, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Folder, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Users, text: "Return Preparation" },
      { icon: Folder, text: "Record Review" },
      { icon: MessageCircle, text: "Filing Assistance" },
      { icon: BadgeCheck, text: "Guided Support" },
    ],
  },

  overview: {
    title: "Who is Income Tax Return Filing for?",
    description: "Get assistance preparing and filing the applicable income tax return using the information and records provided.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Information Collection",
        variant: "lucide",
        icon: Users,
      },
      {
        id: "2",
        title: "Income & Deduction Review",
        variant: "lucide",
        icon: Folder,
      },
      {
        id: "3",
        title: "Return Preparation",
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "4",
        title: "Filing",
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
        "PAN",
        "Income details",
        "Form 16 / other income statements",
        "Investment / deduction records, where applicable",
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
