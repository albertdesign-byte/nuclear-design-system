import type { Metadata } from "next";

import type { DocsNavCategory } from "./navigation";

export const patternCategories = [
  "Navigation",
  "Forms",
  "Feedback",
  "Data Display",
  "Search",
] as const;

export type PatternCategory = (typeof patternCategories)[number];

export type PatternSection = {
  id: string;
  title: string;
  aliases: string[];
  keywords: string[];
};

export type PatternComponentRef = {
  name: string;
  href?: string;
};

export type PatternVariation = {
  name: string;
  description: string;
  screens?: string[];
};

export type PatternProductExample = {
  title: string;
  href: string;
  product: "Patients" | "MPF Portal";
};

export type PatternRegistryEntry = {
  title: string;
  href: string;
  description: string;
  aliases: string[];
  keywords: string[];
  category: PatternCategory | "Overview";
  relatedPatterns: string[];
  relatedComponents: string[];
  /** CSF title. Empty or omitted when no Patterns/* story exists yet. */
  storybook?: string;
  componentsUsed: PatternComponentRef[];
  purpose: string;
  whenToUse: string[];
  structure: string[];
  variations: PatternVariation[];
  accessibility: string[];
  productExamples: PatternProductExample[];
  sections: PatternSection[];
};

const OVERVIEW_HREF = "/docs/patterns";

function categoryId(category: PatternCategory) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

const standardSections: PatternSection[] = [
  {
    id: "purpose",
    title: "Purpose",
    aliases: ["intent"],
    keywords: ["purpose", "why"],
  },
  {
    id: "when-to-use",
    title: "When to use",
    aliases: ["usage"],
    keywords: ["when", "use", "do not"],
  },
  {
    id: "structure",
    title: "Structure",
    aliases: ["anatomy"],
    keywords: ["structure", "slots", "order"],
  },
  {
    id: "components-used",
    title: "Components used",
    aliases: ["building blocks"],
    keywords: ["components"],
  },
  {
    id: "variations",
    title: "Variations",
    aliases: ["variants"],
    keywords: ["variations", "mobile", "desktop"],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    aliases: ["a11y"],
    keywords: ["accessibility", "keyboard", "aria"],
  },
  {
    id: "product-examples",
    title: "Real product examples",
    aliases: ["examples", "product screens"],
    keywords: ["patients", "mpf portal", "userflow"],
  },
];

function isDocumented(entry: PatternRegistryEntry) {
  return entry.href.startsWith("/docs/patterns");
}

