import {
  Compass,
  Lightbulb,
  TrendingUp,
  UsersRound,
  BriefcaseBusiness,
  Target,
  Handshake,
} from "lucide-react";

import IdeaIcon from "../../assets/New idea-bro.svg";
import DocumentsIcon from "../../assets/Checklist-bro.svg";
import SupportIcon from "../../assets/Finance leaders-bro.svg";
import CertificateIcon from "../../assets/Certification-bro.svg";

export const aboutContent = {
  whoWeAre: {
    benefits: {
      headline: "Starting a business shouldn't mean figuring everything out alone.",
      features: [
        {
          id: "practical-guidance",
          text: "Practical Guidance",
          icon: Compass,
          description:
            "We help first-time entrepreneurs understand what needs to be done and what comes next, without overwhelming them with unnecessary complexity.",
        },
        {
          id: "clear-processes",
          text: "Clear, Simple Processes",
          icon: Lightbulb,
          description:
            "We break down registrations, documentation, compliance, and other business requirements into steps that are easier to understand and act on.",
        },
        {
          id: "support-from-start",
          text: "Support From the Start",
          icon: Handshake,
          description:
            "From your first questions to getting your business established, we help you move forward with greater confidence.",
        },
        {
          id: "built-for-real-world",
          text: "Built for Real Businesses",
          icon: BriefcaseBusiness,
          description:
            "Our focus is practical support that helps you move from having an idea to actually setting up and operating your business.",
        },
      ],
    },
  },

  whyEmpoweringU: {
    benefits: {
      headline: "Why Empowering U?",
      features: [
        {
          id: "we-explain",
          text: "We Explain, We Don't Intimidate",
          icon: Lightbulb,
          description:
            "Business processes can be full of unfamiliar terms and requirements. We believe you should understand what you are doing and why it matters.",
        },
        {
          id: "expert-guidance",
          text: "Guidance That Fits Your Situation",
          icon: UsersRound,
          description:
            "Every entrepreneur starts from a different place. We focus on understanding what you need before recommending what to do next.",
        },
        {
          id: "practical-outcomes",
          text: "Practical, Not Just Informational",
          icon: Target,
          description:
            "Our goal is to help you take action, not simply give you information and leave you to figure out the rest.",
        },
        {
          id: "long-term-growth",
          text: "Support Beyond the Start",
          icon: TrendingUp,
          description:
            "Getting your business started is only the beginning. As your business grows, we can help you take the next steps.",
        },
      ],
    },
  },

  empoweringMinds: {
    heading: "An Initiative by Empowering Minds",
    paragraphs: [
      "Empowering U is an initiative by Empowering Minds, a Human Capital Development initiative focused on strengthening people, institutions, and organisations through structured behavioural, emotional, and mind-based transformation.",
      "Empowering Minds believes that meaningful development moves people from awareness to capability, confidence, impact, and sustainable change.",
      "Empowering U brings that philosophy into entrepreneurship — helping individuals build the understanding, confidence, and practical capability they need to start and grow a business.",
    ],
  },

homepage: {
    eyebrow: "About Empowering U",
    heading: "Helping you turn an idea into a",
    accent: "business.",
    description:
      "Empowering U is an initiative by Empowering Minds created to help first-time entrepreneurs navigate the practical journey of starting a business and take their next steps toward growth.",
    empoweringMinds:
      "Built on Empowering Minds' people-focused approach to awareness, capability, confidence, and sustainable impact, Empowering U brings that philosophy into entrepreneurship.",
    link: {
      label: "Learn more about us",
      to: "/about",
    },
  },
};

export const aboutProcess = {
  heading: "How We Help.",
  accent: "From Idea to Action.",

  features: [
    {
      id: "tell-us",
      title: "Tell us where you are",
      description:
        "Whether you have a business idea or have already taken your first steps, tell us what you're trying to build and where you need help.",
      variant: "illustration",
      icon: IdeaIcon,
    },
    {
      id: "understand-needs",
      title: "Understand what you need",
      description:
        "We help you make sense of the practical requirements and identify the steps and services that fit your situation.",
      variant: "illustration",
      icon: DocumentsIcon,
    },
    {
      id: "get-support",
      title: "Get the right support",
      description:
        "From registrations and compliance to building your business presence, we help you take care of the work that moves you forward.",
      variant: "illustration",
      icon: SupportIcon,
    },
    {
      id: "keep-growing",
      title: "Keep moving forward",
      description:
        "Starting is only the beginning. As your business develops, we help you take the next steps toward building and growing it.",
      variant: "illustration",
      icon: CertificateIcon,
    },
  ],
};