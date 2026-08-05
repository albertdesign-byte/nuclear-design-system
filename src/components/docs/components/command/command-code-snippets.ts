import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const commandImport = `import { Button } from "@/components/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";`;

export const commandInstallationUiSnippet = tsxSnippet(`${commandImport}

export function Example() {
  return (
    <Command className="max-w-md rounded-lg border">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Patients">
          <CommandItem>María González</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`);

export const commandRealScreenSnippet = tsxSnippet(`${commandImport}
import { UserIcon } from "lucide-react";

export function Example() {
  return (
    <CommandDialog open title="Search patients" description="Find by name or MRN">
      <Command>
        <CommandInput placeholder="Search patients…" />
        <CommandList>
          <CommandEmpty>No patients found.</CommandEmpty>
          <CommandGroup heading="Patients">
            <CommandItem value="maria">
              <UserIcon />
              María González
              <span className="text-muted-foreground">MRN-48291</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}`);

export const commandUsageSnippet = exampleSnippet(
  `<Command className="max-w-md rounded-lg border">
  <CommandInput placeholder="Search patients…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Patients">
      <CommandItem>María González</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  { imports: [commandImport] }
);

export const commandDialogSnippet = exampleSnippet(
  `<CommandDialog open onOpenChange={setOpen} title="Search patients">
  <Command>
    <CommandInput placeholder="Search patients…" />
    <CommandList>
      <CommandItem>María González</CommandItem>
    </CommandList>
  </Command>
</CommandDialog>`,
  { imports: [`import { useState } from "react";\n${commandImport}`] }
);
