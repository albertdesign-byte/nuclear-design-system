import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

export const appShellInstallationUiSnippet = tsxSnippet(`import { AppShell } from "@/components/app-shell";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export function Example() {
  return (
    <AppShell
      sidebar={<AppSidebar items={[]} />}
      header={<AppHeader title="Dashboard" />}
    >
      {/* Main content */}
    </AppShell>
  );
}`);

export const appShellRealScreenSnippet = tsxSnippet(`import { AppShell } from "@/components/app-shell";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { UserProfileBlock } from "@/components/user-profile-block";

export function Example() {
  return (
    <AppShell
      sidebar={<AppSidebar items={sidebarItems} logoHref="/" />}
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
  `<AppShell sidebar={<AppSidebar items={items} />} header={<AppHeader title="Dashboard" />}>
  {children}
</AppShell>`,
  { imports: ['import { AppShell } from "@/components/app-shell";'] }
);

export const appSidebarSnippet = exampleSnippet(
  `<AppSidebar
  logoHref="/"
  items={[
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon, active: true },
    { label: "Patients", href: "/patients", icon: UsersIcon },
    { label: "Messages", href: "/messages", icon: MessageSquareIcon },
  ]}
  defaultExpanded={false}
  onExpandedChange={(expanded) => console.log(expanded)}
/>`,
  { imports: ['import { AppSidebar } from "@/components/app-sidebar";'] }
);
