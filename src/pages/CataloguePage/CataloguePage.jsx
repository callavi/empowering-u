import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getService } from "../../shared/lib/service";
import { ProductPageTemplate } from "../../shared/components/ProductPageTemplate/ProductPageTemplate";
import NotFound from "../NotFound/notfound";
import { BreadcrumbStructuredData, ServiceStructuredData } from "../../shared/components/StructuredData/StructuredData";
import { LoaderCircle } from "lucide-react";
import SEO from "../../shared/components/SEO/seo";

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
        return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <LoaderCircle
                className="animate-spin text-primary-500"
                size={36}
                strokeWidth={2}
                aria-label="Loading"
            />
        </div>
    );
  }

  if (error) {
    return <div>Something went wrong while loading this service.</div>;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title="Business Services | Empowering U"
        description="Explore business registration, compliance, digital, branding, and growth services from Empowering U, designed to help you start, build, and grow your business."
        path="/catalogue"
      />
      <SEO
        title={product.seo?.title}
        description={product.seo?.description}
        path={`/catalogue/${product.slug}`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Catalogue", path: "/catalogue" },
          {
            name: product.label || product.hero?.title || product.slug,
            path: `/catalogue/${product.slug}`,
          },
        ]}
      />
      <ServiceStructuredData
        product={product}
        path={`/catalogue/${product.slug}`}
      />
      <ProductPageTemplate product={product} />
    </>
  );
}