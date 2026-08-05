import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const appFooterImport = 'import { AppFooter } from "@/components/app-footer";';

export const appFooterInstallationUiSnippet = tsxSnippet(`${appFooterImport}

export function Example() {
  return <AppFooter variant="patients" device="mobile" />;
}`);

export const appFooterRealScreenSnippet = tsxSnippet(`${appFooterImport}

export function Example() {
  return (
    <div className="flex min-h-[24rem] flex-col">
      <main className="flex-1 p-6">Patient intake content</main>
      <AppFooter variant="patients" device="mobile" />
    </div>
  );
}`);

export const appFooterUsageSnippet = exampleSnippet(
  `<AppFooter variant="patients" device="mobile" />`,
  { imports: [appFooterImport] }
);

export const appFooterMobileSnippet = exampleSnippet(
  `<AppFooter variant="patients" device="mobile" />`,
  { imports: [appFooterImport] }
);

export const appFooterTabletSnippet = exampleSnippet(
  `<AppFooter variant="patients" device="tablet" />`,
  { imports: [appFooterImport] }
);

export const appFooterCustomLinksSnippet = exampleSnippet(
  `<AppFooter
  variant="default"
  device="desktop"
  links={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]}
/>`,
  { imports: [appFooterImport] }
);
