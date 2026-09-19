import { CATEGORIES } from "./catalogueInfo";
import {
  Send,
  Building2,
  Users,
  Folder,
  FileText,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const MGT7MGT7AFiling = {
  id: "mgt-7-mgt-7a-filing",
  slug: "mgt-7-mgt-7a-filing",
  category: CATEGORIES.REGISTRATION,
  subcategory: "corporate-compliance",
  label: "MGT-7 / MGT-7A Filing",
  subtitle: "Get assistance preparing and filing the applicable annual return for a company with the Registrar of Companies.",
  seo: {
    title: "MGT-7 / MGT-7A Filing | Empowering Biz",
    description: "Get assistance preparing and filing the applicable annual return for a company with the Registrar of Companies.",
  },

  hero: {
    title: "MGT-7 / MGT-7A Filing",
    description: "Get assistance preparing and filing the applicable annual return for a company with the Registrar of Companies.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Send, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Building2, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Send, text: "Annual Return Support" },
      { icon: Building2, text: "ROC Filing" },
      { icon: Users, text: "Data Review" },
      { icon: Folder, text: "Guided Process" },
    ],
  },

  overview: {
    title: "Who is MGT-7 / MGT-7A Filing for?",
    description: "Get assistance preparing and filing the applicable annual return for a company with the Registrar of Companies.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        icon: Send,
      },
      {
        id: "2",
        title: "Shareholding / Director Review",
        variant: "lucide",
        icon: Building2,
      },
      {
        id: "3",
        title: "Form Preparation",
        variant: "lucide",
        icon: Users,
      },
      {
        id: "4",
        title: "ROC Filing",
        variant: "lucide",
        icon: Folder,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "Company details",
        "Director details",
        "Shareholding information",
        "Previous annual return details",
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
