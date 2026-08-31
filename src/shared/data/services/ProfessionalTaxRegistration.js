import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  FileText,
  ShieldCheck,
  Headset,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const ProfessionalTaxRegistration = {
  id: "professional-tax-registration",
  slug: "professional-tax-registration",
  category: CATEGORIES.REGISTRATION,
  subcategory: "business-registration-setup",
  label: "Professional Tax Registration",
  subtitle: "Get assistance with Professional Tax registration and the required setup formalities for eligible businesses and employers.",
  seo: {
    title: "Professional Tax Registration | Empowering U",
    description: "Get assistance with Professional Tax registration and the required setup formalities for eligible businesses and employers.",
  },

  hero: {
    title: "Professional Tax Registration",
    description: "Get assistance with Professional Tax registration and the required setup formalities for eligible businesses and employers.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: BadgeCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: FileText, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: BadgeCheck, text: "Professional Tax Setup" },
      { icon: FileText, text: "Expert Assistance" },
      { icon: ShieldCheck, text: "Guided Process" },
      { icon: Headset, text: "Compliance Support" },
    ],
  },

  overview: {
    title: "Who is Professional Tax Registration for?",
    description: "Get assistance with Professional Tax registration and the required setup formalities for eligible businesses and employers.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Business and employer details",
        variant: "lucide",
        icon: BadgeCheck,
      },
      {
        id: "2",
        title: "State-specific registration requirements",
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "3",
        title: "Application preparation",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "4",
        title: "Registration completion",
        variant: "lucide",
        icon: Headset,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "Business / employer details",
        "PAN and identity documents",
        "Business address proof",
        "Employee or establishment details, if applicable",
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
