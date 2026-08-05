#!/usr/bin/env node
/**
 * Ensures Patients product sidebar links resolve to /docs/products/patients/*
 * and that every linked component has a route registry entry.
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
const routes = read("src/components/docs/config/patients-component-routes.ts");
const dynamicRoute = read("src/app/docs/products/patients/[slug]/page.tsx");

const registeredSlugs = [
  ...routes.matchAll(/^\s+(?:"([a-z0-9-]+)"|([a-z][a-z0-9-]*)):\s*\{/gm),
].map((match) => match[1] ?? match[2]);

const patientsBaseSection = productsNav.match(
  /const patientsProductNavCategoriesBase[\s\S]*?^];/m
)?.[0] ?? "";

const baseHrefs = [
  ...patientsBaseSection.matchAll(/href:\s*"(\/docs\/components[^"]*)"/g),
].map((match) => match[1]);

if (baseHrefs.length === 0) {
  fail("No Patients component hrefs found in products-navigation.ts");
} else {
  pass(`Found ${baseHrefs.length} Patients component source hrefs`);
}

const patientsHrefs = baseHrefs.map(toPatientsProductHref);

for (const href of patientsHrefs) {
  if (!href.startsWith("/docs/products/patients/")) {
    fail(`Patients href must stay in product scope: ${href}`);
    continue;
  }

  const slug = href.split("#")[0].replace("/docs/products/patients/", "");
  if (!registeredSlugs.includes(slug)) {
    fail(`Missing patientsComponentRoutes entry for slug "${slug}" (${href})`);
  }
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
