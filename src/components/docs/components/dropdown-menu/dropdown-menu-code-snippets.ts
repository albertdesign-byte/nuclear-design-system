import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dropdownMenuImport = `import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";`;

export const dropdownMenuInstallationUiSnippet = tsxSnippet(`${dropdownMenuImport}

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        Actions
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Patient</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View chart</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`);

export const dropdownMenuRealScreenSnippet = tsxSnippet(`${dropdownMenuImport}
import { MoreHorizontalIcon } from "lucide-react";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon-sm" />}>
        <MoreHorizontalIcon />
        <span className="sr-only">Patient actions</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>María González</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View chart</DropdownMenuItem>
        <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Archive patient</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`);

export const dropdownMenuUsageSnippet = exampleSnippet(
  `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
    Actions
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>View chart</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  { imports: [dropdownMenuImport] }
);

export const dropdownMenuDestructiveSnippet = exampleSnippet(
  `<DropdownMenuItem variant="destructive">Archive patient</DropdownMenuItem>`,
  { imports: [dropdownMenuImport] }
);
