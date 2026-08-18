const SITE_URL = "https://empoweringu.theempoweringminds.com";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  type = "website",
  noIndex = false,
}) {
  const canonicalUrl = new URL(path, SITE_URL).href;

  return (
    <>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:image"
        content={`${SITE_URL}${image}`}
      />

      <meta
        property="og:site_name"
        content="Empowering U"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${SITE_URL}${image}`}
      />
    </>
  );
}