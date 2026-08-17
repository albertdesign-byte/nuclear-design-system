import type { Metadata } from "next";
import Link from "next/link";

import {
  foundationsRegistry,
  getFoundationEntry,
} from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";

const overview = getFoundationEntry("/docs/foundations")!;
export const metadata: Metadata = {
  title: overview.title,
  description: overview.description,
};

export default function FoundationsOverviewRoute() {
  return (
    <DocsFoundationPage>
      <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
        {foundationsRegistry.slice(1).map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
          >
            <h2 className="text-[length:var(--text-label-size)] font-semibold">
              {entry.title}
            </h2>
            <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
              {entry.description}
            </p>
          </Link>
        ))}
      </div>
    </DocsFoundationPage>
  );
}
