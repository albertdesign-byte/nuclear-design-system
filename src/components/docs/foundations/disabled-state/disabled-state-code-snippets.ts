import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

export const disabledStylesImportSnippet = tsxSnippet(`import {
  controlDisabledClassName,
  menuItemDisabledClassName,
  textLinkDisabledClassName,
} from "@/lib/disabled-styles";`);

export const disabledButtonSnippet = exampleSnippet(
  `<Button disabled>Continue</Button>`,
  { imports: [`import { Button } from "@/components/button";`] }
);

export const nativeDisabledButtonSnippet = exampleSnippet(
  `<Button disabled>Submit referral</Button>`,
  { imports: [`import { Button } from "@/components/button";`] }
);

export const ariaDisabledLinkSnippet = tsxSnippet(`<a
  href="/patients/123"
  aria-disabled="true"
  onClick={(event) => event.preventDefault()}
>
  View patient record
</a>`);

export const ariaDisabledWithoutGuardSnippet = tsxSnippet(`<a
  href="/patients/123"
  aria-disabled="true"
>
  View patient record
</a>
// Anti-pattern: aria-disabled announces state but does not block navigation.`);

export const dataDisabledMenuItemSnippet = exampleSnippet(
  `<DropdownMenu>
  <DropdownMenuButton>Study actions</DropdownMenuButton>
  <DropdownMenuContent>
    <DropdownMenuItem disabled>Delete study</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  {
    imports: [
      `import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dropdown-menu";`,
    ],
  }
);

export const disabledInputSnippet = exampleSnippet(
  `<Input disabled defaultValue="Read only value" />`,
  { imports: [`import { Input } from "@/components/input";`] }
);

export const disabledTextLinkSnippet = exampleSnippet(
  `<TextLink href="/patients" disabled>
  View patient record
</TextLink>`,
  { imports: [`import { TextLink } from "@/components/text-link";`] }
);
