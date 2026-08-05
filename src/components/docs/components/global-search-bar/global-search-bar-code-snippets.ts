import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const globalSearchBarImport = `import { GlobalSearchBar } from "@/components/global-search-bar";`;

export const globalSearchBarInstallationUiSnippet = tsxSnippet(`${globalSearchBarImport}

export function Example() {
  return <GlobalSearchBar placeholder="Search everything" />;
}`);

export const globalSearchBarRealScreenSnippet = tsxSnippet(`${globalSearchBarImport}

const searchItems = [
  { label: "SRID-1001 — Elena Morales", value: "1001", group: "Scans" },
  { label: "My active scans", value: "scans", group: "Views" },
];

export function Example() {
  return (
    <GlobalSearchBar
      placeholder="Search everything"
      items={searchItems}
      onSelect={(value) => console.log(value)}
    />
  );
}`);

export const globalSearchBarUsageSnippet = exampleSnippet(
  `<GlobalSearchBar placeholder="Search everything" />`,
  { imports: [globalSearchBarImport] }
);

export const globalSearchBarWithItemsSnippet = exampleSnippet(
  `<GlobalSearchBar
  placeholder="Search everything"
  items={[
    { label: "SRID-1001 — Elena Morales", value: "1001", group: "Scans" },
    { label: "My active scans", value: "scans", group: "Views" },
  ]}
  onSelect={(value) => console.log(value)}
/>`,
  { imports: [globalSearchBarImport] }
);
