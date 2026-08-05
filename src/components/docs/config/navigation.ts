import {
  nuclearUserflowNavCategories,
  nuclearUserflowNavDefaultOpenCategories,
} from "./userflow-navigation";

export type DocsNavItem = {
  title: string;
  href: string;
  badge?: boolean;
  comingSoon?: boolean;
};

export type DocsNavCategory = {
  id: string;
  title: string;
  items: DocsNavItem[];
};

export const docsSections: DocsNavItem[] = [
  { title: "Introduction", href: "/" },
  { title: "Components", href: "/docs/components/button" },
  { title: "Products", href: "/docs/products/nuclear" },
  { title: "Userflow", href: "/docs/userflow/nuclear" },
  { title: "Installation", href: "/docs/components/button#installation" },
  { title: "Theming", href: "/docs/components/button#usage" },
];

export const foundationsNavCategory: DocsNavCategory = {
  id: "foundations",
  title: "Foundations",
  items: [
    { title: "Colors", href: "#", comingSoon: true },
    { title: "Typography", href: "#", comingSoon: true },
    { title: "Spacing", href: "#", comingSoon: true },
    { title: "Radius", href: "#", comingSoon: true },
    { title: "Shadows", href: "#", comingSoon: true },
    { title: "Breakpoints", href: "#", comingSoon: true },
  ],
};

export const patternsNavCategory: DocsNavCategory = {
  id: "patterns",
  title: "Patterns",
  items: [
    { title: "Forms", href: "#", comingSoon: true },
    { title: "Navigation", href: "#", comingSoon: true },
    { title: "Data Display", href: "#", comingSoon: true },
    { title: "Feedback", href: "#", comingSoon: true },
  ],
};

export const docsComponentCategories: DocsNavCategory[] = [
  {
    id: "form-controls",
    title: "Form Controls",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Button Group", href: "/docs/components/button#button-group" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Date Range Picker", href: "/docs/components/date-range-picker" },
      { title: "Day Toggle Group", href: "/docs/components/day-toggle-group" },
      { title: "Deposit Summary", href: "/docs/components/deposit-summary" },
      { title: "Dropzone", href: "/docs/components/dropzone" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Field Error", href: "/docs/components/field-error" },
      { title: "Payment Form", href: "/docs/components/payment-form" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Textarea", href: "/docs/components/textarea" },
    ],
  },
  {
    id: "display",
    title: "Display",
    items: [
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Chip", href: "/docs/components/chip" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Stage Flow Badge", href: "/docs/components/stage-flow-badge" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Timeline", href: "/docs/components/timeline" },
      { title: "Timeline Card", href: "/docs/components/timeline-card" },
    ],
  },
  {
    id: "overlay",
    title: "Overlay & Menus",
    items: [
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Command", href: "/docs/components/command" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    id: "layout-feedback",
    title: "Layout & Feedback",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sonner", href: "/docs/components/sonner" },
    ],
  },
  {
    id: "application-layout",
    title: "Application Layout",
    items: [
      { title: "App Shell", href: "/docs/components/app-shell" },
      { title: "Logo", href: "/docs/components/logo" },
      { title: "App Footer", href: "/docs/components/app-footer" },
      { title: "Data Table", href: "/docs/components/data-table" },
      { title: "Dashboard Panel", href: "/docs/components/dashboard-panel" },
      { title: "Global Search Bar", href: "/docs/components/global-search-bar" },
      { title: "User Profile Block", href: "/docs/components/user-profile-block" },
      { title: "Text Link", href: "/docs/components/text-link" },
    ],
  },
  {
    id: "planned",
    title: "Planned",
    items: [
      { title: "Aspect Ratio", href: "#" },
      { title: "Attachment", href: "#", badge: true },
      { title: "Breadcrumb", href: "#" },
      { title: "Bubble", href: "#", badge: true },
      { title: "Calendar", href: "#" },
    ],
  },
];

export const docsNavCategories: DocsNavCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: docsSections,
  },
  foundationsNavCategory,
  ...docsComponentCategories,
  patternsNavCategory,
];

export const docsNavDefaultOpenCategories = docsNavCategories.map(
  (category) => category.id
);

export const userflowNavCategories = nuclearUserflowNavCategories;

export const userflowNavDefaultOpenCategories = nuclearUserflowNavDefaultOpenCategories;

/** Flat list — useful for search. */
export const docsUserflows = userflowNavCategories.flatMap(
  (category) => category.items
);

/** Flat list — useful for search / legacy references. */
export const docsComponents = docsComponentCategories.flatMap(
  (category) => category.items
);

export const buttonTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "primary", label: "Primary" },
  { id: "outline", label: "Outline" },
  { id: "secondary", label: "Secondary" },
  { id: "ghost", label: "Ghost" },
  { id: "danger", label: "Danger" },
  { id: "icon", label: "Icon" },
  { id: "with-icon", label: "With Icon" },
  { id: "loading", label: "Loading" },
  { id: "full-width", label: "Full Width" },
  { id: "button-group", label: "Button Group" },
  { id: "as-link", label: "As Link" },
  { id: "api-reference", label: "API Reference" },
];

export const inputTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "field-group", label: "Field Group" },
  { id: "placeholder", label: "Placeholder" },
  { id: "full-width", label: "Full Width" },
  { id: "file", label: "File" },
  { id: "api-reference", label: "API Reference" },
];

export const textareaTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "placeholder", label: "Placeholder" },
  { id: "full-width", label: "Full Width" },
  { id: "api-reference", label: "API Reference" },
];

export const selectTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "placeholder", label: "Placeholder" },
  { id: "full-width", label: "Full Width" },
  { id: "api-reference", label: "API Reference" },
];

