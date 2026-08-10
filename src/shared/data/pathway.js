import StartBusiness from "../Illustration/StartBusiness";
import GrowBusiness from "../Illustration/GrowBusiness";

export const pathways = [
  {
    id: "startbusiness",
    slug: "start-your-business",
    title: [{ text:"I want to "},
           { text: "start ", highlight: true},
           { text: "my business"},],
    description: "We handle the setup so you can start with confidence.",
    button: "Start Now",
    Illustration: StartBusiness,
  },
  {
    id: "growbusiness",
    slug: "grow-your-business",
    title: [ { text:"I want to "},
            { text: "grow ", highlight: true},
            { text: "my business"},],
    description: "Business services that help you grow.",
    button: "Grow Now",
    Illustration: GrowBusiness,
  }
];