import { CATEGORIES } from "./catalogueInfo";
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  IndianRupee,
  FileSearchCorner,
  Landmark,
  LaptopMinimalCheck,
  LaptopMinimal,
  Phone,
  Headset,
  Clock,
  UserRound,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const msmeRegistration =
{
  id: "msme-registration",
  slug: "msme-registration",

  category: CATEGORIES.REGISTRATION,
  label: "MSME (Udyam) Registration",
  subtitle: "Get your business registered as an MSME",

  hero: {
    title: "MSME (Udyam) Registration",
    description: "Get assistance with Udyam Registration and access the benefits available to eligible MSMEs.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'MSME', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: LaptopMinimal, text: 'Online Process' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Timely Completion' },
      { icon: BadgeCheck, text: 'Registration Support' },
    ],
  },

  overview: {
    title: 'Who should consider Udyam Registration?',
    description: 'Eligible micro, small, and medium enterprises can register under the Udyam system.\n\nRegistration can help you:',
    benefits: [
      'Establish MSME identity',
      'Access eligible government schemes',
      'Improve business credibility',
      'Maintain organized business records',
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
      primary: { text: "Get Started Now", link: "/checkout" },
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
        title: 'Business Details Collection',
        variant: "lucide",
        icon: ClipboardList,
      },
      {
        id: "2",
        title: 'Document Verification',
        variant: "lucide",
        icon: FileSearchCorner,
      },
      {
        id: "3",
        title: 'Udyam Application',
        variant: "lucide",
        icon: LaptopMinimalCheck,
      },
      {
        id: "4",
        title: 'Registration Confirmation',
        variant: "lucide",
        icon: BadgeCheck,
      },
    ],
  },

  documents: [
    {
      title: 'Business Owner',
      icon: UserRound,
      list: [
        'PAN Card',
        'Aadhaar Card',
      ],
    },
    {
      title: 'Business Details',
      icon: Building2,
      list: [
        'Business Name',
        'Business Activity',
        'Business Address',
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
      title: 'Financial Details',
      icon: Landmark,
      list: [
        'Bank Account Details',
        'Other details required during registration',
      ],
    },
  ],

  faqs: [
    {
      question: 'What is Udyam Registration?',
      answer: 'Udyam Registration is the official registration system for eligible MSMEs in India.',
    },
    {
      question: 'Who can apply?',
      answer: 'Eligible micro, small, and medium enterprises can apply, subject to the applicable criteria.',
    },
    {
      question: 'Is the process online?',
      answer: 'Yes. The registration process is completed online with the required business information.',
    },
    {
      question: 'What documents are needed?',
      answer: 'Basic identity, business, contact, and financial information may be required.',
    },
    {
      question: 'Will I get assistance?',
      answer: 'Yes. We can guide you through the information required and the registration process.',
    },
  ],
};
