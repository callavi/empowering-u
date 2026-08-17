import { CatalogueSection } from "../../shared/components/CatalogueGrid/CatalogueSection";
import SEO from "../../shared/components/SEO/seo";


export default function Catalogue() {
  return (
    <>
      <SEO
        title="Business Services | Empowering U"
        description="Explore business registration, compliance, digital, branding, and growth services from Empowering U, designed to help you start, build, and grow your business."
        path="/catalogue"
      />
      <CatalogueSection />
    </>

  )
}