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

export const TermsConditions = {
  id: "terms-conditions",
  slug: "terms-conditions",
  category: CATEGORIES.REGISTRATION,
  subcategory: "intellectual-property-legal",
  label: "Terms & Conditions",
  subtitle: "Get assistance preparing business terms and conditions appropriate to the services, products, and operating model provided.",
  seo: {
    title: "Terms & Conditions | Empowering Biz",
    description: "Get assistance preparing business terms and conditions appropriate to the services, products, and operating model provided.",
  },

  hero: {
    title: "Terms & Conditions",
    description: "Get assistance preparing business terms and conditions appropriate to the services, products, and operating model provided.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Clock, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Send, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Clock, text: "Business Documentation" },
      { icon: Send, text: "Clear Terms" },
      { icon: Building2, text: "Website / Service Support" },
      { icon: Users, text: "Guided Assistance" },
    ],
  },

  overview: {
    title: "Who is Terms & Conditions for?",
    description: "Get assistance preparing business terms and conditions appropriate to the services, products, and operating model provided.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Business Model Review",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "2",
        title: "Terms Collection",
        variant: "lucide",
        icon: Send,
      },
      {
        id: "3",
        title: "Draft Preparation",
        variant: "lucide",
        icon: Building2,
      },
      {
        id: "4",
        title: "Review & Finalization",
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
        "Business details",
        "Products / services",
        "Customer terms",
        "Operational policies",
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
