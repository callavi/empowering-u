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

export const iec =
{
  id: "iec",
  slug: "import-export-code",

  category: CATEGORIES.REGISTRATION,
  label: "Import Export Code",
  subtitle: "Start Importing & Exporting Globally",
  price: 899,
  priceType: "fixed",

  path: "/catalogue/import-export-code",

  hero: {
    title: "Import Export Code",
    description:
      "Get your Import Export Code (IEC) and start trading internationally with ease.",
    illustration: RegistrationIllustration,
    cards: [
      {
        icon: null,
        label: "IEC",
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
        text: "Fast Application",
      },
      {
        icon: FolderLock,
        text: "Secure Documentation",
      },
    ],
  },

  overview: {
    title: "Who needs an IEC?",
    description:
      "Any individual or business planning to import or export goods or services.\n\nAn IEC helps you:",
    benefits: [
      "Import and export legally",
      "Expand into global markets",
      "Receive international payments",
      "Build business credibility",
    ],
  },

  pricing: {
    headline: "Starting From",
    highlights: [
      { text: "Expert Assistance" },
      { text: "Complete Documentation Support" },
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

  process: {
    heading: "Process",
    accent: null,
    variant: "journey",
    illustration: StepsIllustration,
    features: [
      {
        id: "1",
        title: "Submit Details",
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
        title: "Application Filing",
        variant: "lucide",
        icon: FileBadge,
      },
      {
        id: "4",
        title: "IEC Issued",
        variant: "lucide",
        icon: ShieldCheck,
      },
    ],
  },

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
        "Address Proof",
        "Rent Agreement (if applicable)",
        "NOC from Owner (if applicable)",
      ],
    },
    {
      title: "Bank Details",
      icon: Landmark,
      list: [
        "Cancelled Cheque",
        "Bank Account Details",
      ],
    },
    {
      title: "Business Documents",
      icon: Folder,
      list: [
        "Certificate of Incorporation (if applicable)",
        "Partnership Deed (if applicable)",
      ],
    },
  ],

  faqs: [
    {
      question: "Is IEC mandatory?",
      answer:
        "Yes. An Import Export Code is mandatory for businesses importing or exporting goods and most services from India.",
    },
    {
      question: "Who issues the IEC?",
      answer:
        "The Directorate General of Foreign Trade (DGFT) issues the Import Export Code.",
    },
    {
      question: "Does IEC need renewal?",
      answer:
        "IEC remains valid for life, but details should be updated whenever required as per DGFT regulations.",
    },
    {
      question: "Can individuals apply for an IEC?",
      answer:
        "Yes. Proprietors, companies, LLPs, partnerships, trusts, and individuals engaged in international trade can apply.",
    },
    {
      question: "Will you help with the application?",
      answer:
        "Yes. We guide you through document collection, filing, and the complete application process.",
    },
  ],
}