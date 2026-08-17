import {
  nuclearUserflowNavCategories,
  nuclearUserflowNavDefaultOpenCategories,
} from "./userflow-navigation";
import { getComponentNavCategories } from "./components-registry";
import { foundationsRegistry } from "./foundations-registry";
import { getPatternNavCategories } from "./patterns-registry";
import { getTemplateNavCategory } from "./templates-registry";

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
  { title: "Foundations", href: "/docs/foundations" },
  { title: "Components", href: "/docs/components" },
  { title: "Patterns", href: "/docs/patterns" },
  { title: "Templates", href: "/docs/templates" },
  { title: "Products", href: "/docs/products" },
  { title: "Installation", href: "/docs/components/button#installation" },
  { title: "Theming", href: "/docs/components/button#usage" },
];

export const foundationsNavCategory: DocsNavCategory = {
  id: "foundations",
  title: "Foundations",
  items: foundationsRegistry.map(({ title, href }) => ({ title, href })),
};

export const patternsNavCategories: DocsNavCategory[] =
  getPatternNavCategories();

export const templatesNavCategory: DocsNavCategory = getTemplateNavCategory();

export const componentsNavCategories: DocsNavCategory[] =
  getComponentNavCategories();

export const docsComponentCategories: DocsNavCategory[] =
  componentsNavCategories.filter(
    (category) => category.id !== "components-overview"
  );

export const foundationsNavCategories: DocsNavCategory[] = [
  foundationsNavCategory,
];


export const templatesNavCategories: DocsNavCategory[] = [
  templatesNavCategory,
];

/**
 * Aggregate documentation index retained for global search and legacy imports.
 * Layer-specific sidebars consume the dedicated arrays above.
 */
export const docsNavCategories: DocsNavCategory[] = [
  ...foundationsNavCategories,
  ...componentsNavCategories,
  ...patternsNavCategories,
  ...templatesNavCategories,
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
  { id: "padding-review", label: "Padding Review" },
  { id: "variants", label: "Variants" },
  { id: "danger", label: "Danger Button" },
  { id: "icons", label: "Button with Icon" },
  { id: "button-groups", label: "Button Groups" },
  { id: "states", label: "States" },
  { id: "healthcare-examples", label: "Healthcare Examples" },
  { id: "guidelines", label: "Button Guidelines" },
  { id: "accessibility", label: "Accessibility" },
  { id: "full-width", label: "Full Width" },
  { id: "as-link", label: "As Link" },
  { id: "api-reference", label: "API Reference" },
];

export const inputTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "default", label: "Default" },
  { id: "required", label: "Required" },
  { id: "disabled", label: "Disabled" },
  { id: "error", label: "Error" },
  { id: "read-only", label: "Read Only" },
  { id: "loading", label: "Loading" },
  { id: "with-icon", label: "Input with Icon" },
  { id: "prefix-suffix", label: "Prefix & Suffix" },
  { id: "units-input", label: "Units Input" },
  { id: "helper-text", label: "Helper Text" },
  { id: "size", label: "Size" },
  { id: "full-width", label: "Full Width" },
  { id: "file", label: "File" },
  { id: "guidelines", label: "Input Guidelines" },
  { id: "accessibility", label: "Accessibility" },
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
  { id: "default", label: "Default" },
  { id: "required", label: "Required" },
  { id: "disabled", label: "Disabled" },
  { id: "error", label: "Error" },
  { id: "read-only", label: "Read Only" },
  { id: "loading", label: "Loading" },
  { id: "helper-text", label: "Helper Text" },
  { id: "searchable-select", label: "Searchable Select" },
  { id: "multi-select", label: "Multi Select" },
  { id: "grouped-options", label: "Grouped Options" },
  { id: "large-datasets", label: "Large Datasets" },
  { id: "size", label: "Size" },
  { id: "full-width", label: "Full Width" },
  { id: "guidelines", label: "Select Guidelines" },
  { id: "accessibility", label: "Accessibility" },
  { id: "api-reference", label: "API Reference" },
];

export const checkboxTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "default", label: "Default" },
  { id: "checked", label: "Checked" },
  { id: "disabled", label: "Disabled" },
  { id: "error", label: "Error" },
  { id: "indeterminate", label: "Indeterminate" },
  { id: "with-label", label: "With Label" },
  { id: "with-description", label: "With Description" },
  { id: "with-long-label", label: "Long Label" },
  { id: "with-helper-text", label: "Helper Text" },
  { id: "checkbox-group", label: "Checkbox Group" },
  { id: "size", label: "Size" },
  { id: "guidelines", label: "Checkbox Guidelines" },
  { id: "accessibility", label: "Accessibility" },
  { id: "api-reference", label: "API Reference" },
];

