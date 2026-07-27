import { Button } from "../../shared/components/Button/Button";
import { PathwayCard } from "../../shared/components/Cards/PathwayCard/PathwayCard";
import { ServiceCard } from "../../shared/components/Cards/ServiceCard/ServiceCard";
import Container from "../../shared/components/Container/Container";
import ProcessSection from "../../shared/components/ProcessSection/ProcessSection";
import { pathways } from "../../shared/data/pathway";
import { services } from "../../shared/data/serviceinfo";
import { businessProcess } from "../../shared/data/businessprocess";
import { GSTRegistration } from "../../shared/data/GSTprocess";
import { startYourBusiness } from "../../shared/data/startyourbusinessprocess";
import { TrustBar } from "../../shared/components/TrustBar/TrustBar";

export default function UIDesign() {
  return (
    <main className="py-16">
      <Container>

        <h1 className="mb-12 text-4xl font-bold">
          Design System
        </h1>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Typography</h2>

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">
            Color Palette
          </h2>
          <div className= "mb-5 flex h-14 w-14 items-center justify-center rounded-4xl">
            <h3>#6d3</h3>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text">Text</Button>

            <Button variant="primary" disabled>
              Disabled
            </Button>

            <Button variant="primary" size="small">
              Small
            </Button>

            <Button variant="primary" size="medium">
              Medium
            </Button>

            <Button variant="primary" size="large">
              Large
            </Button>

            <Button variant="icon">🔍</Button>

            <Button variant="icon" size="small">
              🔍
            </Button>

            <Button variant="icon" size="medium">
              🔍
            </Button>

            <Button variant="icon" size="large">
              🔍
            </Button>
          </div>

          <div className="mt-8 max-w-sm">
            <Button variant="primary" fullWidth>
              Full Width Button
            </Button>
          </div>
        </section>

        {/* Cards */}
        <section className="flex flex-col justify-between mb-4">
          <h2 className="mb-6 text-2xl font-semibold">
            Cards
          </h2>

          <div className="grid gap-12 md:grid-cols-2 mb-4">
            {pathways.map((item) => (
              <PathwayCard
                key={item.path}
                pathway={item}
              />
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-4">
            {services.map((item) => (
              <ServiceCard
                key={item.path}
                service={item}
              />
            ))}
          </div>

        </section>
        {/* Process Section */}
        <section className="flex flex-col justify-between mb-4">
          <h2 className="mb-6 text-2xl font-semibold">
            Process Sections
          </h2>
        <section className="flex flex-col justify-between text-center mb-4">
          <h3 className="mb-6 text-2xl font-semibold">Business Process</h3>
          <ProcessSection businessProcess={businessProcess} heading="Simple process. Zero hassle."/>
        </section>
        <section className="flex flex-col justify-between text-center mb-4">
          <h3 className="mb-6 text-2xl font-semibold">Service Process</h3>
          <ProcessSection businessProcess={GSTRegistration} heading="Process"/>
        </section>
        <section className="flex flex-col justify-between text-center mb-4">
          <h3 className="mb-6 text-2xl font-semibold">Campaign Process</h3>
          <ProcessSection businessProcess={startYourBusiness} heading="Our Simple 4-Step Process"/>
        </section>
        </section>
        {/* Trust Bar */}
        <section className="flex flex-col justify-between mb-4">
          <h2 className="mb-6 text-2xl font-semibold">
            Trust Bar
          </h2>
          <TrustBar />
        </section>
      </Container>
    </main>
  );
}