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

export const GSTAnnualReturn = {
  id: "gst-annual-return",
  slug: "gst-annual-return",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "GST Annual Return",
  subtitle: "Get assistance preparing and filing the applicable annual GST return using your year's GST records and reported transactions.",
  seo: {
    title: "GST Annual Return | Empowering Biz",
    description: "Get assistance preparing and filing the applicable annual GST return using your year's GST records and reported transactions.",
  },

  hero: {
    title: "GST Annual Return",
    description: "Get assistance preparing and filing the applicable annual GST return using your year's GST records and reported transactions.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: ShieldCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Headset, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: ShieldCheck, text: "Annual Compliance" },
      { icon: Headset, text: "Record Review" },
      { icon: Clock, text: "Reconciliation Support" },
      { icon: Send, text: "Guided Filing" },
    ],
  },

  overview: {
    title: "Who is GST Annual Return for?",
    description: "Get assistance preparing and filing the applicable annual GST return using your year's GST records and reported transactions.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Annual Data Collection",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "2",
        title: "Reconciliation Review",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "3",
        title: "Return Preparation",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "4",
        title: "Annual Filing",
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
        "GST registration details",
        "GST returns for the year",
        "Sales and purchase records",
        "Books / transaction summaries",
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
