import { CatalogueSection } from "../../shared/components/CatalogueGrid/CatalogueSection";
import { BreadcrumbStructuredData } from "../../shared/components/StructuredData/StructuredData";


export default function Catalogue() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Catalogue", path: "/catalogue" },
        ]}
      />
      <CatalogueSection />
    </>

  )
}