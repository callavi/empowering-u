import { CATEGORIES } from "./catalogueInfo";
import {
  Building2,
  CreditCard,
  MessageCircle,
  PackageCheck,
  Package,
  Palette,
  IndianRupee,
  BadgeCheck,
  Rocket,
  Headset,
  ShoppingCart,
} from "lucide-react";
import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const eCommerceStoreSetup =
{
  id: "e-commerce-store-setup",
  slug: "e-commerce-store-setup",

  category: CATEGORIES.GROWTH,
  label: "E-Commerce Store Setup",
  subtitle: "Start selling your products online",


  hero: {
    title: "E-Commerce Store Setup",
    description: "Set up an online store where customers can browse products, place orders, and complete purchases.",
    illustration: GrowthIllustration,
    cards: [
      { icon: null, label: 'E-COMMERCE', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: ShoppingCart, text: 'Online Store' },
      { icon: CreditCard, text: 'Payment Setup' },
      { icon: PackageCheck, text: 'Product Management' },
      { icon: Headset, text: 'Setup Support' },
    ],
  },

  overview: {
    title: 'Who needs an e-commerce store?',
    description: 'An online store gives product-based businesses a direct channel to sell online.\n\nIt can help you:',
    benefits: [
      'Sell products online',
      'Reach customers beyond your location',
      'Manage products and orders',
      'Offer convenient online payments',
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
        title: 'Store Requirements',
        variant: "lucide",
        icon: MessageCircle,
      },
      {
        id: "2",
        title: 'Store Design & Setup',
        variant: "lucide",
        icon: Palette,
      },
      {
        id: "3",
        title: 'Products & Payments',
        variant: "lucide",
        icon: ShoppingCart,
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
        'Business Details',
        'Contact Information',
      ],
    },
    {
      title: 'Product Information',
      icon: Package,
      list: [
        'Product Names',
        'Prices',
        'Descriptions',
        'Product Images',
      ],
    },
    {
      title: 'Payment & Shipping',
      icon: CreditCard,
      list: [
        'Payment Gateway Details',
        'Shipping Rules',
        'Delivery Areas',
      ],
    },
    {
      title: 'Store Assets',
      icon: Palette,
      list: [
        'Logo',
        'Brand Colors',
        'Policies',
      ],
    },
  ],

  faqs: [
    {
      question: 'What can I sell through the store?',
      answer: 'The store can be configured for eligible products according to the business model and platform requirements.',
    },
    {
      question: 'Can you set up online payments?',
      answer: 'Yes. Payment gateway integration can be included based on the selected platform and provider.',
    },
    {
      question: 'Can customers track orders?',
      answer: 'Order tracking functionality depends on the platform and shipping setup.',
    },
    {
      question: 'Can I manage products myself?',
      answer: 'Yes. The store can be configured so authorized users can manage products and orders.',
    },
    {
      question: 'Can you help after launch?',
      answer: 'Ongoing maintenance and support can be discussed based on your requirements.',
    },
  ],
};
