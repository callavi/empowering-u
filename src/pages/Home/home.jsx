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
import SEO from "../../shared/components/SEO/seo";

import Reveal from "../../shared/motion/Reveal";

export default function Home() {
  return (
    <>
    <SEO
      title="Empowering U | Start & Grow Your Business in India"
      description="Empowering U helps you start and grow your business in India with registration, compliance, digital, branding, and business growth services."
      path="/"
    />
    <Hero hero={Heroes.homepage} />
    <Reveal direction="up">
      <PathwaySection />
    </Reveal>
    <Reveal direction="up">
      <TrustBar />
    </Reveal>
    <Reveal direction="up">
      <AboutSection content={aboutContent.homepage} />
    </Reveal>
    <Reveal direction="up">
      <ServicesSection />
    </Reveal>
    <Reveal direction="up">
      <ProcessSection {...businessProcess}/>
    </Reveal>
    <Reveal direction="up">
      <CTASection cta={ctas.consultation} />
    </Reveal>
  </>
  )
}