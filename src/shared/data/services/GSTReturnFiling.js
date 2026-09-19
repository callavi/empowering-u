import { CATEGORIES } from "./catalogueInfo";
import {
  FileText,
  ShieldCheck,
  Headset,
  Clock,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const GSTReturnFiling = {
  id: "gst-return-filing",
  slug: "gst-return-filing",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "GST Return Filing",
  subtitle: "Get assistance with preparing and filing applicable monthly or quarterly GST returns based on your business records.",
  seo: {
    title: "GST Return Filing | Empowering Biz",
    description: "Get assistance with preparing and filing applicable monthly or quarterly GST returns based on your business records.",
  },

  hero: {
    title: "GST Return Filing",
    description: "Get assistance with preparing and filing applicable monthly or quarterly GST returns based on your business records.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: FileText, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: ShieldCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: FileText, text: "Accurate Preparation" },
      { icon: ShieldCheck, text: "Timely Filing" },
      { icon: Headset, text: "Record Review" },
      { icon: Clock, text: "Compliance Support" },
    ],
  },

  overview: {
    title: "Who is GST Return Filing for?",
    description: "Get assistance with preparing and filing applicable monthly or quarterly GST returns based on your business records.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Records & Period Review",
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "2",
        title: "Return Preparation",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "3",
        title: "Review & Reconciliation",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "4",
        title: "GST Return Filing",
        variant: "lucide",
        icon: Clock,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "GSTIN details",
        "Sales and purchase records",
        "Tax invoices",
        "Previous return details, if applicable",
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
