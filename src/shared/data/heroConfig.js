import {HomepageIllustration} from "../Illustration/HeroIllustrations/HomepageIllustration";
import { UserPlus, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

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
    to: "/services",
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

};