import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  Users,
  Folder,
  MessageCircle,
  FileText,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const GSTCancellationAmendment = {
  id: "gst-cancellation-amendment",
  slug: "gst-cancellation-amendment",
  category: CATEGORIES.REGISTRATION,
  subcategory: "tax-gst-compliance",
  label: "GST Cancellation / Amendment",
  subtitle: "Get assistance with applicable GST registration amendments or cancellation formalities and supporting documentation.",
  seo: {
    title: "GST Cancellation / Amendment | Empowering Biz",
    description: "Get assistance with applicable GST registration amendments or cancellation formalities and supporting documentation.",
  },

  hero: {
    title: "GST Cancellation / Amendment",
    description: "Get assistance with applicable GST registration amendments or cancellation formalities and supporting documentation.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Building2, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Users, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Building2, text: "Application Support" },
      { icon: Users, text: "Document Review" },
      { icon: Folder, text: "Guided Process" },
      { icon: MessageCircle, text: "Compliance Assistance" },
    ],
  },

  overview: {
    title: "Who is GST Cancellation / Amendment for?",
    description: "Get assistance with applicable GST registration amendments or cancellation formalities and supporting documentation.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Requirement Review",
        variant: "lucide",
        icon: Building2,
      },
      {
        id: "2",
        title: "Document Preparation",
        variant: "lucide",
        icon: Users,
      },
      {
        id: "3",
        title: "Application Filing",
        variant: "lucide",
        icon: Folder,
      },
      {
        id: "4",
        title: "Completion / Follow-up",
        variant: "lucide",
        icon: MessageCircle,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "GST registration certificate",
        "Business / proprietor details",
        "Supporting documents for change or cancellation",
        "Previous GST records, where applicable",
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
