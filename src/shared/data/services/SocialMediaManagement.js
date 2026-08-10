import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  IndianRupee,
  BadgeCheck,
  Headset,
  Image,
  Palette,
  PenLine,
  SearchCheck,
  Share2,
} from "lucide-react";
import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const socialMediaManagement =
{
  id: "social-media-management",
  slug: "social-media-management",

  category: CATEGORIES.GROWTH,
  label: "Social Media Management",
  subtitle: "Build a consistent social media presence",

  hero: {
    title: "Social Media Management",
    description: "Keep your social media presence active and consistent with planned content and ongoing management.",
    illustration: GrowthIllustration,
    cards: [
      { icon: null, label: 'SOCIAL', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Share2, text: 'Content Strategy' },
      { icon: CalendarDays, text: 'Content Planning' },
      { icon: ChartNoAxesCombined, text: 'Growth Tracking' },
      { icon: Headset, text: 'Ongoing Support' },
    ],
  },

  overview: {
    title: 'Who needs social media management?',
    description: 'Consistent social media activity helps businesses stay visible and connected with their audience.\n\nIt can help you:',
    benefits: [
      'Maintain a consistent presence',
      'Showcase products and services',
      'Engage your audience',
      'Track content performance',
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
        title: 'Brand & Audience Review',
        variant: "lucide",
        icon: SearchCheck,
      },
      {
        id: "2",
        title: 'Content Planning',
        variant: "lucide",
        icon: CalendarDays,
      },
      {
        id: "3",
        title: 'Content Creation & Publishing',
        variant: "lucide",
        icon: PenLine,
      },
      {
        id: "4",
        title: 'Performance Review',
        variant: "lucide",
        icon: ChartNoAxesCombined,
      },
    ],
  },

  documents: [
    {
      title: 'Business Information',
      icon: Building2,
      list: [
        'Business Profile',
        'Services / Products',
        'Target Audience',
      ],
    },
    {
      title: 'Brand Assets',
      icon: Palette,
      list: [
        'Logo',
        'Brand Colors',
        'Brand Guidelines',
      ],
    },
    {
      title: 'Social Accounts',
      icon: Share2,
      list: [
        'Instagram / Facebook / Other Accounts',
        'Account Access',
      ],
    },
    {
      title: 'Content Inputs',
      icon: Image,
      list: [
        'Product Photos',
        'Offers',
        'Announcements',
      ],
    },
  ],

  faqs: [
    {
      question: 'Which platforms can you manage?',
      answer: 'The platforms included depend on the agreed package and your business audience.',
    },
    {
      question: 'How often will you post?',
      answer: 'Posting frequency depends on the selected package and content plan.',
    },
    {
      question: 'Do I need to provide photos?',
      answer: 'You can provide business assets, and content creation requirements can be discussed as part of the package.',
    },
    {
      question: 'Will you respond to customers?',
      answer: 'Community management can be included if it is part of the agreed scope.',
    },
    {
      question: 'Do you provide performance reports?',
      answer: 'Reporting can be included based on the selected management package.',
    },
  ],
};
