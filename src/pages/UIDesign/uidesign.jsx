import { Button } from "../../shared/components/Button/Button";
import { PathwayCard } from "../../shared/components/Cards/PathwayCard/PathwayCard";
import { ServiceCard } from "../../shared/components/Cards/ServiceCard/ServiceCard";
import Container from "../../shared/components/Container/Container";
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection";
import { pathways } from "../../shared/data/pathway";
import { services } from "../../shared/data/serviceinfo";
import { businessProcess } from "../../shared/data/businessprocess";
import { gst } from "../../shared/data/services/GSTRegistration";
import { startYourBusiness } from "../../shared/data/startyourbusinessprocess";
import { TrustBar } from "../../shared/components/TrustBar/TrustBar";
import { ctas } from "../../shared/data/ctaConfig";
import { CTA } from "../../shared/components/CTA/cta";
import { Heroes } from "../../shared/data/heroConfig";
import { Hero } from "../../shared/components/Hero/hero";
import { products } from "../../shared/data/services/index";
import { ProductCard } from "../../shared/components/Cards/ProductCard/ProductCard";
import { FilterTab } from "../../shared/components/FilterTab/FilterTab";
import { CatalogueGrid } from "../../shared/components/CatalogueGrid/CatalogueGrid";
import { ProductHero } from "../../shared/components/Hero/ProductHero";
import { PriceCard } from "../../shared/components/Cards/PriceCard/PriceCard";
import { OverviewSection } from "../../shared/components/OverviewSection/OverviewSection";
import { DocumentsRequiredSection } from "../../shared/components/DocumentsRequiredSection/DocumentsRequiredSection";
import { FAQSection } from "../../shared/components/FAQ/FAQSection";
import SEO from "../../shared/components/SEO/seo";

export default function UIDesign() {
  return (
    <main>
      <SEO
        title="Design System | Empowering U"
        description="Empowering U design system."
        path="/uidesign"
        noIndex={true}
      />
      <Container>

        <h1 className="mb-12 text-4xl font-bold">
          Design System
        </h1>

        <section className="mb-16">
          <Hero hero={Heroes.homepage} />
        </section>

        <section className="mb-16">
          <ProductHero product={products[0]} />
        </section>

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

        {/*Filter Tab*/}
        <section className="mb-16">
          <FilterTab />
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="primaryInverse">Primary Inverse</Button>
            <Button variant="accent">Accent</Button>
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

          <div className="grid gap-18 md:grid-cols-2 mb-4">
            {pathways.map((item) => (
              <PathwayCard
                key={item.path}
                pathway={item}
              />
            ))}
          </div>

          <div className="mt-4 mb-4">
            <PriceCard product={products[0]} />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-4">
            {services.map((item) => (
              <ServiceCard
                key={item.path}
                service={item}
              />
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-4 xl:grid-cols-4 py-20">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
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
          <ProcessSection steps={businessProcess} />
        </section>
        <section className="flex flex-col justify-between mb-4">
          <OverviewSection product={products[gst.slug]} />
        </section>
        <section className="flex flex-col justify-between mb-4">
          <DocumentsRequiredSection contents={products[gst.slug]} />
        </section>
        <section className="flex flex-col justify-between mb-4">
          <FAQSection contents={products[gst.slug]} />
        </section>
        <section className="flex flex-col justify-between text-center mb-4">
          <h3 className="mb-6 text-2xl font-semibold">Service Process</h3>
          <ProcessSection steps={products[gst.slug]} />
        </section>
        <section className="flex flex-col justify-between text-center mb-4">
          <h3 className="mb-6 text-2xl font-semibold">Campaign Process</h3>
          <ProcessSection steps={startYourBusiness} />
        </section>
        </section>
        {/* Trust Bar */}
        <section className="flex flex-col justify-between mb-4">
          <h2 className="mb-6 text-2xl font-semibold">
            Trust Bar
          </h2>
          <TrustBar />
        </section>
        <section className="flex flex-col justify-between mb-4">
          <h2 className="mb-6 text-2xl font-semibold">
            CTAs
          </h2>
          <CTA info={ctas.consultation} />
        </section>
        <section className="flex flex-col justify-between mb-4">
          <CatalogueGrid products={products}/>
        </section>
      </Container>
    </main>
  );
}