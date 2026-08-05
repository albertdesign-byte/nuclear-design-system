import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const textLinkImport = `import { TextLink } from "@/components/text-link";`;

export const textLinkInstallationUiSnippet = tsxSnippet(`${textLinkImport}

export function Example() {
  return <TextLink href="/scans/1001">SRID-1001</TextLink>;
}`);

export const textLinkRealScreenSnippet = tsxSnippet(`${textLinkImport}

export function Example() {
  return (
    <div className="flex flex-wrap gap-[var(--space-inline-md)]">
      <TextLink href="/scans/1001">SRID-1001</TextLink>
      <TextLink href="/patients/elena-morales">Elena Morales</TextLink>
    </div>
  );
}`);

export const textLinkUsageSnippet = exampleSnippet(
  `<TextLink href="/scans/1001">SRID-1001</TextLink>`,
  { imports: [textLinkImport] }
);

const textLinkInTableImport = `${textLinkImport}
import { DataTableLinkCell } from "@/components/data-table";`;

export const textLinkInTableSnippet = exampleSnippet(
  `<DataTableLinkCell href="/scans/1001">SRID-1001</DataTableLinkCell>`,
  { imports: [textLinkInTableImport] }
);
