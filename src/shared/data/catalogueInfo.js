export const CATEGORIES = {
  REGISTRATION: "registration",
  COMPLIANCE: "compliance",
  GROWTH: "growth-services",
  CONSULTING: "consulting",
};

export const tabs = [
    { label: "All", value: "all" },
    { label: "Registration", value: CATEGORIES.REGISTRATION },
    { label: "Compliance", value: CATEGORIES.COMPLIANCE },
    { label: "Consulting", value: CATEGORIES.CONSULTING },
    { label: "Growth", value: CATEGORIES.GROWTH },
];

export const products = [
    {
        id: "gst",
        label: "GST Registration",
        subtitle: "Register your Business under GST",
        price: 900,
        priceType: "fixed",
        category: CATEGORIES.REGISTRATION,
        path: "/gst-registration",
    },
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