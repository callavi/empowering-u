import { Hero } from "../../shared/components/Hero/hero"
import { CTASection } from "../../shared/components/CTASection/CTASection";
import { WhySection } from "../../shared/components/WhySection/WhySection";
import { ProcessSection } from "../../shared/components/ProcessSection/ProcessSection";
import SEO from "../../shared/components/SEO/seo";

import { Heroes } from "../../shared/data/heroConfig";
import { aboutContent } from "../../shared/data/about";
import { aboutProcess } from "../../shared/data/about";
import { ctas } from "../../shared/data/ctaConfig"

import Container from "../../shared/components/Container/Container";
import { SectionHeading } from "../../shared/components/SectionHeading/SectionHeading";

import styles from "./about.module.css";
import Reveal from "../../shared/motion/Reveal";

export default function About() {
  return (
    <>
    <SEO
    title="About Empowering U | Business Support for Entrepreneurs"
    description="Learn how Empowering U helps first-time entrepreneurs turn their ideas into businesses with practical guidance, simple processes, and support from start to growth."
    path="/about"
    />
    <Hero hero={Heroes.about} />
    <Reveal direction="up">
        <WhySection campaign={aboutContent.whoWeAre} />
    </Reveal>
    <Reveal direction="up">
        <ProcessSection {...aboutProcess} />
    </Reveal>
    <Reveal direction="up">
        <WhySection campaign={aboutContent.whyEmpoweringU} />
    </Reveal>
    <Reveal direction="up">
        <section className={styles.empoweringMinds}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <SectionHeading
                            title={aboutContent.empoweringMinds.heading}
                            align="left"
                        />
                    </div>

                    <div className={styles.content}>
                        {aboutContent.empoweringMinds.paragraphs.map(
                            (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                            )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    </Reveal>
    <Reveal direction="up">
        <CTASection cta={ctas.about} />
    </Reveal>
  </>
  )
}