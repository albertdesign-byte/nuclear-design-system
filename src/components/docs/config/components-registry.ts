import type { Metadata } from "next";

import type { DocsNavCategory } from "./navigation";

export const componentCategories = [
  "Inputs",
  "Navigation",
  "Feedback",
  "Data Display",
  "Overlay",
  "Layout",
] as const;

export type ComponentCategory = (typeof componentCategories)[number];
export type ComponentStatus = "stable" | "planned";

export type ComponentRegistryEntry = {
  title: string;
  href: string;
  description: string;
  status: ComponentStatus;
  aliases: string[];
  keywords: string[];
  figma: string;
  /** CSF title. Must equal `Components/{title}` when a story exists. Empty for Overview, planned, or missing stories. */
  storybook: string;
  category: ComponentCategory | "Overview";
  tokens: string[];
  accessibility: string[];
  relatedComponents: string[];
};

const OVERVIEW_HREF = "/docs/components";

function categoryId(category: ComponentCategory) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function isDocumented(entry: ComponentRegistryEntry) {
  return entry.status === "stable" && entry.href.startsWith("/");
}

export const componentsRegistry: ComponentRegistryEntry[] = [
  {
    title: "Overview",
    href: "/docs/components",
    description:
      "Canonical reusable components shared by Patients, MPF Portal, and future Medmo products.",
    status: "stable",
    aliases: ["component index", "library"],
    keywords: ["design system", "components", "form controls"],
    figma: "",
    storybook: "",
    category: "Overview",
    tokens: [],
    accessibility: [],
    relatedComponents: [],
  },
  {
    title: "Button",
    href: "/docs/components/button",
    description:
      "Se utiliza para acciones y renderiza un <button>. No se utiliza como Link ni para navegación.",
    status: "stable",
    aliases: ["CTA", "action button"],
    keywords: [
      "primary button",
      "destructive",
      "danger",
      "icon button",
      "button group",
      "form controls",
    ],
    figma: "",
    storybook: "Components/Button",
    category: "Inputs",
    tokens: [
      "--color-action-primary",
      "--space-button-icon-gap",
      "--icon-sm",
      "--focus-ring-width",
    ],
    accessibility: ["focus ring", "disabled", "aria-label", "keyboard"],
    relatedComponents: [
      "/docs/components/dropdown-menu",
      "/docs/components/alert-dialog",
    ],
  },
  {
    title: "Checkbox",
    href: "/docs/components/checkbox",
    description:
      "Binary and grouped selection controls for forms, filters, and clinical checklists.",
    status: "stable",
    aliases: ["tick box", "multi select control"],
    keywords: ["form controls", "selection", "indeterminate", "required"],
    figma: "",
    storybook: "Components/Checkbox",
    category: "Inputs",
    tokens: ["--color-action-primary", "--color-disabled-text", "--icon-sm"],
    accessibility: ["label", "keyboard", "disabled", "aria-invalid"],
    relatedComponents: [
      "/docs/components/radio-group",
      "/docs/components/switch",
      "/docs/components/label",
    ],
  },
  {
    title: "Date Picker",
    href: "/docs/components/date-picker",
    description:
      "Single date field with MM/DD/YYYY typing and an optional calendar. Used for date of birth and clinical dates.",
    status: "stable",
    aliases: ["datepicker", "calendar input", "date of birth"],
    keywords: ["form controls", "calendar", "mm/dd/yyyy", "date of birth"],
    figma: "",
    storybook: "Components/Date Picker",
    category: "Inputs",
    tokens: ["--icon-sm", "--color-action-primary", "--radius-md"],
    accessibility: ["keyboard", "focus ring", "aria-invalid", "disabled"],
    relatedComponents: [
      "/docs/components/date-range-picker",
      "/docs/components/input",
      "/docs/components/label",
      "/docs/components/field-error",
    ],
  },
  {
    title: "Date Range Picker",
    href: "/docs/components/date-range-picker",
    description:
      "Select a start and end date for scheduling, reporting, and clinical windows.",
    status: "stable",
    aliases: ["date range", "calendar range"],
    keywords: ["form controls", "calendar", "start date", "end date"],
    figma: "",
    storybook: "Components/Date Range Picker",
    category: "Inputs",
    tokens: ["--icon-sm", "--color-action-primary", "--radius-md"],
    accessibility: ["keyboard", "focus ring", "disabled", "dialog"],
    relatedComponents: [
      "/docs/components/date-picker",
      "/docs/components/input",
      "/docs/components/popover",
      "/docs/components/button",
    ],
  },
  {
    title: "Day Toggle Group",
    href: "/docs/components/day-toggle-group",
    description:
      "Select one or more weekdays for recurring availability and scheduling.",
    status: "stable",
    aliases: ["weekday picker", "day selector"],
    keywords: ["form controls", "toggle", "schedule", "availability"],
    figma: "",
    storybook: "Components/Day Toggle Group",
    category: "Inputs",
    tokens: ["--color-action-primary", "--radius-button"],
    accessibility: ["keyboard", "aria-pressed", "focus ring"],
    relatedComponents: ["/docs/components/checkbox", "/docs/components/button"],
  },
  {
    title: "Dropzone",
    href: "/docs/components/dropzone",
    description:
      "Official file upload: click to select or drag and drop. Empty, dragging, loading, success, and error states.",
    status: "stable",
    aliases: ["file upload", "upload area", "file input"],
    keywords: ["form controls", "files", "drag and drop", "attachment", "max size"],
    figma: "",
    storybook: "Components/Dropzone",
    category: "Inputs",
    tokens: ["--color-border-subtle", "--icon-md", "--color-action-primary"],
    accessibility: ["keyboard", "aria-label", "aria-busy", "disabled"],
    relatedComponents: ["/docs/components/field-error", "/docs/components/button"],
  },
  {
    title: "Input",
    href: "/docs/components/input",
    description:
      "Text and numeric fields used across Medmo forms, search, and clinical data entry.",
    status: "stable",
    aliases: ["text field", "text input"],
    keywords: ["form controls", "search", "prefix", "suffix", "helper text"],
    figma: "",
    storybook: "Components/Input",
    category: "Inputs",
    tokens: [
      "--color-border-default",
      "--color-focus-ring",
      "--icon-sm",
      "--space-inline-xs",
    ],
    accessibility: ["label", "focus ring", "aria-invalid", "disabled"],
    relatedComponents: [
      "/docs/components/label",
      "/docs/components/field-error",
      "/docs/components/textarea",
      "/docs/components/select",
      "/docs/components/dropzone",
    ],
  },
  {
    title: "Radio Group",
    href: "/docs/components/radio-group",
    description:
      "Single-choice selection for mutually exclusive clinical and administrative options.",
    status: "stable",
    aliases: ["radio button", "option group"],
    keywords: ["form controls", "single select", "choice"],
    figma: "",
    storybook: "Components/Radio Group",
    category: "Inputs",
    tokens: ["--color-action-primary", "--color-disabled-text"],
    accessibility: ["keyboard", "label", "aria-invalid", "disabled"],
    relatedComponents: [
      "/docs/components/checkbox",
      "/docs/components/select",
      "/docs/components/label",
    ],
  },
  {
    title: "Select",
    href: "/docs/components/select",
    description:
      "Single, searchable, and multi-select menus for structured form choices.",
    status: "stable",
    aliases: ["dropdown", "combobox"],
    keywords: ["form controls", "searchable", "multi select", "options"],
    figma: "",
    storybook: "Components/Select",
    category: "Inputs",
    tokens: ["--icon-sm", "--color-action-primary", "--shadow-md"],
    accessibility: ["keyboard", "focus ring", "aria-invalid", "disabled"],
    relatedComponents: [
      "/docs/components/input",
      "/docs/components/dropdown-menu",
      "/docs/components/command",
    ],
  },
  {
    title: "Switch",
    href: "/docs/components/switch",
    description:
      "Immediate on/off settings for notifications, preferences, and feature availability.",
    status: "stable",
    aliases: ["toggle", "toggle switch"],
    keywords: ["form controls", "settings", "boolean"],
    figma: "",
    storybook: "Components/Switch",
    category: "Inputs",
    tokens: ["--color-action-primary", "--color-disabled-background"],
    accessibility: ["keyboard", "aria-checked", "disabled", "label"],
    relatedComponents: ["/docs/components/checkbox", "/docs/components/label"],
  },
  {
    title: "Textarea",
    href: "/docs/components/textarea",
    description:
      "Multi-line text entry for notes, reasons, and longer clinical descriptions.",
    status: "stable",
    aliases: ["text area", "multiline input"],
    keywords: ["form controls", "notes", "comments"],
    figma: "",
    storybook: "Components/Textarea",
    category: "Inputs",
    tokens: ["--color-border-default", "--color-focus-ring"],
    accessibility: ["label", "focus ring", "aria-invalid", "disabled"],
    relatedComponents: [
      "/docs/components/input",
      "/docs/components/label",
      "/docs/components/field-error",
    ],
  },
  {
    title: "Text Link",
    href: "/docs/components/text-link",
    description: "Enlace de texto para navegación.",
    status: "stable",
    aliases: ["anchor", "inline link"],
    keywords: ["navigation", "href", "underline", "text link"],
    figma: "",
    storybook: "Components/Text Link",
    category: "Inputs",
    tokens: ["--color-text-link", "--color-disabled-text"],
    accessibility: ["focus ring", "aria-disabled", "keyboard"],
    relatedComponents: ["/docs/components/app-footer"],
  },
  {
    title: "Label",
    href: "/docs/components/label",
    description:
      "Supported primitive for visible field labels. Prefer Field composites when one exists; use Label with controls that have no Field wrapper.",
    status: "stable",
    aliases: ["field label", "form label"],
    keywords: ["form controls", "required", "caption"],
    figma: "",
    storybook: "Components/Label",
    category: "Inputs",
    tokens: ["--text-label-size", "--color-text-primary"],
    accessibility: ["label", "required", "disabled"],
    relatedComponents: [
      "/docs/components/input",
      "/docs/components/field-error",
      "/docs/components/checkbox",
    ],
  },
  {
    title: "Field Error",
    href: "/docs/components/field-error",
    description:
      "Inline validation messages that explain what is wrong and how to fix it.",
    status: "stable",
    aliases: ["error message", "validation message"],
    keywords: ["form controls", "invalid", "aria-invalid", "helper text"],
    figma: "",
    storybook: "Components/Field Error",
    category: "Inputs",
    tokens: ["--color-error-text", "--icon-sm"],
    accessibility: ["aria-invalid", "aria-describedby", "error"],
    relatedComponents: [
      "/docs/components/input",
      "/docs/components/label",
      "/docs/components/alert",
    ],
  },
  {
    title: "Calendar",
    href: "#",
    description: "Standalone calendar surface for date selection.",
    status: "planned",
    aliases: ["date calendar"],
    keywords: ["form controls", "date"],
    figma: "",
    storybook: "",
    category: "Inputs",
    tokens: [],
    accessibility: [],
    relatedComponents: ["/docs/components/date-picker", "/docs/components/date-range-picker"],
  },
  {
    title: "Attachment",
    href: "#",
    description: "Attached file chip and management pattern.",
    status: "planned",
    aliases: ["file chip"],
    keywords: ["form controls", "files"],
    figma: "",
    storybook: "",
    category: "Inputs",
    tokens: [],
    accessibility: [],
    relatedComponents: ["/docs/components/dropzone"],
  },
  {
    title: "Global Search Bar",
    href: "/docs/components/global-search-bar",
    description:
      "Application-wide search entry that opens the command palette for navigation and records.",
    status: "stable",
    aliases: ["app search", "command search"],
    keywords: ["search", "command palette", "navigation", "shortcut"],
    figma: "",
    storybook: "Components/Global Search Bar",
    category: "Navigation",
    tokens: ["--icon-sm", "--color-text-muted", "--shadow-lg"],
    accessibility: ["keyboard", "aria-label", "focus ring"],
    relatedComponents: [
      "/docs/components/command",
      "/docs/components/input",
    ],
  },
  {
    title: "Command",
    href: "/docs/components/command",
    description:
      "Command palette for keyboard-first search, navigation, and actions.",
    status: "stable",
    aliases: ["command palette", "cmdk"],
    keywords: ["search", "navigation", "shortcut", "dialog"],
    figma: "",
    storybook: "Components/Command",
    category: "Navigation",
    tokens: ["--shadow-lg", "--icon-sm", "--z-modal"],
    accessibility: ["keyboard", "dialog", "aria-label"],
    relatedComponents: [
      "/docs/components/global-search-bar",
      "/docs/components/dialog",
    ],
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "In-page navigation between related views without leaving the current context.",
    status: "stable",
    aliases: ["tab list", "tab bar"],
    keywords: ["navigation", "sections", "views"],
    figma: "",
    storybook: "Components/Tabs",
    category: "Navigation",
    tokens: ["--color-action-primary", "--color-border-subtle"],
    accessibility: ["keyboard", "aria-selected", "focus ring"],
    relatedComponents: [
      "/docs/components/accordion",
      "/docs/components/separator",
    ],
  },
  {
    title: "Accordion",
    href: "/docs/components/accordion",
    description:
      "Expandable sections for dense content such as FAQs, details, and nested settings.",
    status: "stable",
    aliases: ["disclosure", "collapsible"],
    keywords: ["navigation", "expand", "collapse"],
    figma: "",
    storybook: "Components/Accordion",
    category: "Navigation",
    tokens: ["--icon-sm", "--color-border-subtle"],
    accessibility: ["keyboard", "aria-expanded"],
    relatedComponents: ["/docs/components/tabs", "/docs/components/separator"],
  },
  {
    title: "App Footer",
    href: "/docs/components/app-footer",
    description:
      "Product footer with branding, legal links, and secondary navigation.",
    status: "stable",
    aliases: ["site footer", "page footer"],
    keywords: ["navigation", "branding", "legal"],
    figma: "",
    storybook: "Components/App Footer",
    category: "Navigation",
    tokens: ["--color-surface", "--color-text-link", "--space-page"],
    accessibility: ["keyboard", "focus ring"],
    relatedComponents: [
      "/docs/components/logo",
      "/docs/components/text-link",
    ],
  },
  {
    title: "Breadcrumb",
    href: "#",
    description: "Hierarchical location trail for nested product screens.",
    status: "planned",
    aliases: ["path trail"],
    keywords: ["navigation"],
    figma: "",
    storybook: "",
    category: "Navigation",
    tokens: [],
    accessibility: [],
    relatedComponents: ["/docs/components/text-link"],
  },
  {
    title: "Alert",
    href: "/docs/components/alert",
    description:
      "Inline status messages for success, warning, error, and informational feedback.",
    status: "stable",
    aliases: ["banner", "inline alert"],
    keywords: ["feedback", "error", "warning", "success", "info"],
    figma: "",
    storybook: "Components/Alert",
    category: "Feedback",
    tokens: [
      "--color-error-background",
      "--color-warning-background",
      "--color-success-background",
      "--icon-sm",
    ],
    accessibility: ["role=alert", "aria-live"],
    relatedComponents: [
      "/docs/components/sonner",
      "/docs/components/field-error",
      "/docs/components/alert-dialog",
    ],
  },
  {
    title: "Sonner",
    href: "/docs/components/sonner",
    description:
      "Transient toast notifications for completed actions and background updates.",
    status: "stable",
    aliases: ["toast", "snackbar"],
    keywords: ["feedback", "notification", "success", "error"],
    figma: "",
    storybook: "Components/Sonner",
    category: "Feedback",
    tokens: ["--shadow-lg", "--icon-sm"],
    accessibility: ["aria-live", "keyboard"],
    relatedComponents: ["/docs/components/alert", "/docs/components/spinner"],
  },
  {
    title: "Spinner",
    href: "/docs/components/spinner",
    description:
      "Loading indicator for in-progress actions, page regions, and async fetches.",
    status: "stable",
    aliases: ["loader", "loading indicator"],
    keywords: ["feedback", "loading", "progress"],
    figma: "",
    storybook: "Components/Spinner",
    category: "Feedback",
    tokens: ["--icon-md", "--color-action-primary"],
    accessibility: ["aria-busy", "aria-label"],
    relatedComponents: [
      "/docs/components/skeleton",
      "/docs/components/button",
    ],
  },
  {
    title: "Skeleton",
    href: "/docs/components/skeleton",
    description:
      "Placeholder loading shapes that preserve layout while content resolves.",
    status: "stable",
    aliases: ["placeholder", "shimmer"],
    keywords: ["feedback", "loading", "layout"],
    figma: "",
    storybook: "Components/Skeleton",
    category: "Feedback",
    tokens: ["--color-surface-muted", "--radius-md"],
    accessibility: ["aria-busy"],
    relatedComponents: ["/docs/components/spinner", "/docs/components/card"],
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "Short contextual hints for icon-only controls and truncated labels.",
    status: "stable",
    aliases: ["hint", "hover tip"],
    keywords: ["feedback", "overlay", "help"],
    figma: "",
    storybook: "Components/Tooltip",
    category: "Feedback",
    tokens: ["--shadow-md", "--color-text-primary"],
    accessibility: ["aria-describedby", "keyboard", "focus ring"],
    relatedComponents: [
      "/docs/components/button",
      "/docs/components/popover",
    ],
  },
  {
    title: "Bubble",
    href: "#",
    description: "Conversation or annotation bubble for threaded content.",
    status: "planned",
    aliases: ["chat bubble"],
    keywords: ["feedback"],
    figma: "",
    storybook: "",
    category: "Feedback",
    tokens: [],
    accessibility: [],
    relatedComponents: ["/docs/components/alert"],
  },
  {
    title: "Avatar",
    href: "/docs/components/avatar",
    description:
      "Compact identity mark for users, clinicians, and organizations.",
    status: "stable",
    aliases: ["profile photo", "user avatar"],
    keywords: ["identity", "initials", "image"],
    figma: "",
    storybook: "Components/Avatar",
    category: "Data Display",
    tokens: ["--radius-full", "--color-surface-muted"],
    accessibility: ["alt", "aria-hidden"],
    relatedComponents: [
      "/docs/components/user-profile-block",
      "/docs/components/badge",
    ],
  },
  {
    title: "Badge",
    href: "/docs/components/badge",
    description:
      "Compact status and count labels for records, filters, and metadata.",
    status: "stable",
    aliases: ["tag", "status pill"],
    keywords: ["status", "count", "metadata"],
    figma: "",
    storybook: "Components/Badge",
    category: "Data Display",
    tokens: ["--color-success-background", "--radius-full"],
    accessibility: ["text alternative"],
    relatedComponents: [
      "/docs/components/chip",
      "/docs/components/stage-flow-badge",
    ],
  },
  {
    title: "Card",
    href: "/docs/components/card",
    description:
      "Grouped content surface for summaries, lists, and operational modules.",
    status: "stable",
    aliases: ["panel", "tile"],
    keywords: ["surface", "section", "summary"],
    figma: "",
    storybook: "Components/Card",
    category: "Data Display",
    tokens: ["--color-surface", "--shadow-sm", "--radius-lg", "--space-card"],
    accessibility: ["heading", "keyboard"],
    relatedComponents: [
      "/docs/components/dashboard-panel",
      "/docs/components/timeline-card",
    ],
  },
  {
    title: "Chip",
    href: "/docs/components/chip",
    description:
      "Compact, dismissible or selectable labels for filters and selected values.",
    status: "stable",
    aliases: ["token", "filter chip"],
    keywords: ["filter", "selection", "dismiss"],
    figma: "",
    storybook: "Components/Chip",
    category: "Data Display",
    tokens: ["--radius-full", "--icon-xs", "--color-surface-muted"],
    accessibility: ["keyboard", "aria-label"],
    relatedComponents: ["/docs/components/badge", "/docs/components/select"],
  },
  {
    title: "Table",
    href: "/docs/components/table",
    description:
      "Primitive table markup for dense clinical and operational data.",
    status: "stable",
    aliases: ["data grid primitive"],
    keywords: ["rows", "columns", "tabular"],
    figma: "",
    storybook: "Components/Table",
    category: "Data Display",
    tokens: ["--space-table", "--color-border-subtle"],
    accessibility: ["table headers", "caption"],
    relatedComponents: ["/docs/components/data-table", "/docs/components/badge"],
  },
  {
    title: "Data Table",
    href: "/docs/components/data-table",
    description:
      "Interactive table with sorting, selection, and operational row actions.",
    status: "stable",
    aliases: ["data grid", "advanced table"],
    keywords: ["sort", "select", "rows", "columns"],
    figma: "",
    storybook: "Components/Data Table",
    category: "Data Display",
    tokens: ["--space-table", "--icon-sm", "--color-border-subtle"],
    accessibility: ["keyboard", "row selection", "table headers"],
    relatedComponents: [
      "/docs/components/table",
      "/docs/components/checkbox",
      "/docs/components/dropdown-menu",
    ],
  },
  {
    title: "Timeline",
    href: "/docs/components/timeline",
    description:
      "Chronological sequence of events for referrals, studies, and case history.",
    status: "stable",
    aliases: ["activity feed", "event list"],
    keywords: ["history", "events", "status"],
    figma: "",
    storybook: "Components/Timeline",
    category: "Data Display",
    tokens: ["--color-border-subtle", "--icon-sm"],
    accessibility: ["list", "time"],
    relatedComponents: [
      "/docs/components/timeline-card",
      "/docs/components/badge",
    ],
  },
  {
    title: "Timeline Card",
    href: "/docs/components/timeline-card",
    description:
      "A single timeline event presented as a scannable operational card.",
    status: "stable",
    aliases: ["event card"],
    keywords: ["history", "status", "timestamp"],
    figma: "",
    storybook: "Components/Timeline Card",
    category: "Data Display",
    tokens: ["--color-surface", "--space-card"],
    accessibility: ["heading", "time"],
    relatedComponents: ["/docs/components/timeline", "/docs/components/card"],
  },
  {
    title: "Stage Flow Badge",
    href: "/docs/components/stage-flow-badge",
    description:
      "Visual stage marker for multi-step operational and clinical workflows.",
    status: "stable",
    aliases: ["workflow badge", "stage indicator"],
    keywords: ["status", "progress", "workflow"],
    figma: "",
    storybook: "Components/Stage Flow Badge",
    category: "Data Display",
    tokens: ["--color-action-primary", "--radius-full"],
    accessibility: ["text alternative"],
    relatedComponents: ["/docs/components/badge", "/docs/components/timeline"],
  },
  {
    title: "Deposit Summary",
    href: "/docs/components/deposit-summary",
    description:
      "Payment deposit breakdown used in booking and billing summaries.",
    status: "stable",
    aliases: ["payment summary"],
    keywords: ["billing", "deposit", "amount"],
    figma: "",
    storybook: "Components/Deposit Summary",
    category: "Data Display",
    tokens: ["--color-surface", "--text-title-size"],
    accessibility: ["definition list"],
    relatedComponents: [
      "/docs/components/payment-form",
      "/docs/components/card",
    ],
  },
  {
    title: "Payment Form",
    href: "/docs/components/payment-form",
    description:
      "Structured payment capture for deposits and outstanding balances.",
    status: "stable",
    aliases: ["checkout form", "billing form"],
    keywords: ["billing", "card", "form controls"],
    figma: "",
    storybook: "Components/Payment Form",
    category: "Data Display",
    tokens: ["--color-border-default", "--space-stack-sm"],
    accessibility: ["label", "keyboard", "aria-invalid"],
    relatedComponents: [
      "/docs/components/deposit-summary",
      "/docs/components/input",
      "/docs/components/button",
    ],
  },
  {
    title: "Dialog",
    href: "/docs/components/dialog",
    description:
      "Modal overlay for focused tasks that do not require a destructive confirmation.",
    status: "stable",
    aliases: ["modal", "overlay dialog"],
    keywords: ["dialog", "overlay", "modal"],
    figma: "",
    storybook: "Components/Dialog",
    category: "Overlay",
    tokens: ["--shadow-xl", "--z-modal", "--space-dialog"],
    accessibility: ["focus trap", "escape", "aria-labelledby", "dialog"],
    relatedComponents: [
      "/docs/components/alert-dialog",
      "/docs/components/popover",
    ],
  },
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "Blocking confirmation for destructive or irreversible actions.",
    status: "stable",
    aliases: ["confirm dialog", "destructive dialog"],
    keywords: ["dialog", "destructive", "confirm", "overlay"],
    figma: "",
    storybook: "Components/Alert Dialog",
    category: "Overlay",
    tokens: ["--shadow-xl", "--z-modal", "--color-error-text"],
    accessibility: ["focus trap", "escape", "alertdialog"],
    relatedComponents: [
      "/docs/components/dialog",
      "/docs/components/button",
      "/docs/components/alert",
    ],
  },
  {
    title: "Dropdown Menu",
    href: "/docs/components/dropdown-menu",
    description:
      "Action menu for overflow, row, and page-level commands, including destructive items.",
    status: "stable",
    aliases: ["overflow menu", "action menu"],
    keywords: ["menu", "destructive", "overlay", "actions"],
    figma: "",
    storybook: "Components/Dropdown Menu",
    category: "Overlay",
    tokens: ["--shadow-md", "--icon-sm", "--color-error-text"],
    accessibility: ["keyboard", "aria-disabled", "data-disabled", "focus ring"],
    relatedComponents: [
      "/docs/components/button",
      "/docs/components/popover",
      "/docs/components/alert-dialog",
    ],
  },
  {
    title: "Popover",
    href: "/docs/components/popover",
    description:
      "Non-modal floating panel for pickers, filters, and lightweight editing.",
    status: "stable",
    aliases: ["floating panel"],
    keywords: ["overlay", "filter", "picker"],
    figma: "",
    storybook: "Components/Popover",
    category: "Overlay",
    tokens: ["--shadow-md", "--z-popover"],
    accessibility: ["keyboard", "escape", "focus ring"],
    relatedComponents: [
      "/docs/components/dropdown-menu",
      "/docs/components/tooltip",
      "/docs/components/dialog",
    ],
  },
  {
    title: "Logo",
    href: "/docs/components/logo",
    description:
      "Medmo wordmark and mark used in headers, footers, and empty states.",
    status: "stable",
    aliases: ["wordmark", "brand mark"],
    keywords: ["branding", "layout"],
    figma: "",
    storybook: "Components/Logo",
    category: "Layout",
    tokens: ["--color-action-primary"],
    accessibility: ["alt", "aria-label"],
    relatedComponents: ["/docs/components/app-footer"],
  },
  {
    title: "Dashboard Panel",
    href: "/docs/components/dashboard-panel",
    description:
      "Operational dashboard module for metrics, queues, and summaries.",
    status: "stable",
    aliases: ["dashboard module", "widget"],
    keywords: ["layout", "metrics", "overview"],
    figma: "",
    storybook: "Components/Dashboard Panel",
    category: "Layout",
    tokens: ["--color-surface", "--space-card", "--shadow-sm"],
    accessibility: ["heading"],
    relatedComponents: ["/docs/components/card"],
  },
  {
    title: "Scroll Area",
    href: "/docs/components/scroll-area",
    description:
      "Contained scrolling region for long lists, menus, and nested panels.",
    status: "stable",
    aliases: ["overflow container"],
    keywords: ["layout", "overflow", "scroll"],
    figma: "",
    storybook: "Components/Scroll Area",
    category: "Layout",
    tokens: ["--color-border-subtle"],
    accessibility: ["keyboard"],
    relatedComponents: [
      "/docs/components/separator",
      "/docs/components/command",
    ],
  },
  {
    title: "Separator",
    href: "/docs/components/separator",
    description:
      "Visual divider for grouping related content in layouts and menus.",
    status: "stable",
    aliases: ["divider", "rule"],
    keywords: ["layout", "group"],
    figma: "",
    storybook: "Components/Separator",
    category: "Layout",
    tokens: ["--color-border-subtle"],
    accessibility: ["presentation"],
    relatedComponents: [
      "/docs/components/scroll-area",
      "/docs/components/dropdown-menu",
    ],
  },
  {
    title: "User Profile Block",
    href: "/docs/components/user-profile-block",
    description:
      "Compact identity block combining avatar, name, and supporting metadata.",
    status: "stable",
    aliases: ["profile block", "user cell"],
    keywords: ["layout", "identity", "header"],
    figma: "",
    storybook: "Components/User Profile Block",
    category: "Layout",
    tokens: ["--space-inline-sm", "--text-label-size"],
    accessibility: ["heading", "alt"],
    relatedComponents: ["/docs/components/avatar"],
  },
  {
    title: "Aspect Ratio",
    href: "#",
    description: "Constrained media frame for images and previews.",
    status: "planned",
    aliases: ["media frame"],
    keywords: ["layout"],
    figma: "",
    storybook: "",
    category: "Layout",
    tokens: [],
    accessibility: [],
    relatedComponents: ["/docs/components/card"],
  },
];

