import { CATEGORIES } from "./catalogueInfo";
import { FileBadge,
        LaptopMinimalCheck,
        ShieldCheck,
        FileSearchCorner,
        LaptopMinimal,
        Headset,
        Clock,
        FolderLock,
        IndianRupee,
        BadgeCheck,
        UserRound,
        Folder,
        Landmark,
        MapPinCheck,
 } from "lucide-react";
 import GrowthIllustration from "../../Illustration/ProductIllustrations/GrowthIllustration";
 import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";


export const logo =
{
  id: "logo-design",
  slug: "logo-design",

  category: CATEGORIES.GROWTH,
  label: "Logo Design",
  subtitle: "Professional Branding for Your Business",
  price: "Custom",
  priceType: "flexible",

  path: "/catalogue/logo-design",

  hero: {
    title: "Logo Design",
    description:
      "Create a memorable logo that reflects your brand and builds customer trust.",
    illustration: GrowthIllustration,
    cards: [
      {
        icon: null,
        label: "LOGO",
        className: "top-right",
      },
      {
        icon: IndianRupee,
        label: null,
        className: "top-left",
        iconSize: 28,
        iconOnly: true,
      },
      {
        icon: BadgeCheck,
        label: null,
        className: "bottom-right",
        iconSize: 28,
        iconOnly: true,
      },
    ],
    highlights: [
      {
        icon: LaptopMinimal,
        text: "Custom Design",
      },
      {
        icon: Headset,
        text: "Collaborative Process",
      },
      {
        icon: Clock,
        text: "Quick Delivery",
      },
      {
        icon: FolderLock,
        text: "High-Resolution Files",
      },
    ],
  },

  overview: {
    title: "Who needs a logo?",
    description:
      "Every business deserves a professional visual identity.\n\nA good logo helps you:",
    benefits: [
      "Build brand recognition",
      "Create customer trust",
      "Look professional",
      "Stand out from competitors",
    ],
  },

  pricing: {
    headline: null,
    highlights: [
      { text: "Custom Design" },
      { text: "Multiple Revisions" },
      { text: "High-Quality Files" },
    ],
    cta: {
      primary: {
        text: "Get Started Now",
        link: "/checkout",
      },
      secondary: {
        text: "Request a Callback",
        link: "/contact",
      },
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
        title: "Requirement Discussion",
        variant: "lucide",
        icon: LaptopMinimalCheck,
      },
      {
        id: "2",
        title: "Concept Creation",
        variant: "lucide",
        icon: FileSearchCorner,
      },
      {
        id: "3",
        title: "Feedback & Revisions",
        variant: "lucide",
        icon: FileBadge,
      },
      {
        id: "4",
        title: "Final Delivery",
        variant: "lucide",
        icon: ShieldCheck,
      },
    ],
  },

  documents: [
    {
      title: "Business Information",
      icon: UserRound,
      list: [
        "Business Name",
        "Tagline (if any)",
        "Industry",
      ],
    },
    {
      title: "Brand Preferences",
      icon: MapPinCheck,
      list: [
        "Preferred Colors",
        "Design Style",
        "Reference Logos (optional)",
      ],
    },
    {
      title: "Usage",
      icon: Landmark,
      list: [
        "Website",
        "Social Media",
        "Print Materials",
      ],
    },
    {
      title: "Additional Details",
      icon: Folder,
      list: [
        "Target Audience",
        "Special Requirements",
      ],
    },
  ],

  faqs: [
    {
      question: "How many logo concepts will I receive?",
      answer:
        "The number of concepts depends on the selected package. We'll discuss this before starting the project.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Yes. We work with your feedback to refine the design until it aligns with your brand.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive high-quality files suitable for websites, social media, and print.",
    },
    {
      question: "Do I own the final logo?",
      answer:
        "Yes. Once the project is completed and delivered, the final approved logo is yours to use for your business.",
    },
    {
      question: "Can you redesign my existing logo?",
      answer:
        "Absolutely. We can modernize or refresh your current logo while maintaining your brand identity.",
    },
  ],
}