export const radioGroupTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "default", label: "Default" },
  { id: "selected", label: "Selected" },
  { id: "disabled", label: "Disabled" },
  { id: "selected-disabled", label: "Selected Disabled" },
  { id: "error", label: "Error" },
  { id: "with-label", label: "With Label" },
  { id: "with-description", label: "With Description" },
  { id: "with-long-label", label: "Long Label" },
  { id: "radio-group", label: "Radio Group" },
  { id: "size", label: "Size" },
  { id: "horizontal", label: "Horizontal" },
  { id: "guidelines", label: "Radio Button Guidelines" },
  { id: "accessibility", label: "Accessibility" },
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
  { id: "audit", label: "Card Audit" },
  { id: "variants", label: "Card Variants" },
  { id: "content-flexibility", label: "Content Flexibility" },
  { id: "responsive-behavior", label: "Responsive Behavior" },
  { id: "healthcare-examples", label: "Healthcare Examples" },
  { id: "accessibility", label: "Accessibility" },
  { id: "card-guidelines", label: "Card Guidelines" },
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
  { id: "overview", label: "Component Overview" },
  { id: "usage", label: "Usage" },
  { id: "dialog-examples", label: "Dialog Examples" },
  { id: "dialog-vs-alert-dialog", label: "Dialog vs Alert Dialog" },
  { id: "accessibility", label: "Accessibility" },
  { id: "best-practices", label: "Best Practices" },
  { id: "api-reference", label: "API Reference" },
];

export const tooltipTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "placement", label: "Positions" },
  { id: "trigger-types", label: "Trigger Types" },
  { id: "content", label: "Tooltip Content" },
  { id: "healthcare-examples", label: "Healthcare Examples" },
  { id: "accessibility", label: "Accessibility" },
  { id: "tooltip-guidelines", label: "Tooltip Guidelines" },
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
  { id: "variants", label: "Variants" },
  { id: "states", label: "Menu States" },
  { id: "menu-content", label: "Menu Content" },
  { id: "dangerous-actions", label: "Dangerous Actions" },
  { id: "healthcare-examples", label: "Healthcare Examples" },
  { id: "accessibility", label: "Accessibility" },
  { id: "dropdown-guidelines", label: "Dropdown Menu Guidelines" },
  { id: "api-reference", label: "API Reference" },
];

export const alertTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "audit", label: "Alert Audit" },
  { id: "unified-alert", label: "Unified Alert" },
  { id: "variants", label: "Alert Variants" },
  { id: "patterns", label: "Alert Patterns" },
  { id: "states", label: "Alert States" },
  { id: "healthcare-examples", label: "Healthcare Examples" },
  { id: "guidelines", label: "Alert Guidelines" },
  { id: "accessibility", label: "Accessibility" },
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
  { id: "component-audit", label: "Component Audit" },
  { id: "decision", label: "Decision" },
  { id: "command-use-cases", label: "Command Use Cases" },
  { id: "search-vs-command", label: "Search vs Command" },
  { id: "dialog", label: "Dialog" },
  { id: "accessibility", label: "Accessibility" },
  { id: "api-reference", label: "API Reference" },
];

export const alertDialogTocItems = [
  { id: "installation", label: "Installation" },
  { id: "overview", label: "Component Overview" },
  { id: "usage", label: "Usage" },
  { id: "alert-dialog-examples", label: "Alert Dialog Examples" },
  { id: "dialog-vs-alert-dialog", label: "Dialog vs Alert Dialog" },
  { id: "accessibility", label: "Accessibility" },
  { id: "best-practices", label: "Best Practices" },
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
  { id: "branding", label: "Branding and Logo" },
  { id: "navigation", label: "Footer Navigation" },
  { id: "interaction-states", label: "Interaction States" },
  { id: "responsive-behavior", label: "Responsive Behavior" },
  { id: "accessibility", label: "Accessibility" },
  { id: "footer-guidelines", label: "Footer Guidelines" },
  { id: "default-variant", label: "Default Variant" },
  { id: "api-reference", label: "API Reference" },
];

export const dataTableTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "plain-header", label: "Plain Header" },
  { id: "menu-header", label: "Menu Header" },
  { id: "resizable-columns", label: "Resizable Columns" },
  { id: "link-cell", label: "Link Cell" },
  { id: "filter-row", label: "Filter Row" },
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
  { id: "component-audit", label: "Component Audit" },
  { id: "decision", label: "Decision" },
  { id: "search-examples", label: "Search Examples" },
  { id: "search-vs-command", label: "Search vs Command" },
  { id: "accessibility", label: "Accessibility" },
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
