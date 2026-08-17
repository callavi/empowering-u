import { Hero } from "../../shared/components/Hero/hero"
import { CTASection } from "../../shared/components/CTASection/CTASection";
import { WhySection } from "../../shared/components/WhySection/WhySection";
import { ProcessSection } from "../../shared/components/ProcessSection/ProcessSection";

import { Heroes } from "../../shared/data/heroConfig";
import { aboutContent } from "../../shared/data/about";
import { aboutProcess } from "../../shared/data/about";
import { ctas } from "../../shared/data/ctaConfig"

import Container from "../../shared/components/Container/Container";
import { SectionHeading } from "../../shared/components/SectionHeading/SectionHeading";

import styles from "./about.module.css";

export default function About() {
  return (
    <>
    <Hero hero={Heroes.about} />
    <WhySection campaign={aboutContent.whoWeAre} />
    <ProcessSection {...aboutProcess} />
    <WhySection campaign={aboutContent.whyEmpoweringU} />
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
    <CTASection cta={ctas.about} />
  </>
  )
}