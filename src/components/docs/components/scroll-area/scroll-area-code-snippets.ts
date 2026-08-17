import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const scrollAreaImport = 'import { ScrollArea } from "@/components/scroll-area";';

export const scrollAreaInstallationUiSnippet = tsxSnippet(`${scrollAreaImport}

export function Example() {
  return (
    <ScrollArea className="h-32 rounded-md border">
      <div className="space-y-2 p-3">
        {Array.from({ length: 8 }, (_, index) => (
          <p key={index} className="text-sm">Item {index + 1}</p>
        ))}
      </div>
    </ScrollArea>
  );
}`);

export const scrollAreaRealScreenSnippet = tsxSnippet(`${scrollAreaImport}

const medications = [
  "Metformin 850 mg — every 12 h",
  "Losartan 50 mg — every 24 h",
  "Atorvastatin 20 mg — every 24 h",
];

export function Example() {
  return (
    <ScrollArea className="h-40">
      <ul className="divide-y pr-3">
        {medications.map((item) => (
          <li key={item} className="py-2 text-sm">{item}</li>
        ))}
      </ul>
    </ScrollArea>
  );
}`);

export const scrollAreaUsageSnippet = exampleSnippet(
  `<ScrollArea className="h-48 rounded-md border">
  <div className="p-3">Long content…</div>
</ScrollArea>`,
  { imports: [scrollAreaImport] }
);

export const scrollAreaHorizontalSnippet = exampleSnippet(
  `<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex w-max gap-3 p-3">
    <span>Item A</span>
    <span>Item B</span>
    <span>Item C</span>
  </div>
</ScrollArea>`,
  { imports: [scrollAreaImport] }
);
