import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const popoverImport = `import { Button } from "@/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";`;

export const popoverInstallationUiSnippet = tsxSnippet(`${popoverImport}

export function Example() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Supporting details appear here.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`);

export const popoverRealScreenSnippet = tsxSnippet(`${popoverImport}
import { InfoIcon } from "lucide-react";

export function Example() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <InfoIcon />
        Lisinopril 10 mg
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Lisinopril 10 mg</PopoverTitle>
          <PopoverDescription>
            ACE inhibitor for hypertension. Take once daily in the morning.
            Monitor potassium and renal function.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`);

export const popoverUsageSnippet = exampleSnippet(
  `<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>
    Open popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Supporting details.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`,
  { imports: [popoverImport] }
);

export const popoverSideSnippet = exampleSnippet(
  `<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm" />}>
    Top
  </PopoverTrigger>
  <PopoverContent side="top">Content above trigger</PopoverContent>
</Popover>`,
  { imports: [popoverImport] }
);
