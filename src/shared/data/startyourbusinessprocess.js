import {
  LaptopMinimalCheck,
  FileStack,
  IndianRupee,
  UsersRound,
} from "lucide-react";
import StartBusiness from "../Illustration/StartBusiness";
import StepsIllustration from "../Illustration/ProductIllustrations/StepsIllustration"

export const startYourBusiness = {
  id: "startbusiness",
  slug: "start-your-business",
  path: "/start-your-business",

  price: 7999,
  priceType: "fixed",

  seo: {
    title: "Start Your Business | Empower U",
    description:
      "Start your business the right way with company registration, GST, PAN, TAN, MSME registration, business email setup, and expert guidance—all in one convenient package.",
  },

  hero: {
    title: "Start Your Business the",
    accent: "Right Way",
    description:
      "Everything you need to legally start, run, and grow your business in India.",

    illustration: StartBusiness,

    bundle: {
      heading: "This Bundle Includes",
      list: [
        "Company Registration",
        "PAN & TAN",
        "GST Registration",
        "MSME (Udyam) Registration",
        "Business Email Setup",
        "Compliance Guidance",
        "Startup Mentoring",
      ],
    },
  },

  pricing: {
    headline: "Special Price",
    highlights: [
      { text: "Expert Assistance Included" },
      { text: "No Hidden Charges" },
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

  benefits: {
    headline: "Built for first-time business owners",

    features: [
      {
        id: "save-time-money",
        text: "Save Time & Money",
        icon: IndianRupee,
        description:
          "Avoid costly mistakes and complete everything together instead of applying for each registration separately.",
      },
      {
        id: "online-process",
        text: "100% Online Process",
        icon: LaptopMinimalCheck,
        description:
          "Complete the entire registration process from the comfort of your home or office.",
      },
      {
        id: "expert-guidance",
        text: "Expert Guidance",
        icon: UsersRound,
        description:
          "Our experienced team helps you choose the right business structure and guides you at every step.",
      },
      {
        id: "documentation",
        text: "Hassle-free Documentation",
        icon: FileStack,
        description:
          "We help organize, verify, and prepare your documents to minimize delays and rejections.",
      },
    ],
  },

  process: {
    heading: "Our 4-Step Business Process",
    accent: null,
    variant: "journey",
    illustration:StepsIllustration,
    features: [
      {
        id: "share-details",
        title: "Share your details",
        number: 1,
        variant: "number",
      },
      {
        id: "submit-documents",
        title: "Submit your documents",
        number: 2,
        variant: "number",
      },
      {
        id: "processing",
        title: "We complete the registrations",
        number: 3,
        variant: "number",
      },
      {
        id: "receive-certificates",
        title: "Receive your certificates",
        number: 4,
        variant: "number",
      },
    ],
  },

  faqs: [
    {
      question: "Who is this package suitable for?",
      answer:
        "This bundle is ideal for first-time entrepreneurs, startups, freelancers, and small businesses looking to establish their business legally with all essential registrations.",
    },
    {
      question: "Are government fees included in the price?",
      answer:
        "No. The package price covers our professional services. Any applicable government fees or statutory charges are payable separately.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The timeline depends on the type of business registration and government processing times. Once we receive all required documents, we'll guide you through the expected timeline.",
    },
    {
      question: "Do I need to visit your office?",
      answer:
        "No. The entire process can be completed online through phone, email, and secure document sharing.",
    },
    {
      question: "What documents will I need?",
      answer:
        "The required documents vary depending on the type of business. Our team will provide you with a personalized checklist before the registration process begins.",
    },
  ],
};