export const patternsRegistry: PatternRegistryEntry[] = [
  {
    title: "Overview",
    href: OVERVIEW_HREF,
    description:
      "Recurring layouts and interaction compositions extracted from Patients and MPF Portal screens.",
    aliases: ["pattern index", "pattern library"],
    keywords: ["design system", "patterns", "patients", "mpf portal"],
    category: "Overview",
    relatedPatterns: [],
    relatedComponents: [],
    storybook: "Patterns/Overview",
    componentsUsed: [],
    purpose:
      "Patterns document compositions that already repeat on published Patients and MPF Portal screens. They are not new UI components.",
    whenToUse: [],
    structure: [],
    variations: [],
    accessibility: [],
    productExamples: [],
    sections: [],
  },
  {
    title: "Patients intake chrome",
    href: "/docs/patterns/patients-intake-chrome",
    description:
      "Brand header, locale, desktop progress, and Patients footer that frame every intake step.",
    aliases: ["patients shell", "intake frame", "intake shell"],
    keywords: [
      "patients",
      "header",
      "locale",
      "progress",
      "footer",
      "logo",
    ],
    category: "Navigation",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/operational-app-chrome",
    ],
    relatedComponents: [
      "/docs/components/logo",
      "/docs/components/app-footer",
    ],
    storybook: "Patterns/Patients intake chrome",
    componentsUsed: [
      { name: "MultiStepFlowLayout", href: "/docs/templates/multi-step-flow-layout" },
      { name: "MultiStepFlowLayoutHeader" },
      { name: "MultiStepFlowLayoutLocale" },
      { name: "MultiStepFlowLayoutProgress" },
      { name: "MultiStepFlowLayoutMain" },
      { name: "MultiStepFlowLayoutMainDesktop" },
      { name: "MedmoLogoLockup", href: "/docs/components/logo" },
      { name: "AppFooter", href: "/docs/components/app-footer" },
    ],
    purpose:
      "Frame every Patients intake step with brand, locale, progress (desktop), and legal/support footer so the flow feels like one product, not a stack of unrelated forms.",
    whenToUse: [
      "Use MultiStepFlowLayout for any guided multi-step process: Patient Intake, Provider Onboarding, Clinic Registration, Radiology Workflow, Insurance Enrollment, or similar.",
      "Patients screens compose this Nuclear template with Patients copy, validation, routing, and AppFooter variant=\"patients\".",
      "Do not use on MPF Portal operational screens — those use AppShell and Operational app chrome.",
    ],
    structure: [
      "MultiStepFlowLayout on a muted surface.",
      "Header: Medmo lockup at the start, locale at the end. Desktop adds a globe on locale and a progress bar under the header.",
      "Main: padded column. Desktop content is centered at a 42rem max width.",
      "AppFooter variant=\"patients\" (brand, about, contact, copyright).",
    ],
    variations: [
      {
        name: "Mobile",
        description: "No progress bar. Locale without globe.",
      },
      {
        name: "Desktop",
        description:
          "Progress under the header, globe on locale, narrower centered column.",
      },
      {
        name: "Progress value",
        description:
          "The chrome only displays progress. Each step owns its value.",
      },
    ],
    accessibility: [
      "Shell main is a main landmark; the header is a header.",
      "Progress is a progressbar with aria-valuenow from 0 to 100.",
      "Footer links include privacy and contact; keep them reachable after the step actions.",
      "Locale is currently text, not a language control — do not present it as a menu until it is one.",
    ],
    productExamples: [
      {
        title: "Date of Birth",
        href: "/docs/userflow/patients/date-of-birth",
        product: "Patients",
      },
      {
        title: "Welcome",
        href: "/docs/userflow/patients/welcome",
        product: "Patients",
      },
      {
        title: "Availability",
        href: "/docs/userflow/patients/availability",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Patients step",
    href: "/docs/patterns/patients-step",
    description:
      "One question or task per screen: Back, title and helper, answer, full-width Continue.",
    aliases: ["intake step", "multi-step question"],
    keywords: [
      "back",
      "continue",
      "patients",
      "intro",
      "xxl button",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-intake-chrome",
      "/docs/patterns/form-field-patterns",
      "/docs/patterns/optional-skip",
      "/docs/patterns/exclusive-choice",
    ],
    relatedComponents: ["/docs/components/button"],
    storybook: "Patterns/Patients step",
    componentsUsed: [
      { name: "Button", href: "/docs/components/button" },
      { name: "MultiStepFlowLayoutCard" },
      { name: "MultiStepFlowLayoutInputPanel" },
    ],
    purpose:
      "One question or task per screen: go back, understand why, answer, continue. Continue is always the same primary control.",
    whenToUse: [
      "Use for every Patients intake screen that asks the patient to act and move forward.",
      "Pair with Patients intake chrome. Pair field steps with Form field, Exclusive choice, Multi-select choice, or Document upload.",
    ],
    structure: [
      "Back — ghost sm button, chevron left, label “Back” (omitted on Date of Birth).",
      "Intro — one h1 at title size; optional muted helper; optional semibold emphasis line.",
      "Body — fields in MultiStepFlowLayoutCard and/or MultiStepFlowLayoutInputPanel.",
      "Continue — Button primary, size xxl, fullWidth. Disabled until the step is valid, unless the step is optional.",
    ],
    variations: [
      {
        name: "Packed",
        description:
          "Intro, fields, and Continue share one card (especially on mobile).",
        screens: [
          "Date of Birth",
          "Insurance",
          "Insurance Card",
          "Prescription",
          "Deposit",
        ],
      },
      {
        name: "Split",
        description: "Intro card, then input panel, then Continue outside.",
        screens: [
          "Email",
          "Home Address",
          "Availability",
          "COVID",
          "Assistance",
          "Share Results",
          "Mammogram",
          "Height and Weight",
          "General Question",
          "Follow-up details",
        ],
      },
      {
        name: "Orientation",
        description:
          "No fields; checklist and inset list. Primary label is “Start” on mobile.",
        screens: ["Welcome"],
      },
      {
        name: "Required",
        description: "Continue disabled until the step is valid.",
        screens: ["Most steps"],
      },
      {
        name: "Optional",
        description:
          "Continue always enabled, or enabled when empty. See Optional skip.",
      },
    ],
    accessibility: [
      "One h1 per step; helper is not a second heading.",
      "Back must be a real button, not a text link, so it is a consistent history control.",
      "Disabled Continue is not the only error signal — pair with FieldError and aria-invalid when the user has entered invalid data.",
      "Full-width xxl Continue meets the 44px touch target used on Patients mobile.",
    ],
    productExamples: [
      {
        title: "Date of Birth",
        href: "/docs/userflow/patients/date-of-birth",
        product: "Patients",
      },
      {
        title: "Email",
        href: "/docs/userflow/patients/email",
        product: "Patients",
      },
      {
        title: "COVID Screening",
        href: "/docs/userflow/patients/covid",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Form field",
    href: "/docs/patterns/form-field-patterns",
    description:
      "Visible label, control, optional helper, and optional inline error. Placeholders never replace the label.",
    aliases: ["Form Field Patterns", "field stack", "input label"],
    keywords: [
      "label",
      "helper",
      "validation",
      "placeholder",
      "aria-invalid",
      "field error",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/exclusive-choice",
      "/docs/patterns/multi-select-choice",
      "/docs/patterns/follow-up-details",
    ],
    relatedComponents: [
      "/docs/components/label",
      "/docs/components/input",
      "/docs/components/textarea",
      "/docs/components/select",
      "/docs/components/field-error",
      "/docs/components/checkbox",
      "/docs/components/radio-group",
    ],
    storybook: "Patterns/Form field",
    componentsUsed: [
      { name: "Label", href: "/docs/components/label" },
      { name: "Input", href: "/docs/components/input" },
      { name: "Textarea", href: "/docs/components/textarea" },
      { name: "DatePicker" },
      { name: "Select", href: "/docs/components/select" },
      { name: "FieldError", href: "/docs/components/field-error" },
      { name: "Checkbox", href: "/docs/components/checkbox" },
      { name: "RadioGroup", href: "/docs/components/radio-group" },
    ],
    purpose:
      "Visible label, control, optional helper, optional inline error. Placeholders never replace the label.",
    whenToUse: [
      "Use whenever a Patients step collects typed or picked values.",
      "Use the same stack for single fields, stacked fields, and two-column rows (City + State, height ft + in, payment expiry + CVV).",
      "Unit suffixes beside the input (ft, in, lbs) appear on Height and Weight only — keep them as a form-field variation, not a separate pattern.",
    ],
    structure: [
      "Label above the control.",
      "Helper or format hint when needed.",
      "FieldError when invalid.",
      "Placeholders are format hints only — never the field name.",
    ],
    variations: [
      {
        name: "Single field",
        screens: [
          "Email",
          "Date of Birth",
          "General Question",
          "Mammogram Date",
        ],
        description: "One labeled control in the step body.",
      },
      {
        name: "Stacked fields",
        screens: ["Insurance", "Home Address"],
        description: "Several labeled controls in one panel.",
      },
      {
        name: "Two-column row",
        screens: ["Home Address", "Height and Weight", "Deposit"],
        description: "City + State; height ft + in; payment expiry + CVV.",
      },
      {
        name: "Numeric filtering",
        description:
          "inputMode numeric and digits-only on zip, height, and weight.",
      },
    ],
    accessibility: [
      "htmlFor and id on every labeled control.",
      "aria-invalid and aria-describedby pointing at FieldError when invalid.",
      "Date placeholder MM/DD/YYYY stays visible; do not hide the format inside the picker only.",
      "Units (ft, in, lbs) stay visible next to the value.",
    ],
    productExamples: [
      {
        title: "Email",
        href: "/docs/userflow/patients/email",
        product: "Patients",
      },
      {
        title: "Home Address",
        href: "/docs/userflow/patients/home-address",
        product: "Patients",
      },
      {
        title: "Height and Weight",
        href: "/docs/userflow/patients/height-weight",
        product: "Patients",
      },
    ],
    sections: [
      ...standardSections,
      {
        id: "guidelines",
        title: "Guidelines",
        aliases: ["rules"],
        keywords: ["visible label", "placeholder"],
      },
      {
        id: "input-label",
        title: "Input + Label",
        aliases: ["text field"],
        keywords: ["input", "error"],
      },
      {
        id: "select-label",
        title: "Select + Label",
        aliases: ["select field"],
        keywords: ["select"],
      },
      {
        id: "checkbox-label",
        title: "Checkbox + Label",
        aliases: ["checkbox field"],
        keywords: ["checkbox"],
      },
      {
        id: "radio-label",
        title: "Radio + Label",
        aliases: ["radio field"],
        keywords: ["radio"],
      },
      {
        id: "spacing",
        title: "Spacing",
        aliases: ["field spacing"],
        keywords: ["formFieldGroupClassName"],
      },
    ],
  },
  {
    title: "Exclusive choice",
    href: "/docs/patterns/exclusive-choice",
    description:
      "The patient picks exactly one answer before continuing — screening, consent, and branching questions.",
    aliases: ["radio step", "single select question"],
    keywords: ["radio", "covid", "consent", "mammogram", "one answer"],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/multi-select-choice",
      "/docs/patterns/conditional-reveal",
    ],
    relatedComponents: [
      "/docs/components/radio-group",
      "/docs/components/button",
    ],
    storybook: "Patterns/Exclusive choice",
    componentsUsed: [
      { name: "RadioGroup", href: "/docs/components/radio-group" },
      { name: "RadioGroupItem", href: "/docs/components/radio-group" },
      { name: "Patients step chrome" },
    ],
    purpose:
      "The patient must pick exactly one answer before continuing. Used for screening, consent, and branching questions.",
    whenToUse: [
      "Use when only one answer is valid.",
      "Do not mix radio and checkbox on the same question — multi-select uses Multi-select choice.",
      "Do not use this for blocking legal consent copy inside the radio group; keep consent copy in the intro.",
    ],
    structure: [
      "Patients step intro (question as h1, optional helper).",
      "RadioGroup in an input panel.",
      "Each option: label wrapping RadioGroupItem plus text.",
      "Continue disabled until a value is set.",
    ],
    variations: [
      {
        name: "Binary + decline",
        description: "Yes / No / Prefer not to answer.",
        screens: ["COVID Screening"],
      },
      {
        name: "Consent",
        description:
          "I agree / I do not agree, with extra legal copy and a learn-more dialog on Share Results.",
        screens: ["Share Results"],
      },
      {
        name: "Branching",
        description:
          "I know the date / First mammogram / I don’t remember, then later steps.",
        screens: ["Last Mammogram"],
      },
    ],
    accessibility: [
      "RadioGroup has an aria-label on the live screens (or name it from the h1 with aria-labelledby).",
      "Visible labels on every option; do not rely on color.",
      "“Prefer not to answer” is a first-class choice, not a skip link.",
      "Consent copy stays in the intro; the radio group only captures the decision.",
    ],
    productExamples: [
      {
        title: "COVID Screening",
        href: "/docs/userflow/patients/covid",
        product: "Patients",
      },
      {
        title: "Share Results",
        href: "/docs/userflow/patients/share-results",
        product: "Patients",
      },
      {
        title: "Last Mammogram",
        href: "/docs/userflow/patients/mammogram",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Multi-select choice",
    href: "/docs/patterns/multi-select-choice",
    description:
      "The patient may select more than one option. Continue requires at least one selection.",
    aliases: ["checkbox group step", "select all that apply"],
    keywords: [
      "checkbox",
      "assistance",
      "availability",
      "day toggle",
      "none of the above",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/exclusive-choice",
      "/docs/patterns/form-field-patterns",
    ],
    relatedComponents: [
      "/docs/components/checkbox",
      "/docs/components/label",
      "/docs/components/day-toggle-group",
    ],
    storybook: "Patterns/Multi-select choice",
    componentsUsed: [
      { name: "Checkbox", href: "/docs/components/checkbox" },
      { name: "Label", href: "/docs/components/label" },
      { name: "DayToggleGroup", href: "/docs/components/day-toggle-group" },
    ],
    purpose:
      "The patient may select more than one option. Continue requires at least one selection.",
    whenToUse: [
      "Use when more than one answer can be true, including “Select all that apply.”",
      "Use Exclusive choice when only one answer is valid.",
    ],
    structure: [
      "Intro includes “Select all that apply” when that is the rule (Assistance).",
      "Vertical list of label plus Checkbox.",
      "Optional exclusive option that clears the others (“None of the above”).",
      "Continue disabled until at least one option is selected.",
    ],
    variations: [
      {
        name: "Checkbox list with exclusive None",
        description:
          "Assistance needs. “None of the above” clears other selections.",
        screens: ["Assistance"],
      },
      {
        name: "Day toggles + checkbox times",
        description:
          "Days use DayToggleGroup; times use the checkbox list. Continue needs both groups filled.",
        screens: ["Availability"],
      },
    ],
    accessibility: [
      "Each checkbox has a unique id and a visible label.",
      "“None of the above” must not stay selected with other needs.",
      "DayToggleGroup needs an accessible name (aria-label=\"Choose days\" is present on Availability).",
      "Do not mix radio and checkbox on the same question.",
    ],
    productExamples: [
      {
        title: "Assistance",
        href: "/docs/userflow/patients/assistance",
        product: "Patients",
      },
      {
        title: "Availability",
        href: "/docs/userflow/patients/availability",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Optional skip",
    href: "/docs/patterns/optional-skip",
    description:
      "The patient may leave the step empty and still continue. Copy says so; there is no second Skip button.",
    aliases: ["skip in copy", "optional step"],
    keywords: [
      "optional",
      "continue without",
      "email",
      "insurance",
      "skip",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/follow-up-details",
      "/docs/patterns/document-upload",
    ],
    relatedComponents: ["/docs/components/button"],
    storybook: "Patterns/Optional skip",
    componentsUsed: [
      { name: "Patients step" },
      { name: "Native button styled as a text link" },
    ],
    purpose:
      "The patient may leave the step empty and still continue. The UI says so in copy; it does not hide Continue or use a second “Skip” button.",
    whenToUse: [
      "Use when the product allows continuing without data on that step.",
      "Do not disable Continue to mean “optional” — that reads as blocked.",
      "If the patient starts filling, validation may still require a complete, valid subset.",
    ],
    structure: [
      "Helper or emphasis line states that continuing without data is allowed.",
      "Sometimes an inline text button “you can continue” inside the helper (Insurance, Insurance Card).",
      "Continue stays enabled when the form is empty.",
      "If the patient starts filling, validation may require a complete, valid subset.",
    ],
    variations: [
      {
        name: "Empty is valid",
        description: "Continue enabled; an invalid value blocks Continue.",
        screens: ["Email"],
      },
      {
        name: "Skip in copy",
        description:
          "Inline “you can continue” runs the same action as Continue.",
        screens: ["Insurance", "Insurance Card"],
      },
      {
        name: "Optional details",
        description:
          "Emphasis: “If you do not have more details, you can continue.” Continue never disabled.",
        screens: [
          "Availability Details",
          "Assistance Details",
          "Mammogram Location",
        ],
      },
      {
        name: "Partial invalid",
        description:
          "Empty is OK; if any insurance field is filled, provider and member ID are required.",
        screens: ["Insurance Details"],
      },
    ],
    accessibility: [
      "Inline skip must be a button with a focus ring, not a fake link without an href.",
      "Do not use disabled Continue to mean optional.",
      "When skip is in a sentence, keep the surrounding sentence readable without the button styles.",
      "Optional fields include “(optional)” in the label where used (apartment, group ID, details).",
    ],
    productExamples: [
      {
        title: "Email",
        href: "/docs/userflow/patients/email",
        product: "Patients",
      },
      {
        title: "Insurance Details",
        href: "/docs/userflow/patients/insurance",
        product: "Patients",
      },
      {
        title: "Insurance Card",
        href: "/docs/userflow/patients/insurance-card",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Follow-up details",
    href: "/docs/patterns/follow-up-details",
    description:
      "After a required choice or schedule, collect optional free-text context. Continue stays enabled.",
    aliases: ["optional textarea step", "add details"],
    keywords: [
      "textarea",
      "availability details",
      "assistance details",
      "mammogram location",
      "optional",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/optional-skip",
      "/docs/patterns/form-field-patterns",
      "/docs/patterns/conditional-reveal",
    ],
    relatedComponents: [
      "/docs/components/label",
      "/docs/components/textarea",
    ],
    storybook: "Patterns/Follow-up details",
    componentsUsed: [
      { name: "Label", href: "/docs/components/label" },
      { name: "Textarea", href: "/docs/components/textarea" },
      { name: "Patients step" },
    ],
    purpose:
      "After a required choice or schedule, collect free-text context. Always optional on the live screens that use it.",
    whenToUse: [
      "Use after Availability, Assistance, or Last Mammogram when extra context is helpful but not required.",
      "Do not use this for General Question — that textarea is required and the title is the question.",
    ],
    structure: [
      "Back.",
      "Title “Add … details”.",
      "Muted helper with examples.",
      "Emphasis: the patient can continue without more details.",
      "Labeled optional Textarea in an input panel.",
      "Continue always enabled.",
    ],
    variations: [
      {
        name: "Availability details",
        description: "Schedule caveats.",
        screens: ["Availability Details"],
      },
      {
        name: "Assistance details",
        description: "Visit needs.",
        screens: ["Assistance Details"],
      },
      {
        name: "Mammogram location",
        description: "Where the last exam happened.",
        screens: ["Mammogram Location"],
      },
    ],
    accessibility: [
      "Label includes “(optional)”.",
      "Placeholder is an example, not the label.",
      "Some live textareas also set aria-label; prefer the visible Label and id only.",
      "Do not require this step to unlock Continue.",
    ],
    productExamples: [
      {
        title: "Availability Details",
        href: "/docs/userflow/patients/availability-details",
        product: "Patients",
      },
      {
        title: "Assistance Details",
        href: "/docs/userflow/patients/assistance-details",
        product: "Patients",
      },
      {
        title: "Mammogram Location",
        href: "/docs/userflow/patients/mammogram-location",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Document upload",
    href: "/docs/patterns/document-upload",
    description:
      "Attach a clinical document with a labeled Dropzone: click to select or drag and drop.",
    aliases: ["file upload step", "dropzone step"],
    keywords: [
      "dropzone",
      "prescription",
      "insurance card",
      "pdf",
      "jpeg",
      "png",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/optional-skip",
    ],
    relatedComponents: [
      "/docs/components/dropzone",
      "/docs/components/button",
    ],
    storybook: "Patterns/Document upload",
    componentsUsed: [
      { name: "Dropzone", href: "/docs/components/dropzone" },
      { name: "Patients step" },
    ],
    purpose:
      "Attach a clinical document (insurance card or prescription) with type validation.",
    whenToUse: [
      "Use when the patient must attach a file on a Patients step.",
      "Use the required variation for prescription. Use the optional pair with Optional skip for insurance card.",
    ],
    structure: [
      "Step intro (why the file is needed).",
      "One or two Dropzones with a visible label. Click to select or drag and drop — do not use a separate File Input.",
      "Accept .pdf, .jpeg, .jpg, .png. Error copy: “Use file in .pdf, .jpeg or .png”. Pass maxSize when the product has a file size limit.",
      "Continue: required or skippable depending on the variation.",
    ],
    variations: [
      {
        name: "Required single file",
        description:
          "Prescription. Emphasis: “This is required…”. Continue disabled until a valid file.",
        screens: ["Prescription"],
      },
      {
        name: "Optional pair",
        description:
          "Insurance Card front and back. Skip in copy. Continue enabled with zero files; blocked only on invalid type.",
        screens: ["Insurance Card"],
      },
    ],
    accessibility: [
      "Each dropzone has an id and a visible label (“Upload front of card”, not “File”).",
      "Error is shown on the dropzone; do not rely on disabled Continue alone.",
      "Allowed types are in the error and accept attribute.",
      "Removing a file must remain keyboard-operable.",
    ],
    productExamples: [
      {
        title: "Insurance Card",
        href: "/docs/userflow/patients/insurance-card",
        product: "Patients",
      },
      {
        title: "Prescription",
        href: "/docs/userflow/patients/prescription",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Conditional reveal",
    href: "/docs/patterns/conditional-reveal",
    description:
      "Extra fields or extra steps appear only after a choice. The first step stays simple.",
    aliases: ["progressive disclosure", "branching step"],
    keywords: [
      "checkbox reveal",
      "home address",
      "mammogram",
      "branch",
    ],
    category: "Forms",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/exclusive-choice",
      "/docs/patterns/follow-up-details",
      "/docs/patterns/form-field-patterns",
    ],
    relatedComponents: [
      "/docs/components/checkbox",
      "/docs/components/radio-group",
      "/docs/components/input",
    ],
    storybook: "Patterns/Conditional reveal",
    componentsUsed: [
      { name: "Checkbox", href: "/docs/components/checkbox" },
      { name: "RadioGroup", href: "/docs/components/radio-group" },
      { name: "Input", href: "/docs/components/input" },
      { name: "DatePicker" },
      { name: "Textarea", href: "/docs/components/textarea" },
      { name: "Patients step" },
    ],
    purpose:
      "Extra fields or extra steps appear only after a choice. The first step stays simple.",
    whenToUse: [
      "Use in-page when a checkbox should reveal more fields on the same step (Home Address).",
      "Use a flow branch when an exclusive choice routes to a different step (Last Mammogram).",
    ],
    structure: [
      "In-page: checkbox in the first panel, then a second MultiStepFlowLayoutInputPanel with its own heading and the same field stack.",
      "Next-step: exclusive choice, then Continue routes to a different step (date and/or location).",
    ],
    variations: [
      {
        name: "In-page panel",
        description:
          "“Find radiology centers near a different address” reveals a second address form. Continue requires both addresses when the checkbox is on.",
        screens: ["Home Address"],
      },
      {
        name: "Flow branch",
        description:
          "Last Mammogram routes to Mammogram Date and/or Mammogram Location. Back from location remembers whether the previous step was selection or date.",
        screens: ["Last Mammogram", "Mammogram Date", "Mammogram Location"],
      },
    ],
    accessibility: [
      "Revealed heading (h2 “Find near a different address”) so the new panel is a section.",
      "Focus should move to the new panel when it appears — not implemented on the live Home Address screen; call this out when documenting.",
      "Branching must not strand Back; location already stores the back target.",
      "Do not reveal a required field without saying it became required.",
    ],
    productExamples: [
      {
        title: "Home Address",
        href: "/docs/userflow/patients/home-address",
        product: "Patients",
      },
      {
        title: "Last Mammogram",
        href: "/docs/userflow/patients/mammogram",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "In-step notice",
    href: "/docs/patterns/in-step-notice",
    description:
      "A care-team or policy note inside the step intro, before the patient answers. Not a toast or a blocking dialog.",
    aliases: ["info alert in step", "care team note"],
    keywords: ["alert", "info", "policy", "availability", "deposit"],
    category: "Feedback",
    relatedPatterns: [
      "/docs/patterns/patients-step",
      "/docs/patterns/exclusive-choice",
    ],
    relatedComponents: ["/docs/components/alert"],
    storybook: "Patterns/In-step notice",
    componentsUsed: [
      { name: "Alert", href: "/docs/components/alert" },
      { name: "AlertIcon", href: "/docs/components/alert" },
      { name: "AlertTitle", href: "/docs/components/alert" },
      { name: "AlertDescription", href: "/docs/components/alert" },
    ],
    purpose:
      "Show a care-team or policy note inside the step intro, before the patient answers. Not a toast and not a blocking dialog.",
    whenToUse: [
      "Use for policy or care-team notes that must be read before answering (Deposit, Availability).",
      "Do not use this for blocking legal consent — Share Results uses Exclusive choice plus a dialog.",
    ],
    structure: [
      "Title and helper.",
      "Alert variant=\"info\" with icon, title, and description.",
      "Then fields or checkout content.",
    ],
    variations: [
      {
        name: "Policy",
        description: "“Cancelation policy.” plus the refund rule.",
        screens: ["Deposit"],
      },
      {
        name: "Care team",
        description: "“Note from Medmo Care Team:” plus a scheduling note slot.",
        screens: ["Availability"],
      },
    ],
    accessibility: [
      "Info alert is not role=\"alert\" (that is for errors). Keep it in the reading order under the h1.",
      "Icon is decorative beside the title; title and description carry the meaning.",
      "Do not use this for blocking legal consent.",
    ],
    productExamples: [
      {
        title: "Deposit",
        href: "/docs/userflow/patients/deposit",
        product: "Patients",
      },
      {
        title: "Availability",
        href: "/docs/userflow/patients/availability",
        product: "Patients",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Operational app chrome",
    href: "/docs/patterns/operational-app-chrome",
    description:
      "Persistent MPF Portal frame: sidebar, page title, optional header search, and signed-in agent.",
    aliases: ["app shell chrome", "mpf chrome"],
    keywords: [
      "app shell",
      "sidebar",
      "header",
      "global search",
      "user profile",
      "dashboard",
    ],
    category: "Navigation",
    relatedPatterns: [
      "/docs/patterns/workspace-tabs",
      "/docs/patterns/scan-search",
      "/docs/patterns/patients-intake-chrome",
    ],
    relatedComponents: [
      "/docs/components/global-search-bar",
      "/docs/components/user-profile-block",
    ],
    storybook: "Patterns/Operational app chrome",
    componentsUsed: [
      { name: "AppShell", href: "/docs/templates/app-shell" },
      { name: "AppSidebar" },
      { name: "AppHeader" },
      { name: "GlobalSearchBar", href: "/docs/components/global-search-bar" },
      { name: "UserProfileBlock", href: "/docs/components/user-profile-block" },
    ],
    purpose:
      "Persistent MPF Portal frame for operational work: navigate sections, see where you are, search, and identify the signed-in agent.",
    whenToUse: [
      "Use on MPF Portal operational screens. The live product uses this on Dashboard, including every tab.",
      "Do not use Patients intake chrome for MPF, or this chrome for Patients intake.",
    ],
    structure: [
      "AppShell.",
      "AppSidebar — icon plus label items; one active.",
      "AppHeader — page title, optional GlobalSearchBar, UserProfileBlock.",
      "main — tabbed workspace.",
    ],
    variations: [
      {
        name: "Header search shown",
        description: "My info and My Reports.",
        screens: ["Dashboard — My info", "Dashboard — My Reports"],
      },
      {
        name: "Header search hidden",
        description:
          "Scan Search. Search lives in the tab body instead so two search fields are not shown at once.",
        screens: ["Dashboard — Scan Search"],
      },
    ],
    accessibility: [
      "Header title is h1 (“Dashboard”).",
      "Sidebar needs a nav landmark and current-page indication (active item).",
      "Profile settings control must be named (not icon-only without a label).",
      "App Shell docs mention a skip link; the live Dashboard does not include one.",
    ],
    productExamples: [
      {
        title: "Dashboard",
        href: "/docs/userflow/nuclear/dashboard",
        product: "MPF Portal",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Workspace tabs",
    href: "/docs/patterns/workspace-tabs",
    description:
      "Switch operational views inside the same MPF chrome without changing the sidebar destination.",
    aliases: ["segmented tabs", "dashboard tabs"],
    keywords: ["tabs", "my info", "scan search", "my reports"],
    category: "Navigation",
    relatedPatterns: [
      "/docs/patterns/operational-app-chrome",
      "/docs/patterns/worklist-table",
      "/docs/patterns/scan-search",
    ],
    relatedComponents: ["/docs/components/tabs"],
    storybook: "Patterns/Workspace tabs",
    componentsUsed: [
      { name: "Tabs", href: "/docs/components/tabs" },
      { name: "TabsList", href: "/docs/components/tabs" },
      { name: "TabsTrigger", href: "/docs/components/tabs" },
      { name: "TabsContent", href: "/docs/components/tabs" },
    ],
    purpose:
      "Switch between operational views inside the same chrome without changing the sidebar destination.",
    whenToUse: [
      "Use inside Operational app chrome when My info, Scan Search, and My Reports share one Dashboard destination.",
      "Do not invent overflow or extra tabs — the live product has these three only.",
    ],
    structure: [
      "Tabs at the top of main.",
      "Segmented TabsList and TabsTrigger.",
      "TabsContent with the segmented content class.",
      "Each tab owns a worklist grid, a search layout, or a single table.",
    ],
    variations: [
      {
        name: "My info",
        description: "Grid of worklist tables.",
        screens: ["Dashboard — My info"],
      },
      {
        name: "Scan Search",
        description: "Search header, search, optional results table.",
        screens: ["Dashboard — Scan Search"],
      },
      {
        name: "My Reports",
        description: "Single titled table.",
        screens: ["Dashboard — My Reports"],
      },
    ],
    accessibility: [
      "Tabs must be keyboard-operable per the Tabs component.",
      "Selected tab is the only content in view.",
      "Do not reuse the page h1 inside tabs; Scan Search section titles are h2.",
    ],
    productExamples: [
      {
        title: "Dashboard",
        href: "/docs/userflow/nuclear/dashboard",
        product: "MPF Portal",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Worklist table",
    href: "/docs/patterns/worklist-table",
    description:
      "Operational lists with a title, columns, optional sort, row links, and a count. Empty tables keep headers and a 0 footer.",
    aliases: ["data table worklist", "empty table"],
    keywords: [
      "data table",
      "srid",
      "sort",
      "row count",
      "empty",
      "active scans",
    ],
    category: "Data Display",
    relatedPatterns: [
      "/docs/patterns/workspace-tabs",
      "/docs/patterns/scan-search",
      "/docs/patterns/operational-app-chrome",
    ],
    relatedComponents: ["/docs/components/data-table"],
    storybook: "Patterns/Worklist table",
    componentsUsed: [
      { name: "DataTable", href: "/docs/components/data-table" },
      { name: "DataTableHeader", href: "/docs/components/data-table" },
      { name: "DataTableMenuHead", href: "/docs/components/data-table" },
      { name: "DataTableLinkCell", href: "/docs/components/data-table" },
      { name: "DataTableRowCountFooter", href: "/docs/components/data-table" },
    ],
    purpose:
      "Scan operational lists (scans, exceptions, tasks, reports, search hits) with a title, columns, optional sort, row links, and a count.",
    whenToUse: [
      "Use for MPF lists on My info, My Reports, and Scan Search results.",
      "Empty tables keep headers and a 0 footer — that is the live empty state. Do not add an illustrated empty, title, or CTA here.",
    ],
    structure: [
      "DataTable with title.",
      "Header row: DataTableHead and optional DataTableMenuHead (sort).",
      "Body: DataTableRow. SRID and patient as DataTableLinkCell; other values as DataTableCell.",
      "DataTableRowCountFooter with count.",
    ],
    variations: [
      {
        name: "Populated with sort",
        description: "Sort on one column (SRID or DOB).",
        screens: ["My active scans", "Search results"],
      },
      {
        name: "Empty",
        description:
          "Same headers, empty body, footer count 0. No illustrated empty state.",
        screens: ["My exceptions", "My open tasks", "My Reports"],
      },
      {
        name: "Grid placement",
        description:
          "Half-width versus full-width on My info. This is layout of the same table, not a new pattern.",
        screens: ["Dashboard — My info"],
      },
    ],
    accessibility: [
      "Table title is the accessible name for the region.",
      "Sortable headers must expose sort direction.",
      "Link cells need distinguishable link text (SRID, patient name — not “open”).",
      "Empty: 0 in the footer is the only empty signal; screen readers get an empty table.",
    ],
    productExamples: [
      {
        title: "Dashboard",
        href: "/docs/userflow/nuclear/dashboard",
        product: "MPF Portal",
      },
    ],
    sections: standardSections,
  },
  {
    title: "Scan search",
    href: "/docs/patterns/scan-search",
    description:
      "Find scan requests on demand. Results are not shown until the agent searches.",
    aliases: ["search scan requests", "mpf search"],
    keywords: [
      "global search bar",
      "create new scan request",
      "search results",
      "scan search",
    ],
    category: "Search",
    relatedPatterns: [
      "/docs/patterns/worklist-table",
      "/docs/patterns/workspace-tabs",
      "/docs/patterns/operational-app-chrome",
    ],
    relatedComponents: [
      "/docs/components/button",
      "/docs/components/global-search-bar",
      "/docs/components/data-table",
    ],
    storybook: "Patterns/Scan search",
    componentsUsed: [
      { name: "SearchResults", href: "/docs/templates/search-results" },
      { name: "Button", href: "/docs/components/button" },
      { name: "GlobalSearchBar", href: "/docs/components/global-search-bar" },
      { name: "DataTable", href: "/docs/components/data-table" },
    ],
    purpose:
      "Find scan requests on demand. Results are not shown until the agent searches.",
    whenToUse: [
      "Use on the MPF Dashboard Scan Search tab.",
      "Do not add a Command palette here — Command is not on the live Dashboard.",
      "Pre-search is title, CTA, and search with no table. That absence is the empty state.",
    ],
    structure: [
      "SearchResults template: toolbar, search, optional results.",
      "Row: h2 “Search scan requests” plus outline Button “Create new scan request”.",
      "GlobalSearchBar with dialog title, description, and grouped items.",
      "After submit or select: DataTable title=\"Search results\" (Worklist table).",
    ],
    variations: [
      {
        name: "Pre-search",
        description: "Title, CTA, and search. No table.",
        screens: ["Dashboard — Scan Search"],
      },
      {
        name: "After search",
        description: "Worklist table of matching scan requests.",
        screens: ["Dashboard — Scan Search"],
      },
    ],
    accessibility: [
      "Search dialog has title and description on the product screen.",
      "Creating a scan request is a separate outline action, not buried in search results.",
      "Results table appears in order after search; the live screen does not specify a focus move.",
      "Header global search is hidden on this tab so two search fields are not shown at once.",
    ],
    productExamples: [
      {
        title: "Dashboard — Scan Search",
        href: "/docs/userflow/nuclear/dashboard",
        product: "MPF Portal",
      },
    ],
    sections: standardSections,
  },
];

export function getPatternEntry(href: string) {
  const normalized = href.replace(/\/$/, "") || "/";
  return patternsRegistry.find((item) => item.href === normalized);
}

export function getDocumentedPatterns() {
  return patternsRegistry.filter(isDocumented);
}

export function getPatternNeighbors(href: string) {
  const normalized = href.replace(/\/$/, "") || "/";
  const documented = getDocumentedPatterns();
  const index = documented.findIndex((item) => item.href === normalized);

  if (index === -1) {
    return {};
  }

  return {
    previous: documented[index - 1],
    next: documented[index + 1],
  };
}

export function getPatternNavCategories(): DocsNavCategory[] {
  const overview = getPatternEntry(OVERVIEW_HREF);

  return [
    {
      id: "patterns-overview",
      title: "Patterns",
      items: overview ? [{ title: overview.title, href: overview.href }] : [],
    },
    ...patternCategories.map((category) => ({
      id: categoryId(category),
      title: category,
      items: patternsRegistry
        .filter((item) => item.category === category)
        .map((item) => ({
          title: item.title,
          href: item.href,
        })),
    })),
  ];
}

export function getPatternSearchText(item: PatternRegistryEntry) {
  return [
    item.title,
    item.description,
    item.category,
    item.purpose,
    ...item.aliases,
    ...item.keywords,
    ...item.whenToUse,
    ...item.accessibility,
    ...item.componentsUsed.map((component) => component.name),
    ...item.productExamples.map((example) => example.title),
    item.storybook ?? "",
  ].join(" ");
}

export function patternMatchesQuery(item: PatternRegistryEntry, query: string) {
  return getPatternSearchText(item)
    .toLowerCase()
    .includes(query.trim().toLowerCase());
}

export function getPatternSearchEntries() {
  return getDocumentedPatterns().flatMap((entry) => {
    const pageSearchText = getPatternSearchText(entry);

    return [
      {
        label: entry.title,
        value: entry.href,
        group: entry.category === "Overview" ? "Patterns" : entry.category,
        searchText: pageSearchText,
      },
      ...entry.sections.map((section) => ({
        label: `${entry.title}: ${section.title}`,
        value: `${entry.href}#${section.id}`,
        group: entry.title,
        searchText: [
          pageSearchText,
          ...section.aliases,
          ...section.keywords,
          section.id,
        ].join(" "),
      })),
    ];
  });
}

export function getPatternMetadata(href: string): Metadata {
  const item = getPatternEntry(href);

  return {
    title: item?.title ?? "Patterns",
    description: item?.description ?? "",
  };
}

export function getPatternRouteSlugs() {
  return getDocumentedPatterns()
    .filter(
      (entry) =>
        entry.href !== OVERVIEW_HREF &&
        entry.href !== "/docs/patterns/form-field-patterns"
    )
    .map((entry) => entry.href.replace("/docs/patterns/", ""));
}
