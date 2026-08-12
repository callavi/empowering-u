import { CATEGORIES } from "./catalogueInfo";
import {
  IndianRupee,
  Clock,
  BadgeCheck,
  FileCheck2,
  FileText,
  Folder,
  SearchCheck,
  FileLock2,
  Send,
  UserRound,
  ShieldCheck,
  Headset,
} from "lucide-react";
import RegistrationIllustration from "../../Illustration/ProductIllustrations/RegistrationIllustration";
import StepsIllustration from "../../Illustration/ProductIllustrations/StepsIllustration";

export const copyrightRegistration =
{
  id: "copyright-registration",
  slug: "copyright-registration",

  category: CATEGORIES.REGISTRATION,
  label: "Copyright Registration",
  subtitle: "Protect your original creative work",


  hero: {
    title: "Copyright Registration",
    description: "Get assistance registering eligible original creative works and organizing the required application documents.",
    illustration: RegistrationIllustration,
    cards: [
      { icon: null, label: 'COPYRIGHT', className: "top-right" },
      { icon: IndianRupee, label: null, className: "top-left", iconSize: 28, iconOnly: true },
      { icon: BadgeCheck, label: null, className: "bottom-right", iconSize: 28, iconOnly: true },
    ],
    highlights: [
      { icon: FileLock2, text: 'Work Protection' },
      { icon: Headset, text: 'Expert Assistance' },
      { icon: Clock, text: 'Application Support' },
      { icon: ShieldCheck, text: 'Secure Process' },
    ],
  },

  overview: {
    title: 'What can copyright protect?',
    description: 'Copyright can apply to eligible original creative works.\n\nRegistration can help you:',
    benefits: [
      'Create a formal record of your work',
      'Strengthen ownership documentation',
      'Support protection of creative assets',
      'Build valuable business intellectual property',
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
        title: 'Work Assessment',
        variant: "lucide",
        icon: SearchCheck,
      },
      {
        id: "2",
        title: 'Document Preparation',
        variant: "lucide",
        icon: FileText,
      },
      {
        id: "3",
        title: 'Application Filing',
        variant: "lucide",
        icon: Send,
      },
      {
        id: "4",
        title: 'Application Follow-up',
        variant: "lucide",
        icon: Clock,
      },
    ],
  },

  documents: [
    {
      title: 'Applicant Details',
      icon: UserRound,
      list: [
        'Identity Proof',
        'PAN Card',
        'Contact Details',
      ],
    },
    {
      title: 'Work Details',
      icon: FileText,
      list: [
        'Title of Work',
        'Type of Work',
        'Creation Details',
      ],
    },
    {
      title: 'Copy of Work',
      icon: FileCheck2,
      list: [
        'Digital / Physical Copy as applicable',
      ],
    },
    {
      title: 'Supporting Documents',
      icon: Folder,
      list: [
        'Ownership / Authorization Documents if applicable',
      ],
    },
  ],

  faqs: [
    {
      question: 'What types of work can be registered?',
      answer: 'Eligible original literary, artistic, musical, software, and other protected works may qualify depending on the category.',
    },
    {
      question: 'Can a business apply?',
      answer: 'Yes, where the business is the relevant owner or applicant.',
    },
    {
      question: 'Do I need to register to own copyright?',
      answer: 'Copyright protection can arise without registration, but registration provides a formal record of the claim.',
    },
    {
      question: 'How long does the process take?',
      answer: 'The timeline depends on the application and examination process.',
    },
    {
      question: 'Can you help prepare the application?',
      answer: 'Yes. We can assist with documentation and filing.',
    },
  ],
};
