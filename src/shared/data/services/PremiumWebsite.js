import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  Code2,
  FileText,
  MessageCircle,
  Globe,
  Palette,
  Sparkles,
  Headset,
  Gauge,
  IndianRupee,
  BadgeCheck,
  Rocket,
  Settings2,
} from "lucide-react";
import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const premiumWebsite =
{
  id: "premium-website",
  slug: "premium-website",

  category: CATEGORIES.GROWTH,
  label: "Premium Website",
  subtitle: "Build a polished website designed for growth",


  hero: {
    title: "Premium Website",
    description: "Build a more advanced, polished website with stronger branding, interactions, and business-focused functionality.",
    illustration: GrowthIllustration,
    cards: [
      { icon: null, label: 'PREMIUM', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Globe, text: 'Professional Presence' },
      { icon: Sparkles, text: 'Premium Design' },
      { icon: Gauge, text: 'Performance Focus' },
      { icon: Headset, text: 'Ongoing Support' },
    ],
  },

  overview: {
    title: 'Who needs a premium website?',
    description: 'Businesses that want a stronger digital presence can benefit from a more customized website.\n\nIt can help you:',
    benefits: [
      'Create a stronger brand experience',
      'Showcase more services or products',
      'Improve customer journeys',
      'Support marketing and growth',
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
        title: 'Strategy & Requirements',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'UX & Visual Design',
        variant: "lucide",
        icon: Palette,
      },
      {
        id: "3",
        title: 'Development & Integration',
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
      title: 'Business Strategy',
      icon: Building2,
      list: [
        'Business Goals',
        'Target Audience',
        'Services / Products',
      ],
    },
    {
      title: 'Brand Assets',
      icon: Palette,
      list: [
        'Logo',
        'Brand Guidelines',
        'Images / Videos',
      ],
    },
    {
      title: 'Content',
      icon: FileText,
      list: [
        'Page Content',
        'Service Details',
        'Testimonials if available',
      ],
    },
    {
      title: 'Technical Requirements',
      icon: Settings2,
      list: [
        'Domain / Hosting Access',
        'Required Integrations',
      ],
    },
  ],

  faqs: [
    {
      question: 'How is a premium website different?',
      answer: 'A premium website allows for more customization, richer design, additional functionality, and a more tailored user experience.',
    },
    {
      question: 'Can it include custom features?',
      answer: 'Yes. Features can be scoped according to business requirements.',
    },
    {
      question: 'Is SEO included?',
      answer: 'Basic technical considerations can be included, while broader SEO work depends on the agreed project scope.',
    },
    {
      question: 'Can I add features later?',
      answer: 'Yes. The website can be extended depending on its architecture and requirements.',
    },
    {
      question: 'Will you help after launch?',
      answer: 'Support and maintenance can be discussed based on the project requirements.',
    },
  ],
};
