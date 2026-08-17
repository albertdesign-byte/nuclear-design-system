import type { Metadata } from "next";
import Link from "next/link";

import {
  componentCategories,
  componentsRegistry,
  getComponentEntry,
} from "@/components/docs/config/components-registry";
import { DocsComponentPage } from "@/components/docs/components/docs-component-page";

const overview = getComponentEntry("/docs/components")!;
export const metadata: Metadata = {
  title: overview.title,
  description: overview.description,
};

export default function ComponentsOverviewRoute() {
  return (
    <DocsComponentPage>
      {componentCategories.map((category) => {
        const items = componentsRegistry.filter(
          (entry) => entry.category === category
        );

        if (items.length === 0) {
          return null;
        }

        return (
          <section key={category}>
            <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
              {category}
            </h2>
            <div className="mt-[var(--space-stack-sm)] grid gap-[var(--space-grid-gap)] sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) =>
                item.status === "planned" || item.href === "#" ? (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] opacity-60"
                  >
                    <span className="text-[length:var(--text-label-size)] font-medium">
                      {item.title}
                    </span>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
                  >
                    <span className="text-[length:var(--text-label-size)] font-medium">
                      {item.title}
                    </span>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                )
              )}
            </div>
          </section>
        );
      })}
    </DocsComponentPage>
  );
}
