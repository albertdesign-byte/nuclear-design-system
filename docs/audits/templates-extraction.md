# Templates extraction report

**Date:** 2026-08-14  
**Scope:** Code templates only. No Figma. No Code Connect.  
**Rule:** Extract only from existing production screens. Do not invent layouts. No product-named templates.

Production screens audited:

- MPF Portal: Dashboard (`src/components/examples/dashboard-screen.tsx`, Scan Search in `scan-search-section.tsx`) — 1 live userflow screen, 3 tabs
- Patients: 19 intake screens under `src/components/docs/userflow/patients/` — all compose `MultiStepFlowLayout`

---

## SearchResults — extracted

**Status:** Published  
**Code:** `src/components/search-results/`  
**Docs:** `/docs/templates/search-results`  
**Storybook:** `Templates/SearchResults`

### Source screens

| Screen | Path | What was extracted |
|--------|------|--------------------|
| MPF Dashboard → Scan Search tab | `src/components/examples/scan-search-section.tsx` consumed by `dashboard-screen.tsx` | Outer stack, toolbar row (title + outline action), search slot, optional results slot |

This is the only production search-results layout. Worklist tables on My info / My Reports have no in-tab search toolbar; they stay the **Worklist table** pattern. Header `GlobalSearchBar` is AppShell chrome, not this template.

### Slots (from the source, not invented)

| Slot | Source structure | Product fills with |
|------|------------------|--------------------|
| `SearchResults` | `flex flex-col gap-[var(--space-stack-md)]` | Regions below |
| `SearchResultsToolbar` | `flex flex-wrap items-center justify-between` | Heading + outline Button |
| `SearchResultsSearch` | Direct child under the toolbar | `GlobalSearchBar` |
| `SearchResultsResults` | Rendered only after search | `DataTable` (Worklist table pattern) |

No filters slot. The source screen has none.

### Reuse

- Components: Button, Global Search Bar, Data Table
- Patterns: Scan search (recipe), Worklist table (results body)
- Parent template: AppShell (Scan Search is a tab inside AppShell, not a standalone page)

### What stayed in the product screen

Copy (“Search scan requests”, “Create new scan request”), query logic, scan-request columns, and when the results region mounts.

`ScanSearchSection` now composes `SearchResults`.

---

## Detail View — not extracted

**Status:** Coming Soon (`href: "#"`, no story)

### Screens checked

| Candidate | Why it is not Detail View |
|-----------|---------------------------|
| MPF Dashboard tabs (My info / Scan Search / My Reports) | Workspace switcher inside AppShell. Already covered by AppShell + Workspace Tabs. Not an entity record. |
| `Tabs` docs preview (Summary / Labs / Notes) | Component documentation, not a product route |
| `/examples/patient-record` (`patient-record-screen.tsx`) | Example only. Header + sections, **no tabs**. Uses non-token Tailwind (`border-border`, `bg-card`, `gap-6`). Not a production MPF/Patients screen |

There is no MPF patient/study/SRID detail page in this repo. Extracting PageHeader + Tabs + Card sections would invent a layout. Forbidden.

Revisit when a second product ships an entity detail screen. Then extract slots only; no domain copy.

---

## Form Page — should not exist

**Status:** Removed from the templates catalog (not Coming Soon)

### Evidence

1. All 19 Patients screens are wizard steps: `MultiStepFlowLayout` + Back + Continue. Insurance, Home Address, Deposit, and other multi-field screens are still steps, not standalone form pages.
2. MPF Dashboard has no form page.
3. `PatientRecordScreen` is the only header + form + submit layout, and it is a single non-production example.

Creating Form Page would duplicate MultiStepFlowLayout.

**Use instead:** MultiStepFlowLayout for guided flows. Card + Form Field for an isolated field group. Revisit only if a non-wizard form repeats across products (for example agent profile edit and clinic settings).

---

## Published templates after this phase

| Template | Source | Storybook |
|----------|--------|-----------|
| AppShell | MPF Dashboard | `Templates/AppShell` |
| MultiStepFlowLayout | All 19 Patients screens | `Templates/MultiStepFlowLayout` |
| SearchResults | MPF Scan Search tab | `Templates/SearchResults` |
| Detail View | None | Coming Soon |
