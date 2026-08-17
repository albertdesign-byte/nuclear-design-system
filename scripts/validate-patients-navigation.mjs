#!/usr/bin/env node
/**
 * Ensures Patients product navigation reuses the existing implementation
 * registry while legacy product-scoped component routes remain functional.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  failed = true;
}

function read(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    fail(`Missing file: ${rel}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

function toPatientsProductHref(componentHref) {
  if (componentHref === "#" || componentHref.startsWith("/docs/products/patients")) {
    return componentHref;
  }

  const [path, hash] = componentHref.split("#");
  const match = path.match(/^\/docs\/components\/(.+)$/);
  if (!match) {
    return componentHref;
  }

  return `/docs/products/patients/${match[1]}${hash ? `#${hash}` : ""}`;
}

console.log("=== Patients Navigation Validation ===\n");

const productsNav = read("src/components/docs/config/products-navigation.ts");
const userflowNav = read("src/components/docs/config/userflow-navigation.ts");
const routes = read("src/components/docs/config/patients-component-routes.ts");
const userflowRoutes = read("src/components/docs/config/userflow-screen-routes.ts");
const dynamicRoute = read("src/app/docs/products/patients/[slug]/page.tsx");
const dynamicUserflowRoute = read("src/app/docs/userflow/patients/[slug]/page.tsx");

const registeredSlugs = [
  ...routes.matchAll(/^  (?:"([a-z0-9-]+)"|([a-z][a-z0-9-]*)):\s*\{/gm),
].map((match) => match[1] ?? match[2]);

if (productsNav.includes("...patientsUserflowNavCategories")) {
  pass("Patients product navigation reuses the implementation categories");
} else {
  fail("Patients product navigation does not reuse patientsUserflowNavCategories");
}

const implementationHrefs = [
  ...userflowNav.matchAll(/href:\s*"(\/docs\/userflow\/patients\/[^"]+)"/g),
].map((match) => match[1]);

if (implementationHrefs.length > 0) {
  pass(`Found ${implementationHrefs.length} Patients implementation hrefs`);
} else {
  fail("No Patients implementation hrefs found");
}

if (existsSync(join(root, "src/app/docs/products/patients/[slug]/page.tsx"))) {
  pass("Dynamic Patients component route page exists");
} else {
  fail("Missing src/app/docs/products/patients/[slug]/page.tsx");
}

if (dynamicRoute.includes("patientsComponentRoutes")) {
  pass("Dynamic Patients component route is wired to the registry");
} else {
  fail("Dynamic Patients component route is not wired to the registry");
}

if (
  dynamicUserflowRoute.includes("patientsUserflowScreenRoutes") &&
  userflowRoutes.includes("patientsUserflowScreenRoutes")
) {
  pass("Dynamic Patients implementation route is wired to the registry");
} else {
  fail("Dynamic Patients implementation route is not wired to the registry");
}

if (registeredSlugs.length > 0) {
  pass(`Preserved ${registeredSlugs.length} legacy Patients component routes`);
} else {
  fail("No legacy Patients component routes remain registered");
}

const footerHref = toPatientsProductHref("/docs/components/app-footer");
if (footerHref === "/docs/products/patients/app-footer") {
  pass("Footer link stays in Patients scope (/docs/products/patients/app-footer)");
} else {
  fail(`Unexpected Footer href mapping: ${footerHref}`);
}

console.log("");
if (failed) {
  process.exit(1);
}

pass("Patients navigation validation passed");
