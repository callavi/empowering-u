import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  MapPin,
  ClipboardList,
  Image,
  IndianRupee,
  Search,
  Phone,
  Headset,
  Settings2,
  Sparkles,
} from "lucide-react";
import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const googleBusinessProfileSetup =
{
  id: "google-business-profile-setup",
  slug: "google-business-profile-setup",

  category: CATEGORIES.GROWTH,
  label: "Google Business Profile Setup",
  subtitle: "Help customers find your business on Google",


  hero: {
    title: "Google Business Profile Setup",
    description: "Set up and optimize your Google Business Profile so customers can find accurate business information online.",
    illustration: GrowthIllustration,
    cards: [
      { icon: null, label: 'GOOGLE', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: MapPin, text: 'Local Visibility' },
      { icon: Search, text: 'Business Discovery' },
      { icon: Image, text: 'Profile Optimization' },
      { icon: Headset, text: 'Setup Assistance' },
    ],
  },

  overview: {
    title: 'Why set up a Google Business Profile?',
    description: 'A complete profile helps local customers discover your business and access important information.\n\nIt can help you:',
    benefits: [
      'Improve local visibility',
      'Show accurate business information',
      'Make it easier to contact you',
      'Collect customer reviews',
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
        title: 'Business Information',
        variant: "lucide",
        icon: ClipboardList,
      },
      {
        id: "2",
        title: 'Profile Setup',
        variant: "lucide",
        icon: Settings2,
      },
      {
        id: "3",
        title: 'Verification Assistance',
        variant: "lucide",
        icon: BadgeCheck,
      },
      {
        id: "4",
        title: 'Optimization & Handover',
        variant: "lucide",
        icon: Sparkles,
      },
    ],
  },

  documents: [
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Name',
        'Category',
        'Description',
      ],
    },
    {
      title: 'Location Details',
      icon: MapPin,
      list: [
        'Business Address',
        'Service Area if applicable',
      ],
    },
    {
      title: 'Contact Details',
      icon: Phone,
      list: [
        'Phone Number',
        'Website',
        'Business Email',
      ],
    },
    {
      title: 'Visual Assets',
      icon: Image,
      list: [
        'Logo',
        'Business Photos',
        'Cover Image',
      ],
    },
  ],

  faqs: [
    {
      question: 'Do I need a physical shop?',
      answer: 'Eligibility depends on the type of business and how it serves customers. Service-area businesses may also be eligible.',
    },
    {
      question: 'What information should my profile include?',
      answer: 'Accurate business name, category, address or service area, contact details, hours, website, and photos are useful.',
    },
    {
      question: 'Does Google verification happen instantly?',
      answer: "Verification methods and timing depend on Google's requirements for the business.",
    },
    {
      question: 'Can you help optimize the profile?',
      answer: 'Yes. We can help organize the business information and profile content.',
    },
    {
      question: 'Can you manage reviews?',
      answer: 'Review response and ongoing profile management can be discussed separately.',
    },
  ],
};
