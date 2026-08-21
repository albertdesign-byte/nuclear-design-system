"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { TextLink } from "@/components/text-link";
import {
  getTemplateEntry,
  getTemplateNeighbors,
} from "@/components/docs/config/templates-registry";
import { DocsPageHeader } from "@/components/docs/layout/docs-page-header";
import { DocsProductPage } from "@/components/docs/products/docs-product-page";

export function DocsTemplatePage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const entry = getTemplateEntry(pathname);
  const { previous, next } = getTemplateNeighbors(pathname);

  if (!entry) {
    return null;
  }

  return (
    <DocsProductPage>
      <div className="mx-auto w-full max-w-[64rem]">
        <DocsPageHeader
          title={entry.title}
          description={entry.description}
          storybook={entry.storybook}
        />

        <div className="mt-[var(--space-stack-lg)] flex flex-col gap-[var(--space-section)]">
          {children}
        </div>

        <nav
          aria-label="Templates pagination"
          className="mt-[var(--space-section)] flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-lg)]"
        >
          {previous ? (
            <TextLink href={previous.href}>Previous: {previous.title}</TextLink>
          ) : (
            <span aria-hidden />
          )}

          {next ? (
            <TextLink href={next.href}>Next: {next.title}</TextLink>
          ) : (
            <span aria-hidden />
          )}
        </nav>
      </div>
    </DocsProductPage>
  );
}
