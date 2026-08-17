const SITE_URL = "https://www.theempoweringminds.com";
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function StructuredData({ data }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
    </script>
  );
}

export function WebsiteStructuredData() {
  return (
    <StructuredData
      data={[
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          name: "Empowering U",
          url: SITE_URL,
          publisher: {
            "@id": BUSINESS_ID,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
          name: "Empowering U",
          url: SITE_URL,
          telephone: "+917908466757",
          email: "empoweringminds19@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "86, Golaghata Road",
            addressLocality: "Kolkata",
            postalCode: "700048",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          parentOrganization: {
            "@type": "Organization",
            name: "Empowering Minds",
          },
        },
      ]}
    />
  );
}

export function BreadcrumbStructuredData({ items }) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}

export function ServiceStructuredData({ product, path }) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.label || product.hero?.title,
    description: product.hero?.description || product.subtitle,
    provider: {
      "@id": BUSINESS_ID,
    },
    url: `${SITE_URL}${path}`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: product.label || product.hero?.title,
  };

  if (product.price != null && product.currency) {
    service.offers = {
      "@type": "Offer",
      price: String(product.price),
      priceCurrency: product.currency,
      url: `${SITE_URL}${path}`,
    };
  }

  return <StructuredData data={service} />;
}

export { SITE_URL };
export default StructuredData;
