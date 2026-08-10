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
 import ConsultingIllustration from "../../Illustration/ProductIllustrations/ConsultingIllustration";
 import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";


export const startup =
{
  id: "startup-mentoring",
  slug: "startup-mentoring",

  category: CATEGORIES.CONSULTING,
  label: "Startup Mentoring",
  subtitle: "Guidance to Help Your Business Grow",


  hero: {
    title: "Startup Mentoring",
    description:
      "Get practical guidance on starting, managing, and growing your business with confidence.",
    illustration: ConsultingIllustration,
    cards: [
      {
        icon: null,
        label: "MENTOR",
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
        text: "1-on-1 Guidance",
      },
      {
        icon: Headset,
        text: "Experienced Mentors",
      },
      {
        icon: Clock,
        text: "Flexible Sessions",
      },
      {
        icon: FolderLock,
        text: "Practical Advice",
      },
    ],
  },

  overview: {
    title: "Who is this for?",
    description:
      "Ideal for aspiring entrepreneurs, founders, and small business owners.\n\nMentoring helps you:",
    benefits: [
      "Validate business ideas",
      "Avoid common startup mistakes",
      "Plan for sustainable growth",
      "Make informed business decisions",
    ],
  },

  pricing: {
    headline: null,
    highlights: [
      { text: "Personalized Guidance" },
      { text: "Business Strategy Sessions" },
      { text: "Actionable Recommendations" },
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
        title: "Initial Consultation",
        variant: "lucide",
        icon: LaptopMinimalCheck,
      },
      {
        id: "2",
        title: "Business Assessment",
        variant: "lucide",
        icon: FileSearchCorner,
      },
      {
        id: "3",
        title: "Strategy Planning",
        variant: "lucide",
        icon: FileBadge,
      },
      {
        id: "4",
        title: "Ongoing Guidance",
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
        "Business Idea or Existing Business",
        "Current Challenges",
        "Goals",
      ],
    },
    {
      title: "Business Plan",
      icon: Folder,
      list: [
        "Business Plan (if available)",
        "Pitch Deck (optional)",
      ],
    },
    {
      title: "Financial Information",
      icon: Landmark,
      list: [
        "Revenue Details (if applicable)",
        "Budget Expectations",
      ],
    },
    {
      title: "Supporting Documents",
      icon: MapPinCheck,
      list: [
        "Registration Details (if applicable)",
        "Relevant Business Documents",
      ],
    },
  ],

  faqs: [
    {
      question: "Who can benefit from startup mentoring?",
      answer:
        "Anyone planning to start a business or looking to grow an existing one can benefit from structured guidance.",
    },
    {
      question: "Is mentoring only for new startups?",
      answer:
        "No. Existing businesses can also receive guidance on operations, growth, and strategic decision-making.",
    },
    {
      question: "What topics are covered?",
      answer:
        "Sessions can cover business planning, registration, branding, compliance, marketing, and growth strategies based on your needs.",
    },
    {
      question: "Are mentoring sessions online?",
      answer:
        "Yes. Sessions can be conducted online, making it convenient regardless of your location.",
    },
    {
      question: "Will I receive a customized action plan?",
      answer:
        "Yes. Based on your goals, you'll receive practical recommendations and next steps tailored to your business.",
    },
  ],
}