export function getComponentEntry(href: string) {
  const normalized = href.replace(/\/$/, "") || "/";
  return componentsRegistry.find((item) => item.href === normalized);
}

export function getDocumentedComponents() {
  return componentsRegistry.filter(isDocumented);
}

export function getComponentNeighbors(href: string) {
  const normalized = href.replace(/\/$/, "") || "/";
  const documented = getDocumentedComponents();
  const index = documented.findIndex((item) => item.href === normalized);

  if (index === -1) {
    return {};
  }

  return {
    previous: documented[index - 1],
    next: documented[index + 1],
  };
}

export function getComponentNavCategories(): DocsNavCategory[] {
  const overview = getComponentEntry(OVERVIEW_HREF);

  return [
    {
      id: "components-overview",
      title: "Components",
      items: overview
        ? [{ title: overview.title, href: overview.href }]
        : [],
    },
    ...componentCategories.map((category) => ({
      id: categoryId(category),
      title: category,
      items: componentsRegistry
        .filter((item) => item.category === category)
        .map((item) => ({
          title: item.title,
          href: item.href,
          comingSoon: item.status === "planned" || item.href === "#",
        })),
    })),
  ];
}

export function getComponentSearchText(item: ComponentRegistryEntry) {
  return [
    item.title,
    item.description,
    item.category,
    ...item.aliases,
    ...item.keywords,
    ...item.tokens,
    ...item.accessibility,
    ...(item.storybook ? [item.storybook] : []),
  ].join(" ");
}

export function hasPublishedStorybook(entry: ComponentRegistryEntry | undefined) {
  return Boolean(entry?.storybook);
}

export function componentMatchesQuery(
  item: ComponentRegistryEntry,
  query: string
) {
  return getComponentSearchText(item)
    .toLowerCase()
    .includes(query.trim().toLowerCase());
}

export function getComponentSearchEntries() {
  return getDocumentedComponents().map((item) => ({
    label: item.title,
    value: item.href,
    group: item.category === "Overview" ? "Components" : item.category,
    searchText: getComponentSearchText(item),
  }));
}

export function getComponentMetadata(href: string): Metadata {
  const item = getComponentEntry(href);

  return {
    title: item?.title ?? "Components",
    description: item?.description ?? "",
  };
}
