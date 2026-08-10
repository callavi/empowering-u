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
 import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
 import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";


export const gst =
  {
    id: "gst",
    slug: "gst-registration",

    // Catalogue
    category: CATEGORIES.REGISTRATION,
    label: "GST Registration",
    subtitle: "Register your Business under GST",


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
        "If your business turnover exceeds...\n\nIt helps you:",
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
      highlights: [
        {text: "Government Fees Extra"},
        {text: "Expert Assistance"},
        {text: "No Hidden Charges"},
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

    // Process
process: {
    heading: "Process",
    accent: null,
    variant: "journey",
    illustration: StepsIllustration,
    features:[
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
},

    // Documents
    documents: [
      {
        title: "Individual",
        icon: UserRound,
        list: [
          "PAN Card",
          "Aadhaar Card",
          "Passport-size Photograph",
        ],
      },
      {
        title: "Business Address",
        icon: MapPinCheck,
        list: [
          "Electricity Bill or Property Tax Receipt",
          "Rent Agreement (if rented)",
          "NOC from Owner (if applicable)",
        ],
      },
      {
        title: "Bank Details",
        icon:Landmark,
        list: [
          "Cancelled Cheque or Bank Statement",
        ],
      },
      {
        title: "Business Documents \n (if applicable)",
        icon: Folder,
        list: [
          "Certificate of Incorporation",
          "Partnership Deed",
          "MOA & AOA",
        ],
      },
    ],

    // FAQs
        faqs: [
          {
            question: "Who needs GST Registration?",
            answer:
              "Businesses whose turnover exceeds the prescribed threshold or those required under GST law must register. Our experts can help determine your eligibility.",
          },
          {
            question: "How long does GST Registration take?",
            answer:
              "The processing time depends on document verification and government approval. Most applications are completed within a few working days after all required documents are submitted.",
          },
          {
            question: "What documents are required?",
            answer:
              "Typically you'll need identity proof, address proof, bank account details, and business-related documents. The exact requirements depend on your business type.",
          },
          {
            question: "Can I apply if my business is newly started?",
            answer:
              "Yes. New businesses can apply for GST Registration if they meet the eligibility criteria or are required to register under GST regulations.",
          },
          {
            question: "Will I receive support during the process?",
            answer:
              "Yes. Our team will guide you through document collection, application submission, and respond to any queries raised during the registration process.",
          },
        ],

  }