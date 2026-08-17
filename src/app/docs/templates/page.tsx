import type { Metadata } from "next";
import Link from "next/link";

import {
  getTemplateEntry,
  templatesRegistry,
} from "@/components/docs/config/templates-registry";
import { DocsTemplatePage } from "@/components/docs/templates/docs-template-page";

const overview = getTemplateEntry("/docs/templates")!;
export const metadata: Metadata = {
  title: overview.title,
  description: overview.description,
};

export default function TemplatesOverviewRoute() {
  const catalog = templatesRegistry.filter(
    (entry) => entry.href !== "/docs/templates"
  );

  return (
    <DocsTemplatePage>
      <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
        {catalog.map((entry) =>
          entry.comingSoon || entry.href === "#" ? (
            <div
              key={entry.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] opacity-60"
            >
              <h2 className="text-[length:var(--text-label-size)] font-semibold">
                {entry.title}
              </h2>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                {entry.description}
              </p>
            </div>
          ) : (
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
          )
        )}
      </div>
      <p className="mt-[var(--space-section)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Form Page is not a template. All live forms are MultiStepFlowLayout
        steps. Use MultiStepFlowLayout or Card + Form Field until a non-wizard
        form repeats across products.
      </p>
    </DocsTemplatePage>
  );
}
