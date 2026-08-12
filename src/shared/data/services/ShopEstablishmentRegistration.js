import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  ClipboardCheck,
  IndianRupee,
  Headset,
  ShieldCheck,
  Folder,
  FolderOpen,
  MapPinCheck,
  Send,
  Store,
  Clock,
  UserRound,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const shopEstablishmentRegistration =
{
  id: "shop-establishment-registration",
  slug: "shop-establishment-registration",

  category: CATEGORIES.REGISTRATION,
  label: "Shop & Establishment Registration",
  subtitle: "Register your business establishment",


  hero: {
    title: "Shop & Establishment Registration",
    description: "Get assistance registering your eligible shop or commercial establishment under applicable local rules.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'SHOP', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: Store, text: 'Establishment Support' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Processing' },
      { icon: ShieldCheck, text: 'Compliance Support' },
    ],
  },

  overview: {
    title: 'Who may need Shop & Establishment Registration?',
    description: 'Commercial establishments may be required to register under applicable state rules.\n\nRegistration can help you:',
    benefits: [
      'Maintain required business records',
      'Support legal operation of the establishment',
      'Build business credibility',
      'Meet applicable local requirements',
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
        title: 'Eligibility Check',
        variant: "lucide",
        icon: ClipboardCheck,
      },
      {
        id: "2",
        title: 'Document Collection',
        variant: "lucide",
        icon: FolderOpen,
      },
      {
        id: "3",
        title: 'Application Submission',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'Certificate Received',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Owner Details',
      icon: UserRound,
      list: [
        'PAN Card',
        'Aadhaar / Identity Proof',
      ],
    },
    {
      title: 'Establishment Details',
      icon: Store,
      list: [
        'Business Name',
        'Nature of Business',
        'Employee Details if applicable',
      ],
    },
    {
      title: 'Premises Details',
      icon: MapPinCheck,
      list: [
        'Address Proof',
        'Rent Agreement / Ownership Proof',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Business Registration Documents if applicable',
        'Other state-specific documents',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is this registration required for every business?',
      answer: 'Requirements depend on the state, establishment, and business activity.',
    },
    {
      question: 'Can a new establishment apply?',
      answer: 'Yes, where applicable under the relevant state rules.',
    },
    {
      question: 'What documents are required?',
      answer: 'The exact documents depend on the establishment and local requirements.',
    },
    {
      question: 'How long does registration take?',
      answer: 'Processing time varies by authority and document completeness.',
    },
    {
      question: 'Can you help with compliance questions?',
      answer: 'Yes. We can guide you through the applicable registration process and documentation.',
    },
  ],
};
