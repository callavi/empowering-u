import { Hero } from "../../shared/components/Hero/hero"
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection"
import { PathwaySection } from "../../shared/components/PathwaySection/PathwaySection"
import { ServicesSection } from "../../shared/components/ServicesSection/ServicesSection"
import { CTASection } from "../../shared/components/CTASection/CTASection";
import { AboutSection } from "../../shared/components/AboutSection/AboutSection";

import { Heroes } from "../../shared/data/heroConfig";
import { businessProcess } from "../../shared/data/businessprocess"
import { ctas } from "../../shared/data/ctaConfig"
import { TrustBar } from "../../shared/components/TrustBar/TrustBar";
import { aboutContent } from "../../shared/data/about";

export default function Home() {
  return (
    <>
    <Hero hero={Heroes.homepage} />
    <PathwaySection />
    <TrustBar />
    <AboutSection content={aboutContent.homepage} />
    <ServicesSection />
    <ProcessSection {...businessProcess}/>
    <CTASection cta={ctas.consultation} />
  </>
  )
}