export const checkboxTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "checked", label: "Checked" },
  { id: "indeterminate", label: "Indeterminate" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "with-label", label: "With Label" },
  { id: "api-reference", label: "API Reference" },
];

export const radioGroupTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "with-label", label: "With Label" },
  { id: "horizontal", label: "Horizontal" },
  { id: "api-reference", label: "API Reference" },
];

export const switchTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "checked", label: "Checked" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "with-label", label: "With Label" },
  { id: "api-reference", label: "API Reference" },
];

export const badgeTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "default", label: "Default" },
  { id: "secondary", label: "Secondary" },
  { id: "destructive", label: "Destructive" },
  { id: "outline", label: "Outline" },
  { id: "ghost", label: "Ghost" },
  { id: "link", label: "Link" },
  { id: "api-reference", label: "API Reference" },
];

export const avatarTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "image", label: "Image" },
  { id: "fallback", label: "Fallback" },
  { id: "badge", label: "Badge" },
  { id: "group", label: "Group" },
  { id: "api-reference", label: "API Reference" },
];

export const cardTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "header", label: "Header" },
  { id: "content", label: "Content" },
  { id: "footer", label: "Footer" },
  { id: "action", label: "Action" },
  { id: "api-reference", label: "API Reference" },
];

export const tableTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "caption", label: "Caption" },
  { id: "footer", label: "Footer" },
  { id: "api-reference", label: "API Reference" },
];

export const tabsTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "default", label: "Segmented" },
  { id: "line", label: "Line" },
  { id: "folder", label: "Folder" },
  { id: "vertical", label: "Vertical" },
  { id: "api-reference", label: "API Reference" },
];

export const dialogTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "with-footer", label: "With Footer" },
  { id: "without-close", label: "Without Close" },
  { id: "api-reference", label: "API Reference" },
];

export const tooltipTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "side", label: "Side" },
  { id: "provider", label: "Provider" },
  { id: "api-reference", label: "API Reference" },
];

export const scrollAreaTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "horizontal", label: "Horizontal" },
  { id: "api-reference", label: "API Reference" },
];

export const separatorTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "vertical", label: "Vertical" },
  { id: "api-reference", label: "API Reference" },
];

export const skeletonTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "card", label: "Card" },
  { id: "api-reference", label: "API Reference" },
];

export const spinnerTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "inline", label: "Inline" },
  { id: "api-reference", label: "API Reference" },
];

export const sonnerTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "success", label: "Success" },
  { id: "loading", label: "Loading" },
  { id: "provider", label: "Provider" },
  { id: "api-reference", label: "API Reference" },
];

export const labelTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "disabled", label: "Disabled" },
  { id: "invalid", label: "Invalid" },
  { id: "api-reference", label: "API Reference" },
];

export const fieldErrorTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "field-group", label: "Field Group" },
  { id: "with-icon", label: "With Icon" },
  { id: "api-reference", label: "API Reference" },
];

export const popoverTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "side", label: "Side" },
  { id: "api-reference", label: "API Reference" },
];

export const dropdownMenuTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "destructive", label: "Destructive" },
  { id: "api-reference", label: "API Reference" },
];

export const alertTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "destructive", label: "Destructive" },
  { id: "success", label: "Success" },
  { id: "api-reference", label: "API Reference" },
];

export const depositSummaryTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const paymentFormTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const dropzoneTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "error", label: "Error" },
  { id: "api-reference", label: "API Reference" },
];

export const dayToggleGroupTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "disabled", label: "Disabled" },
  { id: "custom-days", label: "Custom Days" },
  { id: "api-reference", label: "API Reference" },
];

export const commandTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "dialog", label: "Dialog" },
  { id: "api-reference", label: "API Reference" },
];

export const alertDialogTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const accordionTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const chipTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const stageFlowBadgeTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

export const timelineTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "deprecated", label: "Deprecated wrapper" },
  { id: "api-reference", label: "API Reference" },
];

export const timelineCardTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "priority", label: "Priority" },
  { id: "api-reference", label: "API Reference" },
];

export const appShellTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "sidebar", label: "App Sidebar" },
  { id: "header", label: "App Header" },
  { id: "example", label: "Dashboard Example" },
  { id: "api-reference", label: "API Reference" },
];

export const logoTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "lockup", label: "Lockup" },
  { id: "api-reference", label: "API Reference" },
];

export const appFooterTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "mobile", label: "Mobile" },
  { id: "tablet", label: "Tablet" },
  { id: "custom-links", label: "Custom Links" },
  { id: "api-reference", label: "API Reference" },
];

export const dataTableTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "plain-header", label: "Plain Header" },
  { id: "menu-header", label: "Menu Header" },
  { id: "resizable-columns", label: "Resizable Columns" },
  { id: "link-cell", label: "Link Cell" },
  { id: "row-count-footer", label: "Row Count Footer" },
  { id: "full-example", label: "Full Example" },
  { id: "api-reference", label: "API Reference" },
];

export const dashboardPanelTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "with-content", label: "With Content" },
  { id: "full-example", label: "Full Example" },
  { id: "api-reference", label: "API Reference" },
];

export const globalSearchBarTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "with-items", label: "With Items" },
  { id: "full-example", label: "Full Example" },
  { id: "api-reference", label: "API Reference" },
];

export const userProfileBlockTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "with-settings", label: "With Settings" },
  { id: "full-example", label: "Full Example" },
  { id: "api-reference", label: "API Reference" },
];

export const dateRangePickerTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "controlled", label: "Controlled" },
  { id: "api-reference", label: "API Reference" },
];

export const textLinkTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "in-table", label: "In Table" },
  { id: "full-example", label: "Full Example" },
  { id: "api-reference", label: "API Reference" },
];
