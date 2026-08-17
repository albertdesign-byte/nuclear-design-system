# Nuclear Design System — Product-design gap analysis

**Date:** 2026-08-14  
**Updated:** 2026-08-14 — FDN-01 reclassified after Typography Strategy was documented as an intentional dual-typeface decision.  
**Scope:** Product-design audit of Foundations, Components, Patterns, Templates, Documentation, Accessibility, Figma parity, and Storybook parity.  
**Out of scope:** Architecture, token-pipeline design, and implementation. This document does not propose refactors.

---

## How to read this audit

Each gap is a **product** mismatch: what designers, writers, and consuming teams can see and use today versus what a complete Medmo design system should offer.

**Current state** is observed in the live docs site, Storybook, Figma account, and shipped UI — not in the July 2026 inventory/roadmap, which lag the product.

**Expected state** is the designer-facing contract implied by brand language, accessibility principles, the documented layer model (Foundations → Components → Patterns → Templates → Products), and WCAG 2.1 AA.

Severity:

| Severity | Meaning |
|----------|---------|
| **Critical** | Blocks a correct visual identity, accessibility bar, or designer workflow today |
| **High** | A documented layer or catalog item is missing or misleading; teams will invent local solutions |
| **Medium** | Incomplete coverage that will produce inconsistency as products scale |
| **Low** | Polish, planned items without strong product evidence, or secondary surfaces |

---

## Executive summary

Nuclear already ships a usable component catalog, live foundation pages for core visual language, Form Field Patterns, Patients and MPF Portal product screens, and a docs theme toggle. The system is **not** yet a complete product-design system.

The largest product gaps are:

1. **No Figma library in the product.** Every component `figma` field is empty. There is no Code Connect map. Designers cannot open a canonical Figma source from docs.
2. **Patterns and Templates are no longer empty.** Patterns are extracted from live screens. **AppShell** and **MultiStepFlowLayout** are published Templates. Detail View, Search Results, and Form Page remain Coming Soon. Product screens still own copy and routing; they must consume templates for page structure.
3. **Storybook and docs disagree.** The component registry names Storybook entries that do not exist. Date Picker exists in Storybook but not as a documented component. Payment Form and Deposit Summary are labeled Patterns in Storybook and Components in docs.
4. **Accessibility contract is incomplete in the product.** Muted text fails AA at caption size; App Shell claims a skip link it does not provide; reduced-motion is only partially honored; live Color docs do not show the contrast matrix.

IBM Plex Sans Condensed versus Poppins is **not** a product identity gap. Live Typography Strategy documents a dual-family model: IBM Plex for Design System documentation chrome, Poppins for product UI. See FDN-01.

| Area | Critical | High | Medium | Low |
|------|----------|------|--------|-----|
| Foundations | 0 | 3 | 4 | 2 |
| Components | 1 | 5 | 3 | 1 |
| Patterns | 0 | 4 | 1 | 0 |
| Templates | 0 | 1 | 1 | 0 |
| Documentation | 1 | 3 | 3 | 1 |
| Accessibility | 2 | 3 | 3 | 0 |
| Figma parity | 1 | 1 | 1 | 0 |
| Storybook parity | 1 | 3 | 2 | 0 |

---

## Foundations

### FDN-01 — Brand Language still contradicts the documented typography strategy

- **Reclassification:** Originally Critical (“official typeface is not the typeface of the UI”). The dual-family split is an intentional decision, now documented on live Typography Foundations (`Typography Strategy`, 2026-08-14). It is not a High or Critical identity failure.
- **Current state:** Live `/docs/foundations/typography` states IBM Plex Sans Condensed is for Design System documentation only (navigation, sidebar, docs content, guidelines, educational material, DS chrome). Poppins is the canonical product typeface (components, product interfaces, real screens, application UI). Semantic product roles already resolve to Poppins. Brand Language (`docs/design-system/principles/brand-language.mdx`) still names IBM Plex Sans Condensed as the only interface family and forbids replacing it in the application.
- **Expected state:** Brand Language matches Typography Strategy: Poppins for product UI, IBM Plex for documentation chrome. Designers using Foundations are not told to put IBM Plex on components.
- **Severity:** Low
- **Recommendation:** Sync Brand Language (and any remaining inventory/roadmap lines) with Typography Strategy. Do not treat IBM Plex versus Poppins as an open product-identity decision.

