import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const searchResultsClassName =
  "flex flex-col gap-[var(--space-stack-md)]";

export const searchResultsToolbarClassName =
  "flex flex-wrap items-center justify-between gap-[var(--space-stack-md)]";

export function SearchResults({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="search-results" className={cn(searchResultsClassName, className)}>
      {children}
    </div>
  );
}

export function SearchResultsToolbar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="search-results-toolbar"
      className={cn(searchResultsToolbarClassName, className)}
    >
      {children}
    </div>
  );
}

export function SearchResultsSearch({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="search-results-search" className={className}>
      {children}
    </div>
  );
}

export function SearchResultsResults({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="search-results-results" className={className}>
      {children}
    </div>
  );
}
