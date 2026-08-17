const SITE_URL = "https://empoweringu.theempoweringminds.com";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/logo-with-name-1200x800.svg",
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
    </>
  );
}