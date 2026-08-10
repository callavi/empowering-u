import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getService } from "../../shared/lib/service";
import { ProductPageTemplate } from "../../shared/components/ProductPageTemplate/ProductPageTemplate";
import NotFound from "../NotFound/notfound";

export default function CataloguePage() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadService() {
      try {
        setLoading(true);
        setError(null);

        const service = await getService(slug);

        if (!cancelled) {
          setProduct(service);
        }
      } catch (error) {
        console.error("Failed to load service:", error);

        if (!cancelled) {
          setError(error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadService();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong while loading this service.</div>;
  }

  if (!product) {
    return <NotFound />;
  }

  return <ProductPageTemplate product={product} />;
}