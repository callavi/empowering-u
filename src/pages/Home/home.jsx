import { Hero } from "../../shared/components/Hero/hero"
import { PathwayCard } from "../../shared/components/Cards/PathwayCard/PathwayCard"
import { TrustBar } from "../../shared/components/TrustBar/TrustBar"
import { ServiceCard } from "../../shared/components/Cards/ServiceCard/ServiceCard"
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection"
import { CTA } from "../../shared/components/CTA/cta"
import { SectionHeading } from "../../shared/components/SectionHeading/SectionHeading"
import Container from "../../shared/components/Container/Container"


import { Heroes } from "../../shared/data/heroConfig";
import { businessProcess } from "../../shared/data/businessprocess"
import { pathways } from "../../shared/data/pathway"
import { services } from "../../shared/data/serviceinfo"
import { ctas } from "../../shared/data/ctaConfig"

export default function Home() {
  return (
    <main>
    <Hero hero={Heroes.homepage} />
    <Container>
      <section className="flex flex-col justify-between py-20">
        <SectionHeading title="Choose Your Path. We'll handle the rest" eyebrow="Not sure what you need?" align="center"/>
        <div className="grid gap-18 md:grid-cols-2 mb-4">
          {pathways.map((item) => (
            <PathwayCard
              key={item.path}
              pathway={item}
            />
          ))}
        </div>
      </section>
      <TrustBar />
      <section className="flex flex-col justify-between py-20">
        <SectionHeading title="Or, browse all our services" align="center" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <ServiceCard
              key={item.path}
              service={item}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-between text-center py-20">
        <ProcessSection businessProcess={businessProcess} heading="Simple process. Zero hassle."/>
      </section>
      <section className = "py-20">
        <CTA info={ctas.consultation}  />
      </section>
    </Container>
  </main>
  )
}