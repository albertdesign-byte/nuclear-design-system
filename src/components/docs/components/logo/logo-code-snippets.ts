import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const brandImport = 'import { MedmoLogo, MedmoLogoLockup } from "@/components/brand";';

export const logoInstallationUiSnippet = tsxSnippet(`${brandImport}

export function Example() {
  return <MedmoLogoLockup />;
}`);

export const logoRealScreenSnippet = tsxSnippet(`${brandImport}

export function Example() {
  return (
    <header className="flex items-center border-b px-6 py-4">
      <MedmoLogoLockup />
    </header>
  );
}`);

export const logoUsageSnippet = exampleSnippet(`<MedmoLogo className="size-8" />`, {
  imports: [brandImport],
});

export const logoLockupSnippet = exampleSnippet(`<MedmoLogoLockup />`, {
  imports: [brandImport],
});
