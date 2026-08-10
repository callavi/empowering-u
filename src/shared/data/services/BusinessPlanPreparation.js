import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Headset,
  ChartNoAxesCombined,
  ClipboardList,
  Clock,
  FileText,
  Folder,
  Landmark,
  Lightbulb,
  MessageCircle,
  IndianRupee,
} from "lucide-react";
import ConsultingIllustration from "../../Illustration/ProductIllustrations/ConsultingIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const businessPlanPreparation =
{
  id: "business-plan-preparation",
  slug: "business-plan-preparation",

  category: CATEGORIES.CONSULTING,
  label: "Business Plan Preparation",
  subtitle: "Turn your business idea into a clear plan",


  hero: {
    title: "Business Plan Preparation",
    description: "Get a structured business plan that clearly presents your business idea, market, operations, and financial direction.",
    illustration: ConsultingIllustration,
    cards: [
      { icon: null, label: 'BUSINESS PLAN', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: FileText, text: 'Structured Plan' },
      { icon: Headset, text: 'Expert Guidance' },
      { icon: ChartNoAxesCombined, text: 'Business Analysis' },
      { icon: Clock, text: 'Timely Delivery' },
    ],
  },

  overview: {
    title: 'Who needs a business plan?',
    description: 'A business plan helps entrepreneurs turn an idea into a practical roadmap.\n\nIt can help you:',
    benefits: [
      'Clarify your business model',
      'Understand your target market',
      'Plan operations and resources',
      'Prepare for funding discussions',
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
      primary: { text: "Get Started Now", link: "/checkout" },
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
        title: 'Business Discussion',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Information Collection',
        variant: "lucide",
        icon: ClipboardList,
      },
      {
        id: "3",
        title: 'Plan Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "4",
        title: 'Review & Delivery',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Business Idea',
      icon: Lightbulb,
      list: [
        'Business Concept',
        'Products / Services',
        'Target Customers',
      ],
    },
    {
      title: 'Market Information',
      icon: ChartNoAxesCombined,
      list: [
        'Competitors if known',
        'Target Market',
        'Pricing Information',
      ],
    },
    {
      title: 'Financial Inputs',
      icon: Landmark,
      list: [
        'Expected Investment',
        'Revenue Expectations',
        'Major Expenses',
      ],
    },
    {
      title: 'Supporting Details',
      icon: Folder,
      list: [
        'Founder Details',
        'Business Location',
        'Other relevant information',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is included in the business plan?',
      answer: 'The scope can cover the business concept, market, operations, marketing direction, and financial information based on the project.',
    },
    {
      question: 'Can you prepare a plan for a new business?',
      answer: 'Yes. We can build a plan from your business idea and available information.',
    },
    {
      question: 'Can it be used for funding?',
      answer: 'A business plan can support funding discussions, but requirements vary by lender or investor.',
    },
    {
      question: 'Will you need financial information?',
      answer: 'Yes. Reasonable estimates and assumptions help make the financial section useful.',
    },
    {
      question: 'Can you revise the plan?',
      answer: 'Yes. We can incorporate agreed feedback and required changes within the project scope.',
    },
  ],
};
