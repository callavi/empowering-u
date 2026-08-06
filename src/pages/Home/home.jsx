import { Hero } from "../../shared/components/Hero/hero"
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection"
import { PathwaySection } from "../../shared/components/PathwaySection/PathwaySection"
import { ServicesSection } from "../../shared/components/ServicesSection/ServicesSection"
import { CTASection } from "../../shared/components/CTASection/CTASection";

import { Heroes } from "../../shared/data/heroConfig";
import { businessProcess } from "../../shared/data/businessprocess"
import { ctas } from "../../shared/data/ctaConfig"

export default function Home() {
  return (
    <>
    <Hero hero={Heroes.homepage} />
    <PathwaySection />
    <ServicesSection />
    <ProcessSection {...businessProcess}/>
    <CTASection cta={ctas.consultation} />
  </>
  )
}