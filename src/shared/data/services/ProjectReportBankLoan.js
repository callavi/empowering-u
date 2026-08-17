import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  Calculator,
  ClipboardList,
  IndianRupee,
  FileCheck2,
  FileText,
  BadgeCheck,
  Folder,
  Landmark,
  ChartNoAxesCombined,
  MessageCircle,
  Headset,
} from "lucide-react";
import ConsultingIllustration from "../../Illustration/ProductIllustrations/ConsultingIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const projectReportBankLoan =
{
  id: "project-report-bank-loan",
  slug: "project-report-bank-loan",

  category: CATEGORIES.CONSULTING,
  label: "Project Report for Bank Loan",
  subtitle: "Prepare a clear project report for financing",
  seo: {
    title: "Project Report for Bank Loan | Empowering U",
    description:
      "Prepare a structured project report covering your business, project costs, operations, and financial projections for loan discussions.",
  },


  hero: {
    title: "Project Report for Bank Loan",
    description: "Get a structured project report presenting your business, project costs, operations, and financial projections for loan discussions.",
    illustration: ConsultingIllustration,
    cards: [
      { icon: null, label: 'PROJECT REPORT', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Landmark, text: 'Loan Documentation' },
      { icon: ChartNoAxesCombined, text: 'Financial Projections' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: FileCheck2, text: 'Structured Report' },
    ],
  },

  overview: {
    title: 'Why prepare a project report?',
    description: 'A project report gives lenders a structured view of your proposed business or expansion.\n\nIt can help you:',
    benefits: [
      'Present the project clearly',
      'Explain funding requirements',
      'Organize financial projections',
      'Support loan application discussions',
    ],
  },

  pricing: {
    headline: null,
    highlights: [
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
    illustration: StepsIllustration,
    features: [
      {
        id: "1",
        title: 'Project Discussion',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Data Collection',
        variant: "lucide",
        icon: ClipboardList,
      },
      {
        id: "3",
        title: 'Financial Preparation',
        variant: "lucide",
        icon: Calculator,
      },
      {
        id: "4",
        title: 'Report Delivery',
        variant: "lucide",
        icon: FileCheck2,
      },
    ],
  },

  documents: [
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Profile',
        'Promoter Details',
        'Business Activity',
      ],
    },
    {
      title: 'Project Details',
      icon: FileText,
      list: [
        'Project Description',
        'Location',
        'Machinery / Equipment',
      ],
    },
    {
      title: 'Financial Details',
      icon: Landmark,
      list: [
        'Project Cost',
        'Funding Requirement',
        'Expected Revenue / Expenses',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Quotation / Estimates if available',
        'Existing Financial Records if applicable',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is a project report?',
      answer: 'It is a structured document describing a proposed project, its costs, operations, funding needs, and financial expectations.',
    },
    {
      question: 'Can you prepare reports for new businesses?',
      answer: 'Yes, provided sufficient information is available to build the project assumptions and projections.',
    },
    {
      question: 'Is loan approval guaranteed?',
      answer: 'No. The report supports the application but the final lending decision rests with the financial institution.',
    },
    {
      question: 'What financial details are needed?',
      answer: 'Project cost, funding requirement, expected revenue, expenses, and other relevant financial assumptions are useful.',
    },
    {
      question: 'Can the report be customized for a bank?',
      answer: 'Yes, the structure can be aligned with the information requested by the relevant lender.',
    },
  ],
};
