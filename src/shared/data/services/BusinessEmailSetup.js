import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  KeyRound,
  Mail,
  Palette,
  Clock,
  SearchCheck,
  ShieldCheck,
  Settings2,
  Users,
  IndianRupee
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const businessEmailSetup =
{
  id: "business-email-setup",
  slug: "business-email-setup",

  category: CATEGORIES.REGISTRATION,
  label: "Business Email Setup",
  subtitle: "Use a professional email address for your business",


  hero: {
    title: "Business Email Setup",
    description: "Set up professional business email accounts using your business domain.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'EMAIL', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Mail, text: 'Professional Email' },
      { icon: Settings2, text: 'Setup Assistance' },
      { icon: Clock, text: 'Quick Setup' },
      { icon: ShieldCheck, text: 'Secure Configuration' },
    ],
  },

  overview: {
    title: 'Why use a business email?',
    description: 'A domain-based email address helps your business communicate professionally.\n\nIt can help you:',
    benefits: [
      'Build customer trust',
      'Create a professional brand image',
      'Keep business communication organized',
      'Use your own business domain',
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
        title: 'Domain & Email Review',
        variant: "lucide",
        icon: SearchCheck,
      },
      {
        id: "2",
        title: 'Account Configuration',
        variant: "lucide",
        icon: Settings2,
      },
      {
        id: "3",
        title: 'Mailbox Setup',
        variant: "lucide",
        icon: Mail,
      },
      {
        id: "4",
        title: 'Testing & Handover',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Name',
        'Business Domain',
      ],
    },
    {
      title: 'Account Requirements',
      icon: Users,
      list: [
        'Number of Mailboxes',
        'Preferred Email Names',
      ],
    },
    {
      title: 'Access Details',
      icon: KeyRound,
      list: [
        'Domain / Hosting Access if applicable',
      ],
    },
    {
      title: 'Brand Details',
      icon: Palette,
      list: [
        'Business Logo if applicable',
        'Signature Details',
      ],
    },
  ],

  faqs: [
    {
      question: 'Do I need a domain name?',
      answer: 'A professional domain is generally needed for a domain-based business email address.',
    },
    {
      question: 'How many email accounts can I create?',
      answer: 'The number depends on the email service or package selected.',
    },
    {
      question: 'Can I use the email on my phone?',
      answer: 'Yes. We can help configure the account on supported devices.',
    },
    {
      question: 'Can you migrate an existing email setup?',
      answer: 'We can assess an existing setup and discuss the appropriate migration approach.',
    },
    {
      question: 'Will you configure the email signature?',
      answer: 'Yes, business signature details can be included in the setup.',
    },
  ],
};
