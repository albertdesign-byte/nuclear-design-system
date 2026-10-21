import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

export const appShellInstallationUiSnippet = tsxSnippet(`import { AppShell } from "@/components/app-shell";
import { Menu } from "@/components/menu";
import { AppHeader } from "@/components/app-header";

export function Example() {
  return (
    <AppShell
      sidebar={<Menu items={[]} />}
      header={<AppHeader title="Dashboard" />}
    >
      {/* Main content */}
    </AppShell>
  );
}`);

export const appShellRealScreenSnippet = tsxSnippet(`import { AppShell } from "@/components/app-shell";
import { Menu } from "@/components/menu";
import { AppHeader } from "@/components/app-header";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { UserProfileBlock } from "@/components/user-profile-block";

export function Example() {
  return (
    <AppShell
      sidebar={<Menu items={sidebarItems} logoHref="/" />}
      header={
        <AppHeader
          title="Dashboard"
          search={<GlobalSearchBar items={searchItems} />}
          actions={<UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />}
        />
      }
    >
      {/* Dashboard content */}
    </AppShell>
  );
}`);

export const appShellUsageSnippet = exampleSnippet(
  `<AppShell sidebar={<Menu items={items} />} header={<AppHeader title="Dashboard" />}>
  {children}
</AppShell>`,
  { imports: ['import { AppShell } from "@/components/app-shell";'] }
);

export const appShellNavigationSnippet = exampleSnippet(
  `<AppShell
  sidebar={<Menu items={items} logoHref="/" />}
  header={<AppHeader title="Dashboard" />}
>
  {children}
</AppShell>`,
  { imports: ['import { Menu } from "@/components/menu";'] }
);
