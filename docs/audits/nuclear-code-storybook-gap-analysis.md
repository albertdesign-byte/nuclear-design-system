# Nuclear DS — Code and Storybook gap analysis

**Date:** 2026-08-14  
**Scope:** Codebase and Storybook only. Figma and Code Connect are out of scope.  
**Source of truth:** `foundations/`, `src/components/`, docs registries, and `*.stories.tsx` / Storybook MDX.  
**Strategy this plan follows:** Storybook accuracy → Templates → Patterns → Foundations completion. Figma replication and Code Connect wait until Nuclear is closed in code.

No implementation is proposed in this document beyond an ordered execution plan.

---

# Executive Summary

Nuclear already has a usable component catalog, two published templates (AppShell, MultiStepFlowLayout), fourteen documented patterns, and live foundation pages for Colors, Typography, Spacing, Radius, Shadows, Icons, and Disabled State.

The system is **not closed in code**. The largest blockers, in the agreed priority order, are:

1. **Storybook is ahead of the docs contract, and the contract is dishonest.** Many stable components now have stories, but the components registry still publishes `storybook: ""`. Docs cannot deep-link. Several stories have no docs page (Date Picker, App Header, App Sidebar, Dashboard Grid, Field Description, Input Button Group). Naming is inconsistent (`DropdownMenu` vs `Dropdown Menu`, `DatePicker` vs `Date Range Picker`).
2. **Templates are only two of five.** AppShell and MultiStepFlowLayout exist. Detail View, Search Results, and Form Page are Coming Soon. Products still own those page structures.
3. **Patterns are documented in the docs site, not in Storybook.** There is no `Patterns/*` story besides Overview MDX. Empty State and a product-agnostic Search pattern are missing. Feedback is only the in-step notice plus Alert/Sonner components.
4. **Foundations are split.** Colors through Shadows are live in docs and Storybook. Motion and Breakpoints exist as tokens and CSS but have no live page and no Storybook gallery. Density does not exist in code.

Closing Nuclear in code means making Storybook, registries, and implementations tell the same story — then extracting the remaining templates and missing patterns from product screens — then publishing Motion, Breakpoints, and (later) Density.

---

# Foundations

Token families with live docs **and** Storybook galleries: Colors, Typography, Spacing, Radius, Shadows (`foundations/tokens/registry.ts`).

Live docs only (no Storybook gallery): Icons, Disabled State.

Tokens + CSS, **no** live Foundations nav, **no** Storybook: Motion, Breakpoints, Opacity, Z-Index.

No code: Density.

| Foundation | Code tokens | Live docs | Storybook | Status | Gap |
|------------|-------------|-----------|-----------|--------|-----|
| Colors | Yes | `/docs/foundations/colors` | `Foundations/Colors` | **Partial** | Contrast matrix exists in `foundations/colors/contrast-matrix.ts` and is not shown on the live page. Timeline Card uses `--color-timeline-card-*` outside the semantic map. |
| Typography | Yes | `/docs/foundations/typography` | `Foundations/Typography` | **Complete** | Dual-family rule is documented (Poppins = product UI, IBM Plex = DS chrome). Do not reopen. Brand Language MDX still contradicts; that is copy sync, not a token gap. |
| Spacing | Yes | `/docs/foundations/spacing` | `Foundations/Spacing` | **Complete** | 4px grid, 8px rhythm, semantic inline/stack/context. Ready for Density later. |
| Radius | Yes | `/docs/foundations/radius` | `Foundations/Radius` | **Complete** | Scale + context tokens. |
| Shadows | Yes | `/docs/foundations/shadows` | `Foundations/Shadows` | **Complete** | Scale + light/dark. |
| Motion | Yes (`foundations/motion/`) | MDX only, not in live nav | Missing | **Partial** | Durations, easings, six presets (`hover`, `dropdown`, `modal`, `toast`, `accordion`, `skeleton`). Components already consume `--motion-*`. Designers cannot learn this from `/docs/foundations` or Storybook. |
| Breakpoints | Yes (`foundations/breakpoints/`) | MDX only, not in live nav | Missing | **Partial** | Viewport tiers + `--container-*` / `--layout-*`. Same discoverability gap as Motion. |
| Density | No | Roadmap / blueprint only | Missing | **Missing** | Planned comfortable / compact / dense via `data-density`. Explicitly deferred until Spacing + Typography are closed. They are closed enough to schedule Density **after** Storybook, templates, and patterns — not before. |

