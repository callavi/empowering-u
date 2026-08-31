import { CATEGORIES } from "./catalogueInfo";
import {
  ShieldCheck,
  Headset,
  Clock,
  Send,
  FileText,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const Form16Support = {
  id: "form-16-16a-support",
  slug: "form-16-16a-support",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "Form 16 / 16A Support",
  subtitle: "Get assistance with preparing or organizing information required for Form 16 or Form 16A documentation.",
  seo: {
    title: "Form 16 / 16A Support | Empowering U",
    description: "Get assistance with preparing or organizing information required for Form 16 or Form 16A documentation.",
  },

  hero: {
    title: "Form 16 / 16A Support",
    description: "Get assistance with preparing or organizing information required for Form 16 or Form 16A documentation.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: ShieldCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Headset, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: ShieldCheck, text: "Documentation Support" },
      { icon: Headset, text: "TDS Review" },
      { icon: Clock, text: "Record Matching" },
      { icon: Send, text: "Guided Assistance" },
    ],
  },

  overview: {
    title: "Who is Form 16 / 16A Support for?",
    description: "Get assistance with preparing or organizing information required for Form 16 or Form 16A documentation.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Data Collection",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "2",
        title: "TDS Verification",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "3",
        title: "Document Preparation",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "4",
        title: "Final Review",
        variant: "lucide",
        icon: Send,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "TAN",
        "TDS records",
        "Employee / deductee details",
        "Salary or payment information",
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
