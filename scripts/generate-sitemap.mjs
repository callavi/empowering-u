import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const servicesIndexPath = resolve(projectRoot, "src/shared/data/services/index.js");
const outputPath = resolve(projectRoot, "dist/sitemap.xml");

const SITE_URL = "https://www.theempoweringminds.com";

const staticRoutes = [
  "/",
  "/about",
  "/catalogue",
  "/contact",
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function resolveModulePath(importPath, importerPath) {
  const basePath = resolve(dirname(importerPath), importPath);
  return `${basePath}.js`;
}

const indexSource = await readFile(servicesIndexPath, "utf8");

const imports = new Map();
const importPattern = /import\s*\{\s*([A-Za-z_$][\w$]*)\s*\}\s*from\s*["']([^"']+)["'];?/g;

for (const match of indexSource.matchAll(importPattern)) {
  const [, variableName, importPath] = match;
  imports.set(variableName, resolveModulePath(importPath, servicesIndexPath));
}

const productsMatch = indexSource.match(
  /export\s+const\s+products\s*=\s*\{([\s\S]*?)\n\s*\};/
);

if (!productsMatch) {
  throw new Error("Could not find the products object in src/shared/data/services/index.js");
}

const productVariables = [
  ...productsMatch[1].matchAll(/\[([A-Za-z_$][\w$]*)\.slug\]\s*:\s*\1\b/g),
].map((match) => match[1]);

if (productVariables.length === 0) {
  throw new Error("No products were found while generating the sitemap.");
}

const serviceRoutes = [];

for (const variableName of productVariables) {
  const servicePath = imports.get(variableName);

  if (!servicePath) {
    throw new Error(`Could not resolve the import for product '${variableName}'.`);
  }

  const serviceSource = await readFile(servicePath, "utf8");
  const slugMatch = serviceSource.match(/\bslug\s*:\s*["']([^"']+)["']/);

  if (!slugMatch) {
    throw new Error(`Could not find a static slug for product '${variableName}'.`);
  }

  serviceRoutes.push(`/catalogue/${slugMatch[1]}`);
}

const routes = [...new Set([...staticRoutes, ...serviceRoutes])];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route}`)}</loc>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(outputPath, sitemap, "utf8");

console.log(`Generated ${outputPath}`);
console.log(`Included ${routes.length} URLs (${serviceRoutes.length} catalogue pages).`);
