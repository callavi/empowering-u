import { ProductHero } from "../Hero/ProductHero";
import { OverviewSection } from "../OverviewSection/OverviewSection";
import { ProcessSection } from "../ProcessSection/ProcessSection";
import { DocumentsRequiredSection } from "../DocumentsRequiredSection/DocumentsRequiredSection";
import { FAQSection } from "../FAQ/FAQSection";
import Reveal from "../../motion/Reveal";



export function ProductPageTemplate({ product }) {
  return (
    <>
      <Reveal direction="up">
        <ProductHero {...product.hero} />
      </Reveal>
        <OverviewSection product={product} />
      <Reveal direction="up">
        <ProcessSection {...product.process} />
      </Reveal>
      <Reveal direction="up">
        <DocumentsRequiredSection contents={product} />
      </Reveal>
      <Reveal direction="up">
        <FAQSection contents={product} />
      </Reveal>
    </>
  );
}