import type { Metadata } from "next";
import Link from "next/link";

import {
  getPatternEntry,
  patternCategories,
  patternsRegistry,
} from "@/components/docs/config/patterns-registry";
import { DocsPatternPage } from "@/components/docs/patterns/docs-pattern-page";

const overview = getPatternEntry("/docs/patterns")!;
export const metadata: Metadata = {
  title: overview.title,
  description: overview.description,
};

export default function PatternsOverviewRoute() {
  return (
    <DocsPatternPage>
      <p className="max-w-[44rem] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
        These patterns were extracted from published Patients intake screens and
        the MPF Portal Dashboard. They document existing compositions. They do
        not introduce new UI components.
      </p>

      {patternCategories.map((category) => {
        const items = patternsRegistry.filter(
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
            <div className="mt-[var(--space-stack-sm)] grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
              {items.map((item) => (
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
              ))}
            </div>
          </section>
        );
      })}
    </DocsPatternPage>
  );
}
