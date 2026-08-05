"use client";

import { GlobalSearchBar } from "@/components/global-search-bar";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

const searchItems = [
  { label: "SRID-1001 — Elena Morales", value: "1001", group: "Scans" },
  { label: "SRID-1002 — Carlos Ruiz", value: "1002", group: "Scans" },
  { label: "My active scans", value: "scans", group: "Views" },
  { label: "My open tasks", value: "tasks", group: "Views" },
];

export function GlobalSearchBarRealScreenPreview() {
  return (
    <div>
      <GlobalSearchBar placeholder="Search everything" items={searchItems} />
      <DocsRealScreenExampleLink />
    </div>
  );
}
