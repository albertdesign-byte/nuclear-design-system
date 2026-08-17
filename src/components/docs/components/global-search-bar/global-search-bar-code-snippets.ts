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

export const searchPatientsSnippet = exampleSnippet(
  `<GlobalSearchBar
  placeholder="Search patients"
  dialogTitle="Search patients"
  dialogDescription="Find a patient by name or MRN"
  items={[
    { label: "Elena Morales · MRN 104829", value: "patient-elena", group: "Patients" },
    { label: "Marcus Lee · MRN 104912", value: "patient-marcus", group: "Patients" },
  ]}
  emptyMessage="No patients found."
  shortcutEnabled={false}
/>`,
  { imports: [globalSearchBarImport] }
);

export const searchStudiesSnippet = exampleSnippet(
  `<GlobalSearchBar
  placeholder="Search studies"
  dialogTitle="Search studies"
  dialogDescription="Find a study by description or SRID"
  items={[
    { label: "MRI brain without contrast · SRID-2841", value: "study-2841", group: "Studies" },
    { label: "CT chest with contrast · SRID-2904", value: "study-2904", group: "Studies" },
  ]}
  emptyMessage="No studies found."
  shortcutEnabled={false}
/>`,
  { imports: [globalSearchBarImport] }
);

export const searchFacilitiesSnippet = exampleSnippet(
  `<GlobalSearchBar
  placeholder="Search facilities"
  dialogTitle="Search facilities"
  dialogDescription="Find an imaging facility"
  items={[
    { label: "Medmo General Hospital", value: "facility-general", group: "Facilities" },
    { label: "Downtown Imaging Clinic", value: "facility-downtown", group: "Facilities" },
  ]}
  emptyMessage="No facilities found."
  shortcutEnabled={false}
/>`,
  { imports: [globalSearchBarImport] }
);
