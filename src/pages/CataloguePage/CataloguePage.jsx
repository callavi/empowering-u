import { useParams } from "react-router-dom";
import { products } from "../../shared/data/services/index";
import { ProductPageTemplate } from "../../shared/components/ProductPageTemplate/ProductPageTemplate";
import NotFound from "../NotFound/notfound";

export default function CataloguePage() {
  const { slug } = useParams();

  const product = products[slug];

  if (!product) {
    return <NotFound />;
  }

  return <ProductPageTemplate product={product} />;
}