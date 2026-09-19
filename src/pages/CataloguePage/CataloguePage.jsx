import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getService } from "../../shared/lib/service";
import { ProductPageTemplate } from "../../shared/components/ProductPageTemplate/ProductPageTemplate";
import NotFound from "../NotFound/notfound";
import { BreadcrumbStructuredData, ServiceStructuredData } from "../../shared/components/StructuredData/StructuredData";
import { LoaderCircle } from "lucide-react";
import SEO from "../../shared/components/SEO/seo";
import styles from "../CataloguePage/CataloguePage.module.css";

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
    <div className={styles.loading}>
      <LoaderCircle
        className={styles.loader}
        size={40}
        strokeWidth={1.75}
        aria-label="Loading"
      />
      <span className={styles.loadingText}>
        Loading service...
      </span>
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
        title="Business Services | Empowering Biz"
        description="Explore business registration, compliance, digital, branding, and growth services from Empowering Biz, designed to help you start, build, and grow your business."
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