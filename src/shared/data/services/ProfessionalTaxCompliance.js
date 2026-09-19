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

export const ProfessionalTaxCompliance = {
  id: "professional-tax-compliance",
  slug: "professional-tax-compliance",
  category: CATEGORIES.REGISTRATION,
  subcategory: "payroll-labour-compliance",
  label: "Professional Tax Compliance",
  subtitle: "Get assistance with ongoing Professional Tax compliance, applicable filings, and related employer records.",
  seo: {
    title: "Professional Tax Compliance | Empowering Biz",
    description: "Get assistance with ongoing Professional Tax compliance, applicable filings, and related employer records.",
  },

  hero: {
    title: "Professional Tax Compliance",
    description: "Get assistance with ongoing Professional Tax compliance, applicable filings, and related employer records.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: ShieldCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Headset, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: ShieldCheck, text: "PT Compliance" },
      { icon: Headset, text: "Payroll Support" },
      { icon: Clock, text: "Filing Assistance" },
      { icon: Send, text: "Guided Process" },
    ],
  },

  overview: {
    title: "Who is Professional Tax Compliance for?",
    description: "Get assistance with ongoing Professional Tax compliance, applicable filings, and related employer records.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Record Review",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "2",
        title: "Tax Calculation Support",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "3",
        title: "Return / Payment Preparation",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "4",
        title: "Compliance Follow-up",
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
        "Professional Tax registration details",
        "Payroll records",
        "Employee details",
        "Previous filings",
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