### FDN-02 — Motion, breakpoints, opacity, and z-index exist as language but not as live foundations

- **Current state:** Motion, breakpoints, opacity, and z-index tokens exist and load at runtime. Live Foundations navigation only lists Colors, Typography, Spacing, Radius, Shadows, Icons, and Disabled State. Designers opening `/docs/foundations` cannot learn duration, easing, overlay stacking, or layout breakpoints.
- **Expected state:** Every foundation that components already consume has a live page with values, do/don’t, and product examples (dialog overlay vs popover, hover vs page transition, compact vs wide layout).
- **Severity:** High
- **Recommendation:** Publish Motion, Breakpoints, Opacity, and Z-Index as first-class foundation pages with the same specimen quality as Spacing and Shadows.

### FDN-03 — Color docs omit the contrast contract designers need

- **Current state:** A contrast matrix exists (including muted text at 4.01:1, marked for large text only). The live Colors page shows palettes and semantic swatches. It does not show pairings, ratios, or “do not use muted on caption.”
- **Expected state:** Color foundations show approved text-on-surface pairs, AA/AAA, and forbidden pairs (muted on 12px caption, placeholder as the only label, etc.).
- **Severity:** High
- **Recommendation:** Add a Contrast section to live Colors with the matrix, large-vs-normal text rules, and examples of legal vs illegal muted usage.

### FDN-04 — Density is a brand requirement with no foundation

- **Current state:** Brand Language cites Linear-style controlled density and long clinical sessions. Card docs mention “recommended density.” There is no Density foundation, no compact/default/comfortable guidance, and no table vs form density rules.
- **Expected state:** A Density foundation that tells product teams how tight dashboards, forms, and Patients mobile views may be — including min control height and when not to compress clinical data.
- **Severity:** High
- **Recommendation:** Define density as a product decision (default + optional compact for MPF tables). Document it next to Spacing, with examples from Patients and MPF Portal.

### FDN-05 — No data-visualization color or type language

- **Current state:** Products include dashboards and operational views. There are no chart color tokens, sequential/diverging palettes, or rules for axes, legends, or empty charts. Brand Language says Medmo is not a colorful analytics product, but does not say how necessary charts should look.
- **Expected state:** If dashboards remain in MPF Portal, Foundations include a restrained viz palette, null/empty chart treatment, and a ban on decorative gradients — aligned with “few colors, information first.”
- **Severity:** Medium
- **Recommendation:** Decide whether charts are in-system. If yes, publish a small viz foundation (status series + neutrals). If no, document “no charts in Nuclear; product-owned and reviewed case by case.”

### FDN-06 — Interaction language is implied, not taught

- **Current state:** Hover, focus, active, and disabled appear in component CSS and a Storybook interaction grid. There is no Interaction / State foundation covering duration, easing, hover vs selected vs current, and disabled vs read-only.
- **Expected state:** Designers can look up the five interaction states once and apply them to every new control, including focus-ring color (`--color-focus-ring`) and disabled opacity.
- **Severity:** Medium
- **Recommendation:** Add an Interaction States foundation (or a States chapter under Colors + Motion) with default / hover / focus / active / disabled / loading specimens.

### FDN-07 — Icon size in foundations vs icon size in the UI

- **Current state:** Iconography foundations define semantic sizes (`--icon-sm` and related tokens). Production UI still uses Tailwind `size-4`, `size-3.5`, and `size-3` on Data Table, Dropzone, Command, Chip, App Footer, Date Range Picker, Accordion, and others. Specimens and real screens will not match.
- **Expected state:** Every icon in a component preview uses the published icon scale. Designers specifying 16px/`icon-sm` get that size in product.
- **Severity:** Medium
- **Recommendation:** Treat icon scale as a visual QA checklist on the next component pass. Do not add a second unofficial size vocabulary in Figma or docs.

### FDN-08 — Timeline Card colors sit outside the semantic color story

- **Current state:** Timeline Card uses dedicated `--color-timeline-card-*` surfaces that are not part of the semantic color contract shown on the Colors page. Designers cannot find “timeline card background” next to `surface`, `success`, and `error`.
- **Expected state:** Either Timeline Card uses existing surface/border tokens, or Colors documents a named timeline/status-track role.
- **Severity:** Medium
- **Recommendation:** Add Timeline Card to the semantic color map or retire the special colors in favor of existing surfaces.

### FDN-09 — Dark mode is available in docs chrome, not explained as a foundation

- **Current state:** Docs header includes a light/dark toggle and ThemeProvider is connected. Live Colors shows some semantic tokens; there is no Dark Mode foundation covering surfaces, shadows, and when products must support dark.
- **Expected state:** A clear product rule: dark mode is supported / docs-only / not for clinical Patients. Shadow and color pages show both themes side by side.
- **Severity:** Low
- **Recommendation:** Publish a one-page Dark Mode decision in Foundations so product teams stop guessing whether Patients must ship dark.

---

## Components

### CMP-01 — Date Picker is a real component; Calendar is “Coming Soon”; docs only list Date Range Picker

- **Current state:** `DatePicker` ships with Storybook stories (`Components/DatePicker`). Live docs register **Date Range Picker** and point its Storybook field at `Components/DatePicker`. **Calendar** is a planned sidebar item with `href: "#"`. Designers cannot find single-date selection in the component index.
- **Expected state:** Single-date, date-range, and optional standalone calendar are named, documented, and linked to the correct stories. Planned Calendar is not advertised if Date Picker already covers the need.
- **Severity:** Critical
- **Recommendation:** Promote Date Picker to a documented component. Decide whether Calendar is a separate surface or an internal part of Date Picker / Date Range Picker. Stop mapping Date Range Picker docs to Date Picker stories.

### CMP-02 — Shipped components missing from the catalog

- **Current state:** The following exist as production components but have no live docs entry: Date Picker, Input Button Group, Field Description, App Header, App Sidebar, Dashboard Grid. Designers using the catalog will rebuild or copy from product screens.
- **Expected state:** Every reusable component in `src/components` is either documented as stable, explicitly marked product-only, or removed from the shared kit.
- **Severity:** High
- **Recommendation:** Add docs pages for Date Picker, Input Button Group, and Field Description immediately (they are form language). Classify App Header / App Sidebar / Dashboard Grid as Layout components or as App Shell parts — but name them once.

### CMP-03 — Planned components occupy the catalog without product definition

- **Current state:** Calendar, Attachment, Breadcrumb, Bubble, and Aspect Ratio appear as Coming Soon. Breadcrumb is the only one with a clear navigation job. Attachment overlaps Dropzone. Bubble has no documented product thread. Aspect Ratio is a layout primitive, not a Medmo pattern.
- **Expected state:** Coming Soon items have a product job, a related screen, and a Figma intent — or they are not in the sidebar.
- **Severity:** High
- **Recommendation:** Keep Breadcrumb (Patients and MPF nested views need it). Fold Attachment into Dropzone + Chip guidance. Remove or park Bubble and Aspect Ratio until a real screen needs them.

### CMP-04 — Payment Form and Deposit Summary are product composites in the component catalog

