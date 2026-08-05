import { ProductHero } from "../Hero/ProductHero";
import { OverviewSection } from "../OverviewSection/OverviewSection";
import { ProcessSection } from "../ProcessSection/ProcessSection";
import { DocumentsRequiredSection } from "../DocumentsRequiredSection/DocumentsRequiredSection";
import { FAQSection } from "../FAQ/FAQSection";



export function ProductPageTemplate({ product }) {
  return (
    <>
      <ProductHero {...product.hero} />
      <OverviewSection product={product} />
      <ProcessSection {...product.process} />
      <DocumentsRequiredSection contents={product} />
      <FAQSection contents={product} />
    </>
  );
}