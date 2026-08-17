import {
  exampleSnippet,
  tsxSnippet,
} from "@/components/docs/primitives/docs-code-snippet";

const appFooterImport = 'import { AppFooter } from "@/components/app-footer";';

export const appFooterInstallationUiSnippet = tsxSnippet(`${appFooterImport}

export function Example() {
  return <AppFooter variant="patients" device="desktop" />;
}`);

export const appFooterRealScreenSnippet = tsxSnippet(`${appFooterImport}

export function PatientIntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <AppFooter variant="patients" device="desktop" />
    </div>
  );
}`);

export const appFooterUsageSnippet = exampleSnippet(
  `<AppFooter variant="patients" device="desktop" />`,
  { imports: [appFooterImport] }
);

export const appFooterLogoSnippet = exampleSnippet(
  `<AppFooter
  variant="patients"
  logoHref="https://medmo.com/"
/>`,
  { imports: [appFooterImport] }
);

export const appFooterNavigationSnippet = tsxSnippet(`${appFooterImport}

// The Patients variant includes the approved groups:
// About Medmo, Contact Us, Resources, and Support.
export function Example() {
  return <AppFooter variant="patients" device="desktop" />;
}`);

export const appFooterStatesSnippet = tsxSnippet(`// All Footer links use the same interaction contract:
// hover: visible underline and surface change
// focus-visible: high-contrast ring with offset
// active: stronger surface and persistent underline
// External destinations also announce “opens in new tab”.`);

export const appFooterResponsiveSnippet = tsxSnippet(`${appFooterImport}

export function ResponsiveExamples() {
  return (
    <>
      <AppFooter variant="patients" device="mobile" />
      <AppFooter variant="patients" device="tablet" />
      <AppFooter variant="patients" device="desktop" />
    </>
  );
}`);

export const appFooterAccessibilitySnippet = tsxSnippet(`<footer>
  <a
    href="https://medmo.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Medmo website (opens in new tab)"
  >
    {/* MedmoLogoLockup is decorative inside this named link */}
  </a>

  <nav aria-label="Footer navigation">
    {/* Visible link text identifies every destination. */}
  </nav>
</footer>`);

export const appFooterCustomLinksSnippet = exampleSnippet(
  `<AppFooter
  variant="default"
  device="desktop"
  links={[
    {
      label: "Privacy Policy",
      href: "https://medmo.com/privacy",
      external: true,
    },
    {
      label: "Contact Us",
      href: "https://medmo.com/contact",
      external: true,
    },
  ]}
/>`,
  { imports: [appFooterImport] }
);
