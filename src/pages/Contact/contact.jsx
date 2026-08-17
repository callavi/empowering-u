import {ContactFormSection} from "../../shared/components/ContactFormSection/ContactFormSection";
import { Hero } from "../../shared/components/Hero/hero";
import { Heroes } from "../../shared/data/heroConfig";
import { ProcessSection } from "../../shared/components/ProcessSection/ProcessSection";
import { information } from "../../shared/data/contactInfo";
import { FAQSection } from "../../shared/components/FAQ/FAQSection";
import { ctas } from "../../shared/data/ctaConfig";
import { CTASection } from "../../shared/components/CTASection/CTASection";
import SEO from "../../shared/components/SEO/seo";


export default function Contact() {
  return (
    <>
    <SEO
      title="Contact Empowering U | Get Business Support"
      description="Have questions about starting, registering, or growing your business? Contact Empowering U and get practical guidance for your next step."
      path="/contact"
    />
    <Hero hero={Heroes.contact} />
    <ContactFormSection />
    <ProcessSection {...information.process} />
    <FAQSection contents={information} />
    <CTASection cta={ctas.contact} />
    </>
  )
}