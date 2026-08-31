import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  FileText,
  ShieldCheck,
  Headset,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const AdvanceTaxCalculations = {
  id: "advance-tax-calculations",
  slug: "advance-tax-calculations",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "Advance Tax Calculations",
  subtitle: "Get assistance estimating applicable advance tax obligations based on available income and tax information.",
  seo: {
    title: "Advance Tax Calculations | Empowering U",
    description: "Get assistance estimating applicable advance tax obligations based on available income and tax information.",
  },

  hero: {
    title: "Advance Tax Calculations",
    description: "Get assistance estimating applicable advance tax obligations based on available income and tax information.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: BadgeCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: FileText, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: BadgeCheck, text: "Tax Estimate" },
      { icon: FileText, text: "Income Review" },
      { icon: ShieldCheck, text: "Planning Support" },
      { icon: Headset, text: "Guided Assistance" },
    ],
  },

  overview: {
    title: "Who is Advance Tax Calculations for?",
    description: "Get assistance estimating applicable advance tax obligations based on available income and tax information.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Income Review",
        variant: "lucide",
        icon: BadgeCheck,
      },
      {
        id: "2",
        title: "Taxable Income Assessment",
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "3",
        title: "Advance Tax Estimate",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "4",
        title: "Payment Guidance",
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
        "Income details",
        "Previous tax return",
        "TDS / TCS details",
        "Relevant deduction information",
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
