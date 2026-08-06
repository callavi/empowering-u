import StartBusiness from "../Illustration/StartBusiness";
import GrowBusiness from "../Illustration/GrowBusiness";

export const pathways = [
  {
    id: "StartBusiness",
    title: [{ text:"I want to "},
           { text: "start ", highlight: true},
           { text: "my business"},],
    description: "We handle the setup so you can start with confidence.",
    button: "Start Now",
    path: "/start-your-business",
    Illustration: StartBusiness,
  },
  {
    id: "GrowBusiness",
    title: [ { text:"I want to "},
            { text: "grow ", highlight: true},
            { text: "my business"},],
    description: "Business services that help you grow.",
    button: "Grow Now",
    path: "/grow-your-business",
    Illustration: GrowBusiness,
  }
];