**Also present, not in the requested list:** Icons (live docs, no Storybook). Disabled State (live docs, no Storybook). Opacity and Z-Index (tokens + CSS, no live page).

---

# Components

Audit of the **requested focus set**, then catalog-wide notes.

Status key: **Stable** = implemented and documented under `/docs/components`. Storybook coverage is separate.

## Focus set

| Component | Status | Variants implemented | Missing variants | Missing states | Accessibility | Storybook |
|-----------|--------|----------------------|------------------|----------------|---------------|-----------|
| Button | Stable | `primary`, `secondary`, `outline`, `ghost`; intent `default` / `danger`; sizes `sm`–`xxl` + icon sizes; `loading`; `fullWidth`; `disabled` | No link variant. Button is not used as a Link | Interaction grid exists. No `aria-disabled` story (native `disabled` only) | Focus ring, loading `aria-busy` | `Components/Button` — mapped |
| Input | Stable | Sizes `sm`–`xxl`; `fullWidth`; field wrapper with label/error/helper; icons/prefix/suffix | No filled vs outline visual variant (single surface) | Default, disabled, read-only, invalid, loading in stories | `aria-invalid` via `InputField`; primitive needs manual wiring | `Components/Input` — mapped. Interaction states exist; not the shared `InteractionStateGrid` |
| Select | Stable | Trigger sizes; loading; searchable; grouped; multiple/tags | No native `<select>` fallback story | Disabled, read-only, error, loading, async | Keyboard + popup (Base UI) | `Components/Select` — mapped |
| Checkbox | Stable | Sizes `sm`/`md`/`lg`; indeterminate; group field | No button-style checkbox | Unchecked/checked/disabled/error/indeterminate in stories | Touch target on primitive story | `Components/Checkbox` — mapped |
| Radio | Stable (`Radio Group`) | Item sizes `sm`/`md`/`lg`; field wrapper | N/A | Selected, disabled, selected-disabled, error | Group labelling via field | `Components/RadioGroup` — mapped |
| Switch | Stable | Sizes `sm`/`md`/`lg` | No `label` slot on the primitive (label is composition) | Default, disabled, interaction grid | `aria-label` required when unlabeled | `Components/Switch` — mapped |
| Badge | Stable | `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`; sizes `sm`/`md`/`lg` | No info/success/warning semantic set (uses generic variants) | No disabled (badges are not controls) | Link-as-badge needs accessible name | `Components/Badge` — mapped |
| Alert | Stable | `info`, `success`, `warning`, `error`; dismissible | Deprecated `default` / `destructive` still in types | Open / dismissed / persistent | Close button label | `Components/Alert` — mapped |
| Dialog | Stable | Header/body/footer; optional close | No size (`sm`/`md`/`lg`), no sheet/drawer, no nested dialog story | Trigger/open/disabled actions; interaction grid is on the footer Button, not the dialog chrome | Focus trap, escape, `aria-labelledby` | `Components/Dialog` — mapped |
| Card | Stable | Size `default` / `sm`; header/media/content/footer slots | No outlined/elevated/filled variant; one surface + ring | Empty-state story exists as composition, not a Card variant | Heading via `CardTitle` | `Components/Card` — mapped |
| Tabs | Stable | List `default`, `line`, `folder`; horizontal/vertical | No overflow/scroll tabs; no count badge slot | Disabled tab not in stories | Keyboard orientation | Story exists (`Components/Tabs`). **Registry `storybook` is empty** |
| Table | Stable | Primitive `table`/`thead`/`tbody`/caption | Sorting, selection, density live on **Data Table**, not Table | No empty/loading row story on the primitive | Headers/caption documented | Story exists (`Components/Table`). **Registry `storybook` is empty** |
| Tooltip | Stable | Positions top/bottom/left/right | No delay/provider story documented as API | Keyboard focus story exists | Focus + hover | `Components/Tooltip` — mapped |
| Dropdown Menu | Stable | Item `default` / `danger`; disabled items | No submenu story called out | Menu states + dangerous actions stories | `aria-disabled` / `data-disabled` | `Components/DropdownMenu` — mapped. **Name mismatch** vs docs title “Dropdown Menu” |

## Catalog-wide (affects closing Nuclear)

**Stories exist; docs registry does not publish a Storybook title** (`storybook: ""`): Tabs, Accordion, Sonner, Spinner, Skeleton, Chip, Table, Data Table, Timeline, Timeline Card, Stage Flow Badge, Popover, Logo, Dashboard Panel, Scroll Area, Separator, User Profile Block, Date Range Picker.

**Stories exist; no `/docs/components/*` page:** Date Picker (`Components/DatePicker`), Input Button Group, Field Description, App Header, App Sidebar, Dashboard Grid.

**Planned only (href `#`):** Calendar, Attachment, Breadcrumb, Bubble, Aspect Ratio. Do not invent these until a product screen repeats them. Calendar overlaps Date Picker.

**Product-shaped components still in the Components catalog:** Payment Form, Deposit Summary, Timeline (hardcoded MPF columns). Previously classified as Product candidates. Out of this phase’s Figma work; still a catalog honesty issue.

**AppShell skip link:** Template docs historically claimed a skip link. Implementation has none. Honesty gap, not a missing component.

---

# Patterns

Patterns live in `patterns-registry.ts` and `/docs/patterns`. Storybook has **only** `Patterns/Overview.mdx`. No pattern has a `Patterns/*` story.

| Pattern (requested) | Docs | Code composition | Storybook | Status | Gap |
|---------------------|------|------------------|-----------|--------|-----|
| Form Field | `/docs/patterns/form-field-patterns` | Label + control + FieldError + field wrappers | Overview mention only | **Complete** (docs) | Needs a Storybook pattern story that uses production field composites |
| Search | Scan search only | Global Search Bar + Command + Scan Search tab | None | **Partial** | MPF Scan Search is documented. There is no product-agnostic Search pattern. Search Results is a missing template |
| Empty State | None | Card story `EmptyState` is local composition | None | **Missing** | Repeats on Cards, tables, and dashboards. Not extracted |
| Feedback | In-step notice only | Alert, Sonner, Spinner, Skeleton | Component stories only | **Partial** | No Loading State / Error State / Empty State patterns. In-step notice covers Patients inline alerts |
| Multi Select | `/docs/patterns/multi-select-choice` | Checkbox group + DayToggleGroup | None | **Complete** (docs) | Same Storybook gap as other patterns |
| Document Upload | `/docs/patterns/document-upload` | Dropzone | Dropzone component story | **Complete** (docs) | |
| Conditional Reveal | `/docs/patterns/conditional-reveal` | Checkbox → second panel | None | **Complete** (docs) | |
| Workspace Tabs | `/docs/patterns/workspace-tabs` | Tabs folder/line | Tabs component story | **Complete** (docs) | |
| Worklist Table | `/docs/patterns/worklist-table` | Data Table | Data Table component story | **Complete** (docs) | |

**Also documented (not in the requested list):** Patients intake chrome, Patients step, Exclusive choice, Optional skip, Follow-up details, Operational app chrome. These are extracted recipes. They should stay Patterns (docs), not become product-named templates.

---

# Templates

Layouts belong to Nuclear. Products consume them.

| Template | Code | Docs | Storybook | Status | Gap |
|----------|------|------|-----------|--------|-----|
| AppShell | `src/components/app-shell` | `/docs/templates/app-shell` | `Templates/AppShell` | **Exists** | No skip-to-content control. Header/sidebar remain Components (correct). |
| MultiStepFlowLayout | `src/components/multi-step-flow-layout` | `/docs/templates/multi-step-flow-layout` | `Templates/MultiStepFlowLayout` | **Exists** | Generic multi-step workflow. Not Patients-specific. Owns structure, progress, header, content regions, responsive behavior. |
| Detail View | — | Coming Soon | Listed as planned in Overview MDX | **Missing** | MPF patient/study detail still owns page structure |
| Search Results | — | Coming Soon | Planned in Overview MDX | **Missing** | Scan Search / worklists still own results layout |
| Form Page | — | Coming Soon | Planned in Overview MDX | **Missing** | Only extract if a single-page form repeats **outside** MultiStepFlowLayout. Do not duplicate the multi-step template |

`Templates/Overview` is accurate (published vs planned). Products Overview correctly says products consume layouts.

---

# Storybook

## Integrity findings

1. **Broken mappings (docs → Storybook).** Registry `storybook` empty while files exist (Tabs, Table, Data Table, Accordion, Chip, Popover, Logo, Spinner, Skeleton, Sonner, Timeline family, Stage Flow Badge, User Profile Block, Dashboard Panel, Scroll Area, Separator, Date Range Picker). Docs header cannot show a real title.
2. **Stories without documentation pages.** Date Picker, Input Button Group, Field Description, App Header, App Sidebar, Dashboard Grid.
3. **Inconsistent naming.** `Components/DropdownMenu` vs docs “Dropdown Menu”; `Components/DatePicker` vs “Date Range Picker”; `Components/DashboardPanel` vs “Dashboard Grid”; `Components/RadioGroup` vs “Radio Group”.
4. **Placeholder pages.** `Patterns/Overview` is a list with no stories. Foundations Overview is real for five families; Motion/Breakpoints/Icons/Disabled are absent. Products Overview is descriptive only.
5. **Components without Storybook documentation** (stable, documented, no story file): none remaining in the old “no file” sense for the large set — files were added. The remaining hole is **registry honesty**, not missing files, except planned components which correctly have no stories.
6. **Interaction-state grid** is used on Button-adjacent, Switch, Text Link, Command, Dialog, Date Picker. Checkbox, Radio, Input, Select have custom state stories, not the shared grid. Tooltip, Dropdown, Tabs, Table do not.

## Layer checklist

| Layer | Honest? | Notes |
|-------|---------|-------|
| Foundations | Partial | Five galleries. Motion, Breakpoints, Icons, Disabled, Density missing |
| Components | Partial | 51 story files. Registry and titles disagree |
| Patterns | No | Overview MDX only |
| Templates | Yes | Overview + AppShell + MultiStepFlowLayout |
| Products | Partial | Overview MDX; live screens live on the docs site |

---

# Recommended Build Order

Follow the stated strategy. Do not start Figma or Code Connect in this phase.

## 1. Storybook accuracy (now)

1. Fill `storybook` on every stable registry entry that already has a `*.stories.tsx`. Match the real `title:` string.
2. Normalize titles to the docs name (`Components/Dropdown Menu`, `Components/Date Range Picker`, `Components/Radio Group`) **or** rename docs to match Storybook — pick one rule and apply it everywhere.
3. Add docs pages (or explicitly mark “Storybook only”) for Date Picker, Field Description, Input Button Group, App Header, App Sidebar, Dashboard Grid.
4. Add `Patterns/Form field` (and optionally Scan search / Worklist table) stories that import production composites — no duplicate implementations.
5. Add foundation Storybook pages for Motion and Breakpoints from existing token sources (same pattern as Colors). Icons can share the live docs catalog.
6. Require `InteractionStateGrid` on remaining interactive controls (Checkbox, Radio, Input, Select, Tooltip trigger).

## 2. Templates (after Storybook titles are honest)

1. Extract **Detail View** from MPF patient/study detail (slots only; no domain copy).
2. Extract **Search Results** from Scan Search / worklist frames.
3. Decide **Form Page**: extract only if a non-wizard form repeats. Otherwise document “use MultiStepFlowLayout or Card + Form Field”.
4. Fix AppShell skip-link honesty (implement skip link **or** remove the claim).

## 3. Patterns (after or in parallel with template extraction)

1. Extract **Empty State** from Card empty story + dashboard/table empties.
2. Split **Feedback** into Empty / Loading / Error only if they repeat across products; otherwise keep Alert + Sonner + Skeleton as components and document the recipe.
3. Promote a product-agnostic **Search** pattern (toolbar + results slot) distinct from MPF Scan Search.
4. Keep Patients intake chrome as a Pattern that **composes** MultiStepFlowLayout — do not create a Patients template.

## 4. Foundations completion (after the catalog is honest)

1. Publish Motion and Breakpoints on `/docs/foundations` and Storybook (tokens already exist).
2. Put the color contrast matrix on the live Colors page.
3. Map or retire `--color-timeline-card-*`.
4. **Density** last among foundations: comfortable / compact / dense token overrides. Do not invent per-component density props.

## 5–6. After Nuclear is closed in code

Figma library replication, then Code Connect. Not this phase.

### Suggested sequencing of the first four tracks

| Order | Track | Why first |
|-------|-------|-----------|
| 1 | Registry ↔ Storybook title parity | Stops designers following dead links; cheapest correctness |
| 2 | Docs pages for orphan stories (Header, Sidebar, Date Picker, …) | One name, one URL, one story |
| 3 | Pattern Storybook stories for already-complete patterns | Matches strategy item 1 without new UI |
| 4 | Motion + Breakpoints Storybook + live docs | Foundations that already exist in CSS |
| 5 | Detail View + Search Results templates | Unblocks the next product without forking MPF pages |
| 6 | Empty State (+ Search pattern if needed) | Highest-frequency missing recipe |
| 7 | Color contrast on live Colors | Accessibility contract designers can see |
| 8 | Density foundation | Only after spacing/type and table/form patterns are stable |
