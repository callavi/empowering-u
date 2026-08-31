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

export const EmploymentAgreements = {
  id: "employment-agreements",
  slug: "employment-agreements",
  category: CATEGORIES.REGISTRATION,
  subcategory: "intellectual-property-legal",
  label: "Employment Agreements",
  subtitle: "Get assistance preparing employment agreements based on the role, compensation, responsibilities, and agreed employment terms.",
  seo: {
    title: "Employment Agreements | Empowering U",
    description: "Get assistance preparing employment agreements based on the role, compensation, responsibilities, and agreed employment terms.",
  },

  hero: {
    title: "Employment Agreements",
    description: "Get assistance preparing employment agreements based on the role, compensation, responsibilities, and agreed employment terms.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: ShieldCheck, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Headset, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: ShieldCheck, text: "Employment Documentation" },
      { icon: Headset, text: "Clear Terms" },
      { icon: Clock, text: "Drafting Support" },
      { icon: Send, text: "Guided Process" },
    ],
  },

  overview: {
    title: "Who is Employment Agreements for?",
    description: "Get assistance preparing employment agreements based on the role, compensation, responsibilities, and agreed employment terms.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Role & Terms Discussion",
        variant: "lucide",
        icon: ShieldCheck,
      },
      {
        id: "2",
        title: "Employment Details Collection",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "3",
        title: "Draft Preparation",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "4",
        title: "Review & Finalization",
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
        "Employer details",
        "Employee details",
        "Role / responsibilities",
        "Compensation and employment terms",
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
