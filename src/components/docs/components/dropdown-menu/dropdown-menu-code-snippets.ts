import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dropdownMenuImport = `import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconButton,
  DropdownMenuItem,
  DropdownMenuItemDescription,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/dropdown-menu";`;

export const dropdownMenuInstallationUiSnippet = tsxSnippet(`${dropdownMenuImport}

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuButton size="sm">Patient actions</DropdownMenuButton>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Patient</DropdownMenuLabel>
          <DropdownMenuItem>View chart</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`);

export const dropdownMenuRealScreenSnippet = tsxSnippet(`${dropdownMenuImport}

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuIconButton aria-label="Open patient actions" />
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Maria Gonzalez</DropdownMenuLabel>
          <DropdownMenuItem>View chart</DropdownMenuItem>
          <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="danger">Archive patient</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`);

export const dropdownMenuUsageSnippet = exampleSnippet(
  `<DropdownMenu>
  <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>View chart</DropdownMenuItem>
      <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuVariantsSnippet = exampleSnippet(
  `<DropdownMenuButton size="sm">Default</DropdownMenuButton>
<DropdownMenuButton size="sm" disabled>Disabled</DropdownMenuButton>
<DropdownMenuButton size="sm">
  <UserIcon data-icon="inline-start" />
  With icon
</DropdownMenuButton>`,
  {
    imports: [
      dropdownMenuImport,
      `import { UserIcon } from "lucide-react";`,
    ],
  }
);

export const dropdownMenuDescriptionsSnippet = exampleSnippet(
  `<DropdownMenuItem>
  <span>
    Finalize report
    <DropdownMenuItemDescription>
      Lock findings and notify the care team
    </DropdownMenuItemDescription>
  </span>
</DropdownMenuItem>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuStatesSnippet = exampleSnippet(
  `<DropdownMenu>
  <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>View details</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
  <DropdownMenuButton size="sm" disabled>Actions</DropdownMenuButton>
</DropdownMenu>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuContentSnippet = exampleSnippet(
  `<DropdownMenuGroup>
  <DropdownMenuLabel>Study workflow</DropdownMenuLabel>
  <DropdownMenuItem>Assign reader</DropdownMenuItem>
  <DropdownMenuItem>Mark urgent</DropdownMenuItem>
</DropdownMenuGroup>
<DropdownMenuSeparator />
<DropdownMenuGroup>
  <DropdownMenuItem>Export study</DropdownMenuItem>
</DropdownMenuGroup>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuDangerSnippet = exampleSnippet(
  `<DropdownMenuGroup>
  <DropdownMenuItem variant="danger">Delete report</DropdownMenuItem>
  <DropdownMenuItem variant="danger">Archive patient</DropdownMenuItem>
  <DropdownMenuItem variant="danger">Remove user</DropdownMenuItem>
</DropdownMenuGroup>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuHealthcareSnippet = exampleSnippet(
  `<DropdownMenu>
  <DropdownMenuIconButton aria-label="Open study actions" />
  <DropdownMenuContent align="end">
    <DropdownMenuGroup>
      <DropdownMenuLabel>Study actions</DropdownMenuLabel>
      <DropdownMenuItem>Open study</DropdownMenuItem>
      <DropdownMenuItem>Assign reader</DropdownMenuItem>
      <DropdownMenuItem>Download DICOM</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuAccessibilitySnippet = tsxSnippet(`${dropdownMenuImport}

export function AccessibleMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuIconButton aria-label="Open patient actions" />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>View chart</DropdownMenuItem>
          <DropdownMenuItem disabled>Export unavailable</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`);
