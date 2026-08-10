import {
  Globe,
  Search,
  Palette,
  UsersRound,
} from "lucide-react";

import GrowBusiness from "../Illustration/GrowBusiness";
import GrowthIllustration from "../Illustration/ProductIllustrations/GrowthIllustration";

export const growYourBusiness = {
  id: "growbusiness",
  slug: "grow-your-business",

  seo: {
    title: "Grow Your Business | Empowering U",
    description:
      "Build a stronger brand and reach more customers with website design, SEO, logo design, branding, and business mentoring in one complete growth package.",
  },

  hero: {
    title: "Grow Your Business",
    accent: "with Confidence",
    description:
      "Build your online presence, strengthen your brand, and attract more customers with one complete business growth package.",

    illustration: GrowBusiness,

    bundle: {
      heading: "This Bundle Includes",
      list: [
        "Professional Website Design",
        "SEO Setup",
        "Logo Design",
        "Brand Identity",
        "Business Mentoring",
      ],
    },
  },

  pricing: {
    headline: "Special Bundle Price",
    highlights: [
      { text: "Expert Team Included" },
      { text: "Custom Growth Strategy" },
    ],
    cta: {
      primary: {
        text: "Grow My Business",
        link: "/checkout",
      },
      secondary: {
        text: "Talk to an Expert",
        link: "/contact",
      },
    },
  },

  benefits: {
    headline: "Everything your business needs to grow",

    features: [
      {
        id: "professional-presence",
        text: "Professional Online Presence",
        icon: Globe,
        description:
          "Launch a modern website that builds credibility and helps customers find and trust your business.",
      },
      {
        id: "get-found",
        text: "Get Found Online",
        icon: Search,
        description:
          "Improve your visibility with SEO best practices so more potential customers can discover your business.",
      },
      {
        id: "strong-brand",
        text: "Build a Strong Brand",
        icon: Palette,
        description:
          "Create a memorable logo and consistent brand identity that makes your business stand out.",
      },
      {
        id: "business-growth",
        text: "Business Mentoring",
        icon: UsersRound,
        description:
          "Receive practical guidance on growing your business, attracting customers, and making better business decisions.",
      },
    ],
  },

  process: {
    heading: "Our 4-Step Growth Process",
    accent: null,
    variant: "journey",
    illustration: GrowthIllustration,

    features: [
      {
        id: "consultation",
        title: "Understand your business goals",
        number: 1,
        variant: "number",
      },
      {
        id: "strategy",
        title: "Plan your growth strategy",
        number: 2,
        variant: "number",
      },
      {
        id: "execution",
        title: "Design, build & optimize",
        number: 3,
        variant: "number",
      },
      {
        id: "grow",
        title: "Launch and keep growing",
        number: 4,
        variant: "number",
      },
    ],
  },

  faqs: [
    {
      question: "Who is this package for?",
      answer:
        "This package is ideal for startups, small businesses, freelancers, and established businesses looking to improve their online presence and attract more customers.",
    },
    {
      question: "Can I choose only the services I need?",
      answer:
        "Yes. While this bundle offers the best value, individual services can also be provided based on your business requirements.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we build is responsive, fast, and designed to work seamlessly across desktops, tablets, and mobile devices.",
    },
    {
      question: "How long does the project take?",
      answer:
        "The timeline depends on the scope of your project. After our initial consultation, we'll provide a clear project schedule before work begins.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer guidance after launch and can discuss ongoing support, updates, and digital marketing services based on your needs.",
    },
  ],
};