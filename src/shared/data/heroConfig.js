import {HomepageIllustration} from "../Illustration/HeroIllustrations/HomepageIllustration";
import { UserPlus, ShieldCheck, Briefcase, TrendingUp, Clock3, MessageCircle} from "lucide-react";
import { ContactPageIllustration } from "../Illustration/HeroIllustrations/ContactPageIllustration";

export const Heroes = {
homepage: {
  badge: "All-in-one Business Solutions",

  title: {
    before:"We make starting and growing your business in India",
    highlight: "easy.",
  },

  description:
    "From registrations and compliance to websites and branding, we handle the paperwork so you can focus on growing your business.",

  primaryActions: [
    {
    label: "Get Started",
    to: "#services",
    variant: "accent",
    size: "large",
  },
],
  illustration: HomepageIllustration,

  floatingCards: [
    {
      id: "homePill-1",
      icon: UserPlus,
      label: "Registrations",
      className: "registration",
    },
    {
      id: "homePill-2",
      icon: ShieldCheck,
      label: "Compliance",
      className: "compliance",
    },
    {
      id: "homePill-3",
      icon: Briefcase,
      label: "Consulting",
      className: "consulting",
    },
    {
      id: "homePill-4",
      icon: TrendingUp,
      label: "Growth Services",
      className: "growthservices"
    },
  ],
},
contact: {
  badge: "Let's Talk",

  title: {
    before:"Have a Question? We're Here to",
    highlight: "Help.",
  },
  description:
      "Whether you're starting a business, registering for GST, designing a website, or growing your brand, we're here to help. Tell us what you need, and we'll guide you to the right solution.",

  primaryActions: [
      {
          label: "Call Us",
          href: "tel:+917908466757",
          variant: "secondary",
      },
      {
          label: "WhatsApp",
          href: "https://wa.me/917908466757?text=Hi%2C%20I%27m%20interested%20in%20your%20services.",
          variant: "outline",
      },
  ],

  illustration: ContactPageIllustration,

  floatingCards: [
    {
        id: "contactPill-1",
        icon: MessageCircle,
        label: "Friendly Guidance",
        className: "guidance",
    },
    {
        id: "contactPill-2",
        icon: Clock3,
        label: "Quick Response",
        className: "response",
    },
    {
        id: "contactPill-3",
        icon: ShieldCheck,
        label: "Trusted Support",
        className: "support",
    },
  ],
},
};