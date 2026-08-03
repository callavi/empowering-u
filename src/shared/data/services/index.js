import {gst} from "./GSTRegistration";
import { CATEGORIES } from "./catalogueInfo";

export const products = [

    gst,
    {
        id: "iec",
        label: "Import Export Code",
        subtitle: "Essential Credential for Foreign Commerce ",
        price: 1000,
        priceType: "fixed",
        category: CATEGORIES.COMPLIANCE,
        path: "/import-export-code",
    },
    {
        id: "logo",
        label: "Logo Design",
        subtitle: "Custom vector logos and multi-format assets.",
        price: null,
        priceType: "flexible",
        category: CATEGORIES.GROWTH,
        path: "/logo-design",
    },
    {
        id: "startupMentoring",
        label: "Startup Mentoring",
        subtitle: "Strategic Direction for Early-Stage Growth",
        price: null,
        priceType: "flexible",
        category: CATEGORIES.CONSULTING,
        path: "/startup-mentoring",
    }
]