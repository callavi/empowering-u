import { Clock2Icon, MailOpen, MapPinIcon, PhoneCall, } from "lucide-react";


export const contactInfo = {
  phone: "+917908466757",
  email: "empoweringminds19@gmail.com",
  address: "86, Golaghata Road, Kolkata-700048",
  hours: "Mon–Fri, 9 AM – 6 PM",
};

export const information = {
  heading: "Get in Touch",
  subheading: "Need Immediate Assistance",
  primaryText: "Call Now",
  secondaryText: "WhatsApp",
  items : [
    {
      text:"Call us",
      icon: PhoneCall,
      description:"+917908466757"
    },
    {
      text:"Email",
      icon: MailOpen,
      description:"empoweringminds19@gmail.com"
    },
    {
      text:"Office",
      icon: MapPinIcon,
      description:"86, Golaghata Road, Kolkata-700048"
    },
    {
      text:"Business Hours",
      icon: Clock2Icon,
      description:"Mon–Fri, 9 AM – 6 PM"
    },
  ],
  process:
  {
    heading: "What Happens Next?",
    accent: null,
    variant: "default",
    features: [
      {
        id: "1",
        title: "You send your enquiry",
        variant: "number",
        number: 1,
      },
      {
        id: "2",
        title: "We contact you within one business day",
        variant: "number",
        number: 2,
      },
      {
        id: "3",
        title: "We understand your requirements",
        variant: "number",
        number: 3,
      },
      {
        id: "4",
        title: "You receive a clear quote and next steps",
        variant: "number",
        number: 4,
      },
    ],
  },
  faqs: [
    {
      question: "Do I need to visit your office?",
      answer: "No. Most services can be completed online."
    },
    {
      question: "Can I call before placing an order?",
      answer: "Absolutely."
    },
    {
      question: "How soon will I receive a response?",
      answer: "Usually within one business day."
    }
  ]
}