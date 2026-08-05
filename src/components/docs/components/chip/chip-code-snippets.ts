import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const chipImport = 'import { Chip } from "@/components/chip";';

export const chipInstallationUiSnippet = tsxSnippet(`${chipImport}

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip>MRI Brain</Chip>
      <Chip variant="outline">Prior Auth</Chip>
    </div>
  );
}`);

export const chipRealScreenSnippet = tsxSnippet(`${chipImport}

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip onRemove={() => {}}>MRI Brain</Chip>
      <Chip variant="outline" onRemove={() => {}}>
        Prior Auth
      </Chip>
      <Chip variant="muted">Stat</Chip>
    </div>
  );
}`);

export const chipUsageSnippet = exampleSnippet(
  `<Chip onRemove={() => setTags(tags.filter((t) => t !== tag))}>
  {tag}
</Chip>`,
  { imports: [chipImport] }
);
