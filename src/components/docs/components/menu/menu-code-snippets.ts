import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const menuImport = 'import { Menu } from "@/components/menu";';
const menuIconsImport = `import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";`;

export const menuInstallationUiSnippet = tsxSnippet(`${menuImport}
${menuIconsImport}

const items = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "/patients", icon: UsersIcon },
  { label: "Uploads", href: "/uploads", icon: UploadIcon },
  { label: "Messages", href: "/messages", icon: MessageSquareIcon },
];

export function Example() {
  return <Menu items={items} logoHref="/" />;
}`);

export const menuRealScreenSnippet = tsxSnippet(`${menuImport}
${menuIconsImport}

const items = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "/patients", icon: UsersIcon },
  { label: "Uploads", href: "/uploads", icon: UploadIcon },
  { label: "Messages", href: "/messages", icon: MessageSquareIcon },
];

export function Example() {
  return <Menu items={items} logoHref="/" />;
}`);

export const menuUsageSnippet = exampleSnippet(
  `<Menu
  logoHref="/"
  items={[
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon, active: true },
    { label: "Patients", href: "/patients", icon: UsersIcon },
    { label: "Messages", href: "/messages", icon: MessageSquareIcon },
  ]}
/>`,
  { imports: [menuImport] }
);

export const menuDefaultSnippet = exampleSnippet(
  `<Menu
  defaultExpanded
  logoHref="/"
  items={[
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon, active: true },
    { label: "Patients", href: "/patients", icon: UsersIcon },
    { label: "Uploads", href: "/uploads", icon: UploadIcon },
    { label: "Messages", href: "/messages", icon: MessageSquareIcon },
  ]}
/>`,
  { imports: [menuImport] }
);

export const menuExpandableSnippet = exampleSnippet(
  `<Menu
  logoHref="/"
  defaultExpanded
  items={[
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
    {
      label: "Patients",
      icon: UsersIcon,
      children: [
        { label: "All patients", href: "/patients" },
        { label: "New referral", href: "/patients/new" },
      ],
    },
    {
      label: "Orders",
      icon: BriefcaseMedicalIcon,
      children: [
        { label: "My orders", href: "/orders" },
        { label: "Active", href: "/orders/active" },
        { label: "Eliminated", href: "#orders-eliminated" },
      ],
    },
  ]}
/>`,
  { imports: [menuImport] }
);

export const menuMultipleOpenSnippet = exampleSnippet(
  `<Menu
  defaultExpanded
  defaultOpenGroups={["Patients", "Orders"]}
  items={expandableItems}
/>`,
  { imports: [menuImport] }
);

export const menuActiveNestedSnippet = exampleSnippet(
  `<Menu
  defaultExpanded
  items={[
    {
      label: "Patients",
      icon: UsersIcon,
      children: [
        { label: "All patients", href: "/patients", active: true },
        { label: "New referral", href: "/patients/new" },
      ],
    },
  ]}
/>`,
  { imports: [menuImport] }
);

export const menuCollapsedSnippet = exampleSnippet(
  `<Menu defaultExpanded={false} items={items} logoHref="/" />`,
  { imports: [menuImport] }
);

export const menuAccessibilitySnippet = tsxSnippet(`<aside data-slot="menu">
  <nav aria-label="Application">
    <a href="/dashboard" aria-current="page">Dashboard</a>
    <button type="button" aria-expanded="true" aria-controls="menu-submenu-patients">
      Patients
    </button>
    <ul id="menu-submenu-patients">
      <li>
        <a href="/patients/new" aria-current="page">New referral</a>
      </li>
    </ul>
  </nav>
  <button type="button" aria-expanded="true" aria-label="Collapse menu">
    Collapse
  </button>
</aside>`);
