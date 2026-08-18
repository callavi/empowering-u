import {HomepageIllustration} from "../Illustration/HeroIllustrations/HomepageIllustration";
import { UserPlus, ShieldCheck, Briefcase, TrendingUp, Clock3, MessageCircle} from "lucide-react";
import { ContactPageIllustration } from "../Illustration/HeroIllustrations/ContactPageIllustration";
import { AboutPageIllustration } from "../Illustration/HeroIllustrations/AboutPageIllustration";
import { CataloguePageIllustration } from "../Illustration/HeroIllustrations/CataloguePageIllustration";



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
    href: "#services",
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
          label: "WhatsApp",
          href: "https://wa.me/917908466757?text=Hi%2C%20I%27m%20interested%20in%20your%20services.",
          variant: "outline",
          target: "_blank",
          rel:"noopener noreferrer"
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
about: {
  badge: "About Empowering U",

  title: {
    before: "Starting a business shouldn't mean figuring everything out",
    highlight: "alone.",
  },

  description:
    "Empowering U is an initiative by Empowering Minds created to help first-time entrepreneurs turn their ideas into real businesses — and give them the support to keep building and growing.",

  primaryActions: [
    {
      label: "Start Your Business",
      href: "/catalogue/start-your-business",
      variant: "accent",
      size: "large",
    },
  ],

  illustration: AboutPageIllustration,

  floatingCards: [
    {
      id: "aboutPill-1",
      icon: UserPlus,
      label: "Start with Confidence",
      className: "registration",
    },
    {
      id: "aboutPill-2",
      icon: ShieldCheck,
      label: "Practical Guidance",
      className: "compliance",
    },
    {
      id: "aboutPill-3",
      icon: Briefcase,
      label: "Build Your Business",
      className: "consulting",
    },
    {
      id: "aboutPill-4",
      icon: TrendingUp,
      label: "Keep Growing",
      className: "growthservices",
    },
  ],
},
catalogue: {
  badge: "Business Services",

  title: {
    before: "Everything you need to",
    highlight: "build your business.",
  },

  description:
    "Explore business registration, compliance, digital, branding, and growth services designed to help you start, build, and grow with confidence.",

  primaryActions: [
    {
      label: "Explore Services",
      href: "#catalogue",
      variant: "accent",
      size: "large",
    },
  ],

  illustration: CataloguePageIllustration,
},
};