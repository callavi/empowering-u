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
 } from "lucide-react";
 import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";

export const gst =
  {
    id: "gst",
    slug: "gst-registration",

    // Catalogue
    category: CATEGORIES.REGISTRATION,
    label: "GST Registration",
    subtitle: "Register your Business under GST",
    price: 999,
    priceType: "fixed",

    // Routing
    path: "/gst-registration",

    // Hero
    hero: {
      title: "GST Registration",
      description:
        "Register your business under GST and stay 100% compliant.",
      illustration: RegistrationIllustration,
      cards: [
        {
          icon: null,
          label: "GST",
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
          text: "100% Online Process",
        },
        {
          icon: Headset,
          text: "Expert Assistance",
        },
        {
          icon: Clock,
          text: "Timely Completion",
        },
        {
          icon: FolderLock,
          text: "Secure & Reliable",
        },
      ],
    },

    // Overview
    overview: {
      title: "Who needs GST Registration?",
      description:
        "If your business turnover exceeds...",
      benefits: [
        "Collect tax legally",
        "Build business credibility",
        "Claim input tax credit",
        "Expand across India",
      ],
    },

    // Pricing Card
    pricing: {
      headline: "Starting From",
      features: [
        "Government Fees Extra",
        "Expert Assistance",
        "No Hidden Charges",
      ],
    },

    // Process
process: [
  {
    id: "1",
    title: "Apply Online",
    variant: "lucide",
    icon: LaptopMinimalCheck,
  },
  {
    id: "2",
    title: "Document Verification",
    variant: "lucide",
    icon: FileSearchCorner,
  },
  {
    id: "3",
    title: "GSTIN Allotment",
    variant: "lucide",
    icon: FileBadge,
  },
  {
    id: "4",
    title: "Certificate Received",
    variant: "lucide",
    icon: ShieldCheck,
  },
],

    // Documents
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Address Proof",
    ],

    // FAQs
    faqs: [
      {
        question: "...",
        answer: "...",
      },
    ],

  }