export const CATEGORIES = {
  REGISTRATION: "registration-compliance",
  GROWTH: "business-growth",
  CONSULTING: "business-planning-support",
  BUNDLE: "bundle",
};

export const tabs = [
    { label: "All", value: "all" },
    { label: "Registration & Compliance", value: CATEGORIES.REGISTRATION },
    { label: "Business Planning & Support", value: CATEGORIES.CONSULTING },
    { label: "Business Growth", value: CATEGORIES.GROWTH },
    { label: "Premium Packages", value: CATEGORIES.BUNDLE },
];

export const SUBCATEGORIES = [ 
  { id: "business-registration-setup", 
    label: "Business Registration & Setup", 
  }, 
  { id: "tax-gst-compliance", 
    label: "Tax & GST Compliance", 
  }, 
  { id: "corporate-compliance", 
    label: "Corporate Compliance", 
  }, 
  { id: "payroll-labour-compliance", 
    label: "Payroll & Labour Compliance", 
  }, 
  { id: "intellectual-property-legal", 
    label: "Intellectual Property & Legal", 
  }, 
];