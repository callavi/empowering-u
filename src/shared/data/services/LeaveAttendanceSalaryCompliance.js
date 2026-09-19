import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  Users,
  Folder,
  MessageCircle,
  FileText,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const LeaveAttendanceSalaryCompliance = {
  id: "leave-attendance-salary-compliance",
  slug: "leave-attendance-salary-compliance",
  category: CATEGORIES.REGISTRATION,
  subcategory: "payroll-labour-compliance",
  label: "Leave, Attendance & Salary Compliance",
  subtitle: "Get assistance organizing leave, attendance, and salary records to support consistent payroll and employee compliance processes.",
  seo: {
    title: "Leave, Attendance & Salary Compliance | Empowering Biz",
    description: "Get assistance organizing leave, attendance, and salary records to support consistent payroll and employee compliance processes.",
  },

  hero: {
    title: "Leave, Attendance & Salary Compliance",
    description: "Get assistance organizing leave, attendance, and salary records to support consistent payroll and employee compliance processes.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: "COMPLIANCE", className: "top-right" },
      { icon: Building2, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: Users, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Building2, text: "Record Review" },
      { icon: Users, text: "Payroll Support" },
      { icon: Folder, text: "Process Organization" },
      { icon: MessageCircle, text: "Compliance Assistance" },
    ],
  },

  overview: {
    title: "Who is Leave, Attendance & Salary Compliance for?",
    description: "Get assistance organizing leave, attendance, and salary records to support consistent payroll and employee compliance processes.\n\nThe service focuses on preparing the relevant information, documentation, and filing or compliance formalities applicable to your situation.\n\nSuitable for businesses and organizations that need structured assistance with this requirement.\n\nIt can help you:",
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
        title: "Policy / Process Review",
        variant: "lucide",
        icon: Building2,
      },
      {
        id: "2",
        title: "Attendance Review",
        variant: "lucide",
        icon: Users,
      },
      {
        id: "3",
        title: "Leave & Salary Reconciliation",
        variant: "lucide",
        icon: Folder,
      },
      {
        id: "4",
        title: "Compliance Record Preparation",
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
        "Attendance records",
        "Leave records",
        "Salary structure",
        "Payroll records",
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
