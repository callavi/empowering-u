import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  Code2,
  FileText,
  MessageCircle,
  Globe,
  Palette,
  Phone,
  LaptopMinimal,
  Headset,
  Rocket,
  IndianRupee,
  BadgeCheck
} from "lucide-react";
import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const basicWebsite =
{
  id: "basic-website",
  slug: "basic-website",

  category: CATEGORIES.GROWTH,
  label: "Basic Website",
  subtitle: "Get a professional website for your business",


  hero: {
    title: "Basic Website",
    description: "Launch a clean, professional website that gives your business a strong online presence.",
    illustration: GrowthIllustration,
    cards: [
      { icon: null, label: 'WEBSITE', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Globe, text: 'Online Presence' },
      { icon: LaptopMinimal, text: 'Responsive Design' },
      { icon: Headset, text: 'Support' },
      { icon: Rocket, text: 'Quick Launch' },
    ],
  },

  overview: {
    title: 'Who needs a basic website?',
    description: 'A professional website gives customers a place to learn about your business and contact you.\n\nIt can help you:',
    benefits: [
      'Build online credibility',
      'Showcase your services',
      'Make it easier to contact you',
      'Reach customers beyond your local area',
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
        title: 'Requirement Discussion',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Content & Design',
        variant: "lucide",
        icon: Palette,
      },
      {
        id: "3",
        title: 'Development',
        variant: "lucide",
        icon: Code2,
      },
      {
        id: "4",
        title: 'Testing & Launch',
        variant: "lucide",
        icon: Rocket,
      },
    ],
  },

  documents: [
    {
      title: 'Business Information',
      icon: Building2,
      list: [
        'Business Name',
        'About the Business',
        'Services',
      ],
    },
    {
      title: 'Brand Assets',
      icon: Palette,
      list: [
        'Logo',
        'Brand Colors',
        'Images if available',
      ],
    },
    {
      title: 'Contact Details',
      icon: Phone,
      list: [
        'Phone Number',
        'Email',
        'Business Address',
      ],
    },
    {
      title: 'Website Content',
      icon: FileText,
      list: [
        'Service Descriptions',
        'About Text',
        'Other Required Content',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is included in a basic website?',
      answer: 'The scope can include a professional responsive website with the agreed pages, content, and functionality.',
    },
    {
      question: 'Will the website work on phones?',
      answer: 'Yes. The website will be designed to work across common screen sizes.',
    },
    {
      question: 'Do I need to provide the content?',
      answer: 'You can provide existing content, or we can discuss content support depending on the project scope.',
    },
    {
      question: 'Can I update the website later?',
      answer: 'Yes. The update process depends on how the website is built and the agreed maintenance arrangement.',
    },
    {
      question: 'Can you connect a domain?',
      answer: 'Yes. We can assist with domain and hosting setup where required.',
    },
  ],
};
