import { CATEGORIES } from "./catalogueInfo";
import {
  Headset,
  Clock,
  Send,
  Building2,
  FileText,
  Folder,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const LabourLawRegistrationsFilings = {
  id: "labour-law-registrations-filings",
  slug: "labour-law-registrations-filings",
  category: CATEGORIES.REGISTRATION,
  subcategory: "payroll-labour-compliance",
  label: "Labour Law Registrations & Filings",
  subtitle: "Get assistance identifying and completing applicable labour-law registrations and filing requirements.",
  seo: {
    title: "Labour Law Registrations & Filings | Empowering Biz",
    description: "Get assistance identifying and completing applicable labour-law registrations and filing requirements.",
  },

  hero: {
    title: "Labour Law Registrations & Filings",
    description: "Get assistance identifying and completing applicable labour-law registrations and filing requirements.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Headset, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Clock, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Headset, text: "Compliance Review" },
      { icon: Clock, text: "Registration Support" },
      { icon: Send, text: "Filing Assistance" },
      { icon: Building2, text: "Guided Process" },
    ],
  },

  overview: {
    title: "Who is Labour Law Registrations & Filings for?",
    description: "Get assistance identifying and completing applicable labour-law registrations and filing requirements.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Requirement Assessment",
        variant: "lucide",
        icon: Headset,
      },
      {
        id: "2",
        title: "Document Collection",
        variant: "lucide",
        icon: Clock,
      },
      {
        id: "3",
        title: "Application / Filing Preparation",
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: "Completion / Follow-up",
        variant: "lucide",
        icon: Building2,
      },
    ],
  },

  documents: [
    {
      title: "Required Information",
      icon: FileText,
      list: [
        "Business details",
        "Employer details",
        "Employee records",
        "Establishment documents",
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
