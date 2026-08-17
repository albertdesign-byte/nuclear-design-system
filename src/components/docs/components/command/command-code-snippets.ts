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
  CommandShortcut,
} from "@/components/command";`;

const iconImport =
  'import { FileTextIcon, SettingsIcon, UploadIcon, UserPlusIcon } from "lucide-react";';

const commandMarkup = `<Command className="max-w-md rounded-lg border">
  <CommandInput placeholder="Type a command or action…" />
  <CommandList>
    <CommandEmpty>No commands found.</CommandEmpty>
    <CommandGroup heading="Quick Actions">
      <CommandItem value="create patient">
        <UserPlusIcon aria-hidden />
        Create Patient
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem value="upload study">
        <UploadIcon aria-hidden />
        Upload Study
        <CommandShortcut>⌘U</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandGroup heading="Navigation">
      <CommandItem value="open settings">
        <SettingsIcon aria-hidden />
        Open Settings
      </CommandItem>
      <CommandItem value="navigate reports">
        <FileTextIcon aria-hidden />
        Navigate to Reports
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

export const commandInstallationUiSnippet = tsxSnippet(`${commandImport}
${iconImport}

export function Example() {
  return (
    ${commandMarkup}
  );
}`);

export const commandRealScreenSnippet = tsxSnippet(`"use client";

import { useState } from "react";
${commandImport}
${iconImport}

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open command palette</Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Command Palette"
        description="Run an action or navigate across Medmo"
      >
        ${commandMarkup}
      </CommandDialog>
    </>
  );
}`);

export const commandUsageSnippet = exampleSnippet(commandMarkup, {
  imports: [`${commandImport}\n${iconImport}`],
});

export const commandDialogSnippet = exampleSnippet(
  `<CommandDialog
  open={open}
  onOpenChange={setOpen}
  title="Command Palette"
  description="Run an action or navigate across Medmo"
>
  ${commandMarkup}
</CommandDialog>`,
  { imports: [`import { useState } from "react";\n${commandImport}\n${iconImport}`] }
);
