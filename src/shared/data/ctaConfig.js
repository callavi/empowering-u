import CTAIllustration from "../Illustration/CTAWithIllustration";
import { Phone } from "lucide-react";
import WhatsAppIcon from "../../assets/whatsapp.svg?react";

export const ctas = {
    consultation : {
        heading: "Still not sure what you need?",
        subheading: "Talk to our experts. We'll recommend only what your business actually needs.",
        Illustration: CTAIllustration,

        actions: [
            {
                label: "Schedule a Free Call",
                to: "tel:+917908466757",
                variant: "accent",
                size: "medium",
                icon: Phone,
            },
            {
                label: "WhatsApp",
                to: "https://wa.me/917908466757?text=Hi%2C%20I%27m%20interested%20in%20your%20services.",
                variant: "secondary",
                size:"medium",
                icon : WhatsAppIcon,
            }
        ]
    },
    contact: {
    heading: "Need a Little Guidance?",

    subheading:
        "Tell us about your business or idea, and we'll help you figure out the right next step. Simple advice, clear answers, and no pressure.",

    Illustration: CTAIllustration,

    actions: [
        {
            label: "Call Us",
            to: "tel:+91XXXXXXXXXX",
            variant: "accent",
            size: "medium",
            icon: Phone,
        },
        {
            label: "WhatsApp",
            to: "https://wa.me/91XXXXXXXXXX",
            variant: "secondary",
            size: "medium",
            icon: WhatsAppIcon,
        },
    ],
    },
}