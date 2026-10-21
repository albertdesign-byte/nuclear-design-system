"use client";

import { useEffect, useState, type RefObject } from "react";

import { cn } from "@/lib/utils";
import { docsNavLinkTypographyClassName } from "@/components/docs/layout/docs-nav-styles";

import {
  collectDocsTocEntries,
  flattenDocsTocItems,
  nestDocsTocItems,
  pickActiveSectionId,
  scrollToDocsSection,
  type DocsTocItem,
} from "./docs-toc";

function readHashId() {
  return window.location.hash.replace(/^#/, "");
}

function DocsTocLinks({
  items,
  activeId,
  nested = false,
  onSelect,
}: {
  items: DocsTocItem[];
  activeId: string;
  nested?: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-[var(--space-stack-xs)]",
        nested && "mt-[var(--space-stack-xs)] pl-[var(--space-inline-md)]"
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => {
                onSelect(item.id);
                scrollToDocsSection(item.id);
              }}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                docsNavLinkTypographyClassName,
                "block rounded-[var(--radius-button)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
                "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
                isActive
                  ? "bg-[var(--docs-nav-active-bg)] font-medium text-foreground"
                  : "text-muted-foreground hover:bg-[var(--color-surface-hover)] hover:text-foreground"
              )}
            >
              {item.label}
            </a>
            {item.children?.length ? (
              <DocsTocLinks
                items={item.children}
                activeId={activeId}
                nested
                onSelect={onSelect}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function DocsTableOfContents({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [items, setItems] = useState<DocsTocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return;
    }

    let frame = 0;

    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setItems(nestDocsTocItems(collectDocsTocEntries(root)));
      });
    };

    refresh();

    const mutations = new MutationObserver(refresh);
    mutations.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
    };
  }, [containerRef]);

  const sectionIds = flattenDocsTocItems(items).map((item) => item.id);
  const resolvedActiveId = sectionIds.includes(activeId)
    ? activeId
    : sectionIds[0] ?? "";

  useEffect(() => {
    const ids = flattenDocsTocItems(items).map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (observerEntries) => {
        const nextId = pickActiveSectionId(
          observerEntries.map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
            isIntersecting: entry.isIntersecting,
          }))
        );

        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 1],
      }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    const hashId = readHashId();
    if (hashId && ids.includes(hashId)) {
      scrollToDocsSection(hashId, "auto");
    }

    const onHashChange = () => {
      const nextHash = readHashId();
      if (nextHash && ids.includes(nextHash)) {
        setActiveId(nextHash);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <aside
      data-slot="docs-table-of-contents"
      className={cn(
        "docs-table-of-contents sticky top-[var(--docs-header-height)] z-[var(--z-sticky)]",
        "hidden h-[calc(100vh-var(--docs-header-height))] w-[var(--docs-toc-width)] shrink-0 self-start",
        "overflow-y-auto border-l border-[var(--docs-chrome-border)] bg-background",
        "px-[var(--space-inline-md)] py-[var(--space-page)]",
        "xl:block"
      )}
    >
      <nav aria-label="On this page">
        <p
          className={cn(
            docsNavLinkTypographyClassName,
            "mb-[var(--space-stack-sm)] font-medium text-foreground"
          )}
        >
          On This Page
        </p>
        <DocsTocLinks
          items={items}
          activeId={resolvedActiveId}
          onSelect={setActiveId}
        />
      </nav>
    </aside>
  );
}