- **Current state:** Both are documented as Components. Storybook files them under **Patterns/**. They carry Stripe/checkout and pricing-breakdown meaning that other products may not share.
- **Expected state:** Designers know whether these are Nuclear components, checkout patterns, or Patients-only product modules.
- **Severity:** High
- **Recommendation:** Relabel in the catalog: either move them to Patterns (checkout) or to Products/Patients, and match Storybook titles to that decision.

### CMP-05 — App Shell claims landmarks and skip link; the shell does not offer a skip link

- **Current state:** Component registry accessibility for App Shell lists `landmarks` and `skip link`. The App Shell implementation has no skip-to-content control. Keyboard users in product previews start in chrome.
- **Expected state:** App Shell documentation matches the actual landmark and skip-link behavior, including a visible skip control on focus.
- **Severity:** High
- **Recommendation:** Add a skip link to the shell design (and docs) or remove the claim until the behavior exists. Treat this as a product a11y requirement, not a docs typo.

### CMP-06 — Icon-only and small controls are not a consistent product family

- **Current state:** Button documents icon buttons and groups. Chip, Command, Select, and Data Table close/sort icons use ad-hoc sizes. There is no Icon Button as a named catalog item (roadmap still lists it as pending).
- **Expected state:** One icon-button size, hit area, and tooltip rule reused in tables, chips, and search.
- **Severity:** Medium
- **Recommendation:** Publish Icon Button as a Button variant in docs (already partly there) and require every icon-only control in other components to match that specimen.

### CMP-07 — Empty, loading, and error treatments live inside components, not as shared product language

- **Current state:** Card, Command, Global Search Bar, and Skeleton each hint at empty or loading. There is no shared empty illustration, title/body/CTA structure, or table-empty vs search-empty distinction at the component layer.
- **Expected state:** Components show default empty/loading slots that match the (future) Empty States and Feedback patterns.
- **Severity:** Medium
- **Recommendation:** Until Empty States ships as a pattern, add a short “Empty and loading” block on Table, Data Table, Card, Command, and Dropzone with the same copy tone.

### CMP-08 — Component docs quality is uneven

- **Current state:** Button, Input, Select, Checkbox, Card, Alert, Dialog, and App Footer have deep live pages (guidelines, healthcare examples, a11y). Several others are thinner. MDX under `docs/design-system/components/` covers only Button, Card, Tooltip, Dropdown Menu, and App Footer — a different, Spanish-leaning track.
- **Expected state:** Every stable component has the same designer-facing sections: purpose, variants, states, do/don’t, accessibility, and related patterns.
- **Severity:** Medium
- **Recommendation:** Use Button / Form Field Patterns as the quality bar. Bring Table, Data Table, Tabs, Timeline, and App Shell up to that bar before adding new primitives.

### CMP-09 — Aspect Ratio / Bubble have weak product pull

- **Current state:** Both are listed Coming Soon with generic descriptions.
- **Expected state:** Catalog only promises components a Medmo product will use in the next cycle.
- **Severity:** Low
- **Recommendation:** Drop them from navigation until a Patients or MPF screen requires them.

---

## Patterns

### PAT-01 — Only Form Field Patterns is published

- **Current state:** Patterns overview lists Form Field Patterns as live. Forms, Search & Command, Empty States, Navigation, Data Display, and Feedback are Coming Soon cards. Products already contain forms beyond a single field, command palettes, search bars, tables, alerts, and toasts.
- **Expected state:** Each recurring composition used in Patients and MPF Portal is a pattern page: anatomy, slots, do/don’t, and links to components — without product copy.
- **Severity:** High
- **Recommendation:** Next pattern pages, in product order: Empty States, Search & Command (Global Search Bar + Command already exist), Feedback (Alert + Sonner + Spinner + Skeleton), Data Display (Table / Data Table / Card), Navigation (App Shell + footer + future breadcrumb).

### PAT-02 — Search and Command exist as components without a pattern

- **Current state:** Global Search Bar and Command are documented components. There is no pattern for when to use a top-bar search vs a command dialog vs in-page filter, or how empty and grouped results should read.
- **Expected state:** A Search & Command pattern that products can copy for MPF search and Patients lookup.
- **Severity:** High
- **Recommendation:** Write the pattern from the two existing components and the MPF Portal search screens. Do not invent a third search primitive.

### PAT-03 — Empty States is missing while brand language already specifies the tone

- **Current state:** Brand Language gives empty-state voice (“No hay pacientes registrados. Agrega el primero.”). Navigation marks Empty States Coming Soon. Card and Command mention empty locally.
- **Expected state:** One empty-state pattern: illustration or icon, title, body, primary action, and when to use vs disabled controls (Disabled State docs already say to prefer guidance over disabled buttons).
- **Severity:** High
- **Recommendation:** Publish Empty States using Card + Button + text roles. Provide English product copy (see DOC-04) and Spanish only if a product locale requires it.

### PAT-04 — Navigation pattern is missing despite App Shell, Footer, Tabs, and planned Breadcrumb

- **Current state:** Layout and navigation components exist in isolation. There is no pattern for sidebar vs header vs footer vs tabs vs breadcrumbs on Patients mobile vs MPF desktop.
- **Expected state:** A Navigation pattern that maps IA to components and forbids competing nav on one screen.
- **Severity:** High
- **Recommendation:** Document navigation from App Shell + App Footer + Tabs + (planned) Breadcrumb, using Patients and MPF Portal as examples labeled as product, not as the pattern itself.

### PAT-05 — Storybook Patterns overview misfiles product composites

- **Current state:** Storybook Patterns/Overview lists Deposit Summary, Payment Form, and Form Field Patterns as documented patterns. Live docs only treat Form Field Patterns as a pattern.
- **Expected state:** Pattern names match across Storybook, live docs, and the sidebar.
- **Severity:** Medium
- **Recommendation:** Align the three surfaces to a single list. Until then, Storybook should not present checkout modules as the pattern catalog.

---

## Templates

### TPL-01 — Remaining template types are unpublished

- **Current state:** AppShell and MultiStepFlowLayout are published under `/docs/templates` and Storybook `Templates/`. MultiStepFlowLayout is a generic multi-step workflow layout, not a Patients template. Detail View, Search Results, and Form Page remain Coming Soon.
- **Expected state:** Recurring page types that still live only in product screens (detail, search results, single-page form) exist as templates with named slots.
- **Severity:** Medium
- **Recommendation:** Extract Detail View and Search Results from MPF Portal screens. Do not classify reusable shells as Products.

### TPL-02 — Product screens must consume templates, not own them

- **Current state:** Products docs say products own copy, validation, and routing. Patients intake now composes MultiStepFlowLayout; MPF operational screens compose AppShell. Remaining unpublished page types still own structure in Products.
- **Expected state:** A designer can build a new flow from a template, then apply product copy — without forking layout padding and header composition. Patient Intake, Provider Onboarding, Clinic Registration, Radiology Workflow, and Insurance Enrollment all compose MultiStepFlowLayout.
- **Severity:** High
- **Recommendation:** Keep domain workflows in Products. Keep reusable page structures in Templates.

---

## Documentation

### DOC-01 — Two documentation tracks tell different stories

- **Current state:** Live App Router docs (English) are what the docs site serves. `docs/design-system/` MDX (largely Spanish, last updated 2026-07-17) still describes Geist, 19 uncustomized primitives, 0 patterns/templates, brand not applied, and Technical Setup pending. Inventory and roadmap contradict the live catalog.
- **Expected state:** One designer-facing source of truth. Historical audits are dated and linked as archive, not as current inventory.
- **Severity:** Critical
- **Recommendation:** Banner or retire `inventory.mdx` and `000-roadmap.mdx` as historical. Point all “current state” questions at live `/docs/*`. Keep MDX only if it is synced in the same release as the live page.

### DOC-02 — Installation and Theming in the site nav do not exist

- **Current state:** Docs section nav includes Installation and Theming, both linking into the Button page (`#installation`, `#usage`). There is no system-level installation or theming guide for consuming teams.
- **Expected state:** Installation explains how a Medmo product uses Nuclear. Theming explains light/dark, brand color, and what must not be overridden.
- **Severity:** High
- **Recommendation:** Replace those nav items with real pages, or remove them until the pages exist. Do not deep-link to Button as a stand-in for the system.

### DOC-03 — Foundations live pages do not match the foundation set

- **Current state:** Eleven foundation CSS packages load (colors, typography, spacing, breakpoints, radius, shadows, motion, opacity, z-index, iconography). Seven foundation topics are in the live nav (including Disabled State, which is a guideline, not a token pack).
- **Expected state:** Docs index equals the visual language designers are allowed to use.
- **Severity:** High
- **Recommendation:** Same as FDN-02: add the missing live pages. Optionally list Disabled State under Foundations/Guidelines so it is not confused with a token scale.

### DOC-04 — Voice and locale are split

- **Current state:** Brand Language and accessibility principles are in Spanish, with Spanish UI copy examples. Live component docs, Storybook, and product previews are in English. Empty-state tone is specified in Spanish only.
- **Expected state:** A single UI voice guide in the language products ship, plus locale rules if Patients/MPF are bilingual.
- **Severity:** Medium
- **Recommendation:** Publish an English Voice & Tone page for UI strings (actions, errors, empty, confirmations) and state whether Spanish is documentation-only or a product locale.

### DOC-05 — Registry metadata over-promises Storybook and Figma

- **Current state:** Almost every stable component lists a `storybook:` title. Many of those titles have no `*.stories.tsx` file (Tabs, Accordion, Sonner, Spinner, Skeleton, Chip, Table, Data Table, Timeline, Popover, App Shell, Logo, and others). Every `figma:` field is `""`.
- **Expected state:** Docs only link to stories and Figma nodes that exist. Empty means “not published,” not a fake path.
- **Severity:** Medium
- **Recommendation:** Until parity work happens, hide empty Figma links and drop Storybook links that 404. The catalog should be trusted.

### DOC-06 — Component MDX coverage is a fragment

- **Current state:** Five MDX component files vs ~44 live component pages. Designers searching the repo vs the site will see different libraries.
- **Expected state:** Either MDX is generated from the live pages, or it is not offered as component documentation.
- **Severity:** Medium
- **Recommendation:** Treat live `/docs/components/*` as canonical. Archive or sync the five MDX files.

### DOC-07 — Principles are not linked from the live docs IA

- **Current state:** Brand Language and Accessibility live under `docs/design-system/principles/`. The live site IA is Introduction, Foundations, Components, Patterns, Templates, Products. Principles are easy to miss.
- **Expected state:** Brand, accessibility, and voice are reachable from the docs home and from Foundations.
- **Severity:** Low
- **Recommendation:** Add a Principles section to the live site or fold Brand Language into Foundations/Typography and Colors intros.

---

## Accessibility

### A11Y-01 — Muted text fails WCAG AA at the sizes it is used

- **Current state:** Contrast matrix records `neutral-500` on `neutral-50` at **4.01:1**, labeled AA for large text only. Semantic muted text is for placeholders, hints, and tertiary information. Caption is `xs` (below large-text size). Placeholder and helper text are typically `body-small` / `caption`, not large text. Using muted there fails 4.5:1.
- **Expected state:** All default placeholder, helper, and caption colors meet AA at their actual size, or those roles use `text-secondary` (5.63:1) instead of muted.
- **Severity:** Critical
- **Recommendation:** Stop using muted for 12–14px UI text. Either darken muted to ≥4.5:1 or restrict muted to large/bold text and show that rule on the Colors page.

### A11Y-02 — Skip link and reduced-motion promises are not fully true in the product

- **Current state:** Accessibility principles require skip links, 44×44 touch targets, and `prefers-reduced-motion`. Motion CSS zeroes duration tokens under reduced motion; `src` has no additional reduced-motion handling, and third-party/animation utilities may still move. App Shell documents a skip link it does not render. Principles still mention `--color-ring`; runtime focus is `--color-focus-ring`.
- **Expected state:** Keyboard users skip chrome; motion-sensitive users get instant transitions everywhere; focus color in docs matches the ring they see.
- **Severity:** Critical
- **Recommendation:** Add skip link to App Shell (product behavior). Verify reduced motion against skeleton, dialog, and accordion motion. Replace `--color-ring` in principles with `--color-focus-ring`.

### A11Y-03 — Contrast matrix is not part of the designer workflow

- **Current state:** Pairings are encoded for engineering validation. Live Colors does not present them. There is no “check this pair” guidance on Badge, Alert, or Button danger.
- **Expected state:** Every semantic pair used in components is visible in Foundations and referenced from component a11y sections.
- **Severity:** High
- **Recommendation:** Surface the matrix on Colors and link to it from Alert, Badge, Button, and text-muted usage.

### A11Y-04 — Healthcare-specific a11y rules are not operationalized on components

- **Current state:** Principles require consistent date format, visible units, critical state via icon + color + text, copyable IDs, zoom to 200%, visible labels, and `aria-required`. Form Field Patterns covers visible labels and inline errors. Date Picker/Date Range, units inputs, and status badges do not all restate the clinical rules.
- **Expected state:** Date, unit, and status components show the healthcare a11y examples as the default specimen, not an appendix.
- **Severity:** High
- **Recommendation:** Add a “Clinical data” block to Date Picker, Date Range Picker, Input (units), Badge, Alert, and Table.

### A11Y-05 — Disabled State is documented; other states are not equally taught

- **Current state:** Disabled State is a full live foundation (native disabled, aria-disabled, hide vs disable). Loading, read-only, invalid, and empty are scattered across Input/Select docs.
- **Expected state:** Same quality of guidance for invalid, loading, read-only, and empty as for disabled — especially for medical forms that must not look like they submitted.
- **Severity:** Medium
- **Recommendation:** Extend the Disabled State page into a “Availability states” foundation, or add matching sections on Form Field Patterns.

### A11Y-06 — Touch targets and icon-only controls

- **Current state:** Principles: 44×44 mobile, 32×32 desktop, expanded hit area on Switch. Chip close icons and table sort icons are visually 12–16px without a documented hit area.
- **Expected state:** Every small control in specs and Storybook shows the padded hit area, especially Patients mobile.
- **Severity:** Medium
- **Recommendation:** Include hit-area diagrams on Chip, Data Table, Icon Button, and Day Toggle Group.

### A11Y-07 — Live region coverage is thin

- **Current state:** Spinner documents `role="status"` / `aria-live`. Alert registry mentions `role=alert`. Sonner/toasts and filter-result announcements are not consistently specified for designers.
- **Expected state:** Feedback pattern defines what is announced (save success, filter count, payment error) vs what is visual only.
- **Severity:** Medium
- **Recommendation:** When Feedback pattern is written, include a column: visual vs screen-reader announcement for Alert, Sonner, Spinner, and inline Field Error.

---

## Figma parity

### FIG-01 — Nuclear is not connected to a Figma library in the product

- **Current state:** Figma authentication works (Albert Design). `search_design_system` requires a file key. The component registry has **no Figma URLs**. There are no Code Connect files (`.figma.ts` / mappings). Designers cannot jump from a docs page to a Figma component, variable, or variant set.
- **Expected state:** Each stable component and each foundation token set maps to a published Figma library node. Docs show “Open in Figma.” Variables match color, type, space, radius, and shadow names.
- **Severity:** Critical
- **Recommendation:** Publish (or identify) the canonical Medmo / Nuclear Figma library. Fill `figma` on the registry with file and node links. Do not claim Figma parity until Button, Input, and Colors are linked.

### FIG-02 — No Code Connect, so design-to-code and code-to-design stay manual

- **Current state:** Zero Code Connect maps in the repo. Variant names in Storybook/docs (Button danger, Select sizes, Alert variants) have no guaranteed Figma twin.
- **Expected state:** Figma variants match component props for the core kit (Button, Input, Select, Checkbox, Alert, Dialog, Card, Badge).
- **Severity:** High
- **Recommendation:** After FIG-01, Code Connect the core kit only. Do not connect planned Calendar/Bubble first.

### FIG-03 — Token names in Figma are unknown to the docs

- **Current state:** Live Foundations teach CSS/semantic names (`--color-text-primary`, `--space-card`, `--text-h1-size`). Without a linked library, designers may still use raw hex `#242F50` or unofficial spacing.
- **Expected state:** Figma variables use the same semantic names as Foundations, including the documented dual-typeface rule (Poppins for product UI, IBM Plex Sans Condensed for documentation chrome).
- **Severity:** Medium
- **Recommendation:** When the library is linked, audit Figma variable names against live Colors, Typography, Spacing, Radius, and Shadows — especially primary `#242F50` vs semantic `action-primary`.

---

## Storybook parity

### SB-01 — Registry Storybook titles do not match the story catalog

- **Current state:** 27 `*.stories.tsx` files exist. Live registry assigns Storybook titles to most stable components, including many with **no story file** (Accordion, App Shell, Chip, Data Table, Date Range Picker, Logo, Popover, Scroll Area, Separator, Skeleton, Sonner, Spinner, Table, Tabs, Timeline, Timeline Card, Stage Flow Badge, User Profile Block, Dashboard Panel, and others). Clicking through from docs would fail or land on the wrong story (Date Range Picker → DatePicker).
- **Expected state:** Every stable component has a story, and the docs link is the real title. Planned components have no Storybook link.
- **Severity:** Critical
- **Recommendation:** Either add stories for every stable component or strip false `storybook` fields. Fix Date Range Picker vs Date Picker titles first.

### SB-02 — Foundations in Storybook are a stub

- **Current state:** `src/stories/foundations/Overview.mdx` is a layer description plus a token-contract comment. There are no Color, Type, Spacing, Shadow, Radius, or Icon galleries in Storybook.
- **Expected state:** Designers reviewing in Storybook can see the same foundation specimens as `/docs/foundations`, including dark theme.
- **Severity:** High
- **Recommendation:** Add Foundation stories or MDX galleries for Colors, Typography, Spacing, Icons, and Shadows. Motion and breakpoints can follow the live pages.

### SB-03 — Interaction states are not a catalog standard

- **Current state:** `InteractionStateGrid` exists and is used on a handful of stories (Button-adjacent, Switch, Text Link, Command, Dialog). Most stories do not show Default / Hover / Focus / Active / Disabled as a set.
- **Expected state:** Every interactive component story includes the five-state grid (and invalid/loading where relevant).
- **Severity:** High
- **Recommendation:** Make the interaction grid a required story for Inputs and Navigation. Add it to Checkbox, Radio, Select, Input, and Textarea next.

### SB-04 — Storybook has components the docs site does not, and the reverse

- **Current state:** Stories without a 1:1 docs page: Date Picker, Input Button Group. Docs without stories: see SB-01. Payment Form and Deposit Summary stories live under Patterns/; docs list them as Components.
- **Expected state:** One name, one layer, one Storybook title, one docs URL.
- **Severity:** Medium
- **Recommendation:** Same naming pass as CMP-01, CMP-02, and CMP-04. Update Storybook `title:` to match the registry after the product decision.

### SB-05 — Patterns, Templates, and Products Storybook overviews are placeholders

- **Current state:** Patterns/Templates/Products Overview MDX files describe intent. Form Field Patterns has no Storybook pattern story. Product overviews do not embed the live product screens.
- **Expected state:** Storybook either defers to the docs site for those layers or embeds the same examples.
- **Severity:** Medium
- **Recommendation:** Add a Form Field Patterns story. Templates overview lists AppShell and MultiStepFlowLayout as published. Link Products overview to Patients and MPF Portal docs routes.

---

## Suggested product order (no implementation)

If design leadership sequences this as a product backlog, the order that unblocks the most designer risk is:

1. **FIG-01** — Point the catalog at a real Figma library.
2. **A11Y-01 / A11Y-02** — Muted contrast and skip link / focus naming.
3. **CMP-01 / CMP-02 / SB-01** — Date Picker, missing catalog items, honest Storybook links.
4. **DOC-01 / DOC-02** — Retire stale inventory; real Installation/Theming or remove the nav. Include Brand Language sync with Typography Strategy (FDN-01, Low).
5. **PAT-01–04 then TPL-01** — Empty, Search, Feedback, Navigation patterns, then extract templates from existing product screens.
6. **FDN-02 / SB-02** — Motion, breakpoints, and foundation galleries.

---

## Method

Reviewed (2026-08-14):

- Live docs IA: `src/components/docs/config/navigation.ts`, `foundations-registry.ts`, `components-registry.ts`, products navigation
- Live pages: Foundations, Components, Patterns, Templates, Products
- Brand Language and Accessibility principles (`docs/design-system/principles/`)
- Stale inventory and roadmap (`docs/design-system/inventory.mdx`, `000-roadmap.mdx`, lastUpdated 2026-07-17)
- Typography Strategy on live `/docs/foundations/typography` (reclassified FDN-01; dual-family is intentional)
- Brand Language still names IBM Plex as the only application family
- Contrast matrix (`foundations/colors/contrast-matrix.ts`) vs Colors live page
- Storybook: 27 component story files, interaction grid, Foundations/Patterns/Templates/Products Overview MDX
- Figma MCP: authenticated; no file keys or Code Connect in the product
- Shipped but undocumented components under `src/components/`

Not done: pixel comparison against a Figma file (none linked), automated WCAG crawl, or architecture review.
