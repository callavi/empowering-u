import {ContactFormSection} from "../../shared/components/ContactFormSection/ContactFormSection";
import { Hero } from "../../shared/components/Hero/hero";
import { Heroes } from "../../shared/data/heroConfig";
import { ProcessSection } from "../../shared/components/ProcessSection/ProcessSection";
import { information } from "../../shared/data/contactInfo";
import { FAQSection } from "../../shared/components/FAQ/FAQSection";
import { ctas } from "../../shared/data/ctaConfig";
import { CTASection } from "../../shared/components/CTASection/CTASection";


export default function Contact() {
  return (
    <>
    <Hero hero={Heroes.contact} />
    <ContactFormSection />
    <ProcessSection {...information.process} />
    <FAQSection contents={information} />
    <CTASection cta={ctas.contact} />
    </>
  )
}