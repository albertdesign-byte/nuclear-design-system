#!/usr/bin/env node
/**
 * Smoke test: Patients Footer doc keeps Patients sidebar context in rendered HTML.
 * Requires `npm run dev` on port 3000 or PORT env var.
 */

const port = process.env.PORT ?? "3000";
const baseUrl = `http://127.0.0.1:${port}`;

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`);
  if (!response.ok) {
    throw new Error(`GET ${path} failed with ${response.status}`);
  }
  return response.text();
}

function assertIncludes(html, needle, message) {
  if (!html.includes(needle)) {
    throw new Error(message);
  }
}

function assertExcludes(html, needle, message) {
  if (html.includes(needle)) {
    throw new Error(message);
  }
}

async function main() {
  console.log("=== Patients Footer Navigation Smoke Test ===\n");

  const patientsFooterHtml = await fetchText("/docs/products/patients/app-footer");
  assertIncludes(
    patientsFooterHtml,
    'aria-label="Patients product"',
    "Patients Footer route should render the Patients sidebar"
  );
  assertIncludes(
    patientsFooterHtml,
    "Contact Us",
    "Patients Footer route should render the Patients footer variant"
  );

  const componentsFooterHtml = await fetchText("/docs/components/app-footer");
  assertIncludes(
    componentsFooterHtml,
    'aria-label="Documentation"',
    "Components Footer route should render the Components sidebar"
  );
  assertExcludes(
    componentsFooterHtml,
    'aria-label="Patients product"',
    "Components Footer route should not render the Patients sidebar"
  );

  console.log("✅ Patients Footer keeps Patients sidebar context");
  console.log("✅ Components Footer keeps Components sidebar context");
}

main().catch((error) => {
  console.error(`❌ ${error.message}`);
  console.error("\nStart the dev server first: npm run dev");
  process.exit(1);
});
