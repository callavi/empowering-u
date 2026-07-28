import {HomepageIllustration} from "../Illustration/HeroIllustrations/HomepageIllustration";
import { UserPlus, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

export const Heroes = {
homepage: {
  badge: "All-in-one Business Solutions",

  title: "We make starting and growing a business in India ridiculously easy.",

  description:
    "From registrations to compliance, websites to branding - we handle the paperwork so you can focus on your business.",

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