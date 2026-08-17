import { cssSnippet, exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

export const iconsLibrarySnippet = tsxSnippet(`import { SearchIcon, UsersIcon } from "lucide-react";

export function Example() {
  return (
    <>
      <SearchIcon className="size-[var(--icon-sm)]" aria-hidden />
      <UsersIcon className="size-[var(--icon-sm)]" aria-hidden />
    </>
  );
}`);

export const iconButtonSnippet = exampleSnippet(
  `<Button variant="outline" size="icon-md" aria-label="Notifications">
  <BellIcon className="size-[var(--icon-sm)]" />
</Button>`,
  {
    imports: [
      `import { BellIcon } from "lucide-react";`,
      `import { Button } from "@/components/button";`,
    ],
  }
);

export const buttonWithIconSnippet = exampleSnippet(
  `<Button size="sm">
  <UploadIcon className="size-[var(--icon-sm)]" aria-hidden />
  Upload study
</Button>`,
  {
    imports: [
      `import { UploadIcon } from "lucide-react";`,
      `import { Button } from "@/components/button";`,
    ],
  }
);

export const inputWithIconSnippet = exampleSnippet(
  `<div className="relative">
  <SearchIcon
    className="pointer-events-none absolute top-1/2 left-[var(--space-inline-sm)] size-[var(--icon-sm)] -translate-y-1/2 text-[var(--color-text-muted)]"
    aria-hidden
  />
  <Input
    className="pl-[calc(var(--space-inline-sm)+var(--icon-sm)+var(--space-inline-xs))]"
    placeholder="Search patients"
  />
</div>`,
  {
    imports: [
      `import { SearchIcon } from "lucide-react";`,
      `import { Input } from "@/components/input";`,
    ],
  }
);

export const navigationItemWithIconSnippet = exampleSnippet(
  `<a
  href="/reports"
  className="inline-flex items-center gap-[var(--space-inline-sm)] text-[var(--color-text-primary)]"
>
  <ClipboardListIcon className="size-[var(--icon-sm)]" aria-hidden />
  Reports
</a>`,
  {
    imports: [`import { ClipboardListIcon } from "lucide-react";`],
  }
);

export const iconSizesCssSnippet = cssSnippet(
  `.search-icon {
  width: var(--icon-sm);
  height: var(--icon-sm);
  color: currentColor;
}`
);
