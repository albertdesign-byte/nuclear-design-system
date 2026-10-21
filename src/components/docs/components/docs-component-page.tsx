"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import {
  getComponentEntry,
  getComponentNeighbors,
} from "@/components/docs/config/components-registry";
import { DocsPageHeader } from "@/components/docs/layout/docs-page-header";
import { DocsPager } from "@/components/docs/layout/docs-pager";
import { DocsTableOfContents } from "@/components/docs/layout/docs-table-of-contents";
import { DocsProductPage } from "@/components/docs/products/docs-product-page";

export function DocsComponentPage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const tocSourceRef = useRef<HTMLDivElement>(null);
  const entry = getComponentEntry(pathname);
  const { previous, next } = getComponentNeighbors(pathname);

  if (!entry) {
    return null;
  }

  return (
    <div className="flex min-w-0 flex-1">
      <DocsProductPage className="overflow-x-auto">
        <div className="mx-auto w-full max-w-[64rem]">
          <DocsPageHeader title={entry.title} description={entry.description} />

          <div
            ref={tocSourceRef}
            data-slot="docs-toc-source"
            className="mt-[var(--space-stack-lg)] flex flex-col gap-[var(--space-section)]"
          >
            {children}
          </div>

          <DocsPager
            label="Components pagination"
            previous={previous}
            next={next}
          />
        </div>
      </DocsProductPage>
      <DocsTableOfContents containerRef={tocSourceRef} />
    </div>
  );
}
