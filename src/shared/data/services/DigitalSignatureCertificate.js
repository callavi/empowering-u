import { CATEGORIES } from "./catalogueInfo";
import {
  IndianRupee,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  PenLine,
  FileCheck2,
  Phone,
  ScanFace,
  Headset,
  Send,
  Clock,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const digitalSignatureCertificate =
{
  id: "digital-signature-certificate",
  slug: "digital-signature-certificate",

  category: CATEGORIES.REGISTRATION,
  label: "Digital Signature Certificate",
  subtitle: "Get a DSC for secure digital signing",
  seo: {
  title: "Digital Signature Certificate | Empowering U",
  description:
    "Get assistance obtaining a Digital Signature Certificate for eligible online filings and transactions that require secure digital signing.",
  },

  hero: {
    title: "Digital Signature Certificate",
    description: "Get assistance obtaining a Digital Signature Certificate for eligible online filings and transactions.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'DSC', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: PenLine, text: 'Digital Signing' },
      { icon: Headset, text: 'Application Assistance' },
      { icon: Clock, text: 'Timely Processing' },
      { icon: ShieldCheck, text: 'Secure Process' },
    ],
  },

  overview: {
    title: 'Why do you need a DSC?',
    description: 'A Digital Signature Certificate can be required for certain online filings and transactions.\n\nIt helps you:',
    benefits: [
      'Sign documents digitally',
      'Complete applicable online filings',
      'Reduce paperwork',
      'Secure digital transactions',
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
        title: 'Requirement Check',
        variant: "lucide",
        icon: ClipboardCheck,
      },
      {
        id: "2",
        title: 'Identity Verification',
        variant: "lucide",
        icon: ScanFace,
      },
      {
        id: "3",
        title: 'DSC Application',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'Certificate Activation',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Applicant Identity',
      icon: UserRound,
      list: [
        'PAN Card',
        'Aadhaar / Identity Proof',
        'Photograph',
      ],
    },
    {
      title: 'Contact Details',
      icon: Phone,
      list: [
        'Mobile Number',
        'Email Address',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business / Organization Details if applicable',
      ],
    },
    {
      title: 'Authorization',
      icon: FileCheck2,
      list: [
        'Authorization Documents if required',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is a DSC?',
      answer: 'A Digital Signature Certificate is used to authenticate and digitally sign certain online documents and filings.',
    },
    {
      question: 'Who may need one?',
      answer: 'Requirements depend on the filing, portal, and role of the applicant.',
    },
    {
      question: 'Is identity verification required?',
      answer: 'Yes, the issuing process includes identity verification requirements.',
    },
    {
      question: 'How long does it take?',
      answer: 'Processing depends on verification and the issuing provider.',
    },
    {
      question: 'Can you help with renewal?',
      answer: 'Yes, we can assist with the applicable renewal process.',
    },
  ],
};
