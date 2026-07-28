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
                to: "/contact",
                variant: "accent",
                size: "medium",
                icon: Phone,
            },
            {
                label: "WhatsApp",
                to: "/contact",
                variant: "secondary",
                size:"medium",
                icon : WhatsAppIcon,
            }
        ]
    },
}