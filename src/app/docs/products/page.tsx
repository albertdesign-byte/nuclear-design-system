import type { Metadata } from "next";
import Link from "next/link";

import { docsProductNavEntries } from "@/components/docs/config/products-navigation";
import { DocsProductPage } from "@/components/docs/products/docs-product-page";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Real Patients and MPF Portal implementations built from Nuclear foundations, components, patterns, and templates.",
};

export default function ProductsOverviewRoute() {
  return (
    <DocsProductPage>
      <div className="mx-auto w-full max-w-[64rem]">
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-wide text-muted-foreground">
          Nuclear Design System
        </p>
        <h1 className="mt-[var(--space-stack-xs)] text-[length:var(--text-h2-size)] font-semibold leading-[var(--text-h2-line-height)]">
          Products
        </h1>
        <p className="mt-[var(--space-stack-sm)] max-w-[44rem] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
          Real product implementations that consume Nuclear layouts. Copy,
          validation, routing, and business rules live here. AppShell and
          MultiStepFlowLayout belong to Templates — never name a layout after
          a product domain.
        </p>

        <div className="mt-[var(--space-stack-lg)] grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
          {docsProductNavEntries.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
            >
              <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
                {product.title}
              </h2>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </DocsProductPage>
  );
}
