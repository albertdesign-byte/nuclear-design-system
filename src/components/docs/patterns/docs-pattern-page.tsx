"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import {
  getPatternEntry,
  getPatternNeighbors,
} from "@/components/docs/config/patterns-registry";
import { DocsPageHeader } from "@/components/docs/layout/docs-page-header";
import { DocsPager } from "@/components/docs/layout/docs-pager";
import { DocsProductPage } from "@/components/docs/products/docs-product-page";

export function DocsPatternPage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const entry = getPatternEntry(pathname);
  const { previous, next } = getPatternNeighbors(pathname);

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

        <DocsPager
          label="Patterns pagination"
          previous={previous}
          next={next}
        />
      </div>
    </DocsProductPage>
  );
}
