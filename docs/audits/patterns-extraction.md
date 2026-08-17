# Patterns extraction — Patients and MPF Portal

**Date:** 2026-08-14  
**Status:** Proposal. Do not implement from this document.  
**Rule:** Extract only compositions that already repeat on real product screens. Do not invent new patterns.

This proposal is for the Patterns layer. Templates (full page types) are named only when a layout already repeats; they are not specified here as new inventions.

---

## Method

Reviewed every published product screen:

| Product | Source | Screens |
|---------|--------|---------|
| **Patients** | `/docs/userflow/patients/*` | 19 live screens (Contact Information and Review & Submit are Coming Soon and were not used) |
| **MPF Portal** | `/docs/userflow/nuclear/dashboard` | 1 live screen: Dashboard, including My info, Scan Search, and My Reports tabs |

A composition is a **pattern** here only if it appears on **two or more** of those screens, or on two distinct Dashboard tabs that share the same arrangement.

**Not used as evidence**

- Component “real screen” previews (Timeline, Command, Dashboard Panel wrap) unless the same arrangement is on a published product route
- `PatientRecordScreen` example (not a Patients or MPF Portal product screen)
- Planned nav items with no screen: Contact Information, Review & Submit

Form Field Patterns is already published. This document does not redefine it; product screens reuse it.

---

## Screen inventory

### Patients (intake)

Every live Patients screen uses the same chrome: `MultiStepFlowLayout` (logo + locale), a step body, full-width Continue, and `AppFooter variant="patients"`. Desktop adds a progress bar and a 42rem content column.

| Screen | Arrangement |
|--------|-------------|
| Date of Birth | Single labeled date field. Continue disabled until a date is set. No Back on this step. |
| Welcome | Orientation copy, checklist, ordered-scans box. Primary is “Start” (mobile) / “Continue” (desktop). |
| Deposit | Intro + policy alert + cost summary + payment fields. Continue disabled until card fields are filled. |
| Insurance Details | Multi-field form. Skip in helper copy. Empty form may continue; partial form must complete provider + member ID. |
| Insurance Card | Two dropzones (front/back). Skip in helper copy. Continue allowed with no files if types are valid. |
| Share Results | Radio consent + “Learn what this means” dialog. Continue disabled until a choice. |
| Height and Weight | Labeled unit fields (ft / in / lbs) with inline errors. Continue disabled until all valid. |
| Prescription | Single required dropzone. Continue disabled until a valid file. |
| General Question | Prompt as title + required textarea. |
| Home Address | Multi-field address + checkbox that reveals a second address panel. |
| Email | Optional email with validation. Continue allowed when empty or valid. |
| Availability | Info alert + day toggles + time checkboxes. Continue disabled until ≥1 day and ≥1 time. |
| Availability Details | Optional textarea. Continue always enabled. |
| COVID Screening | Three-option radio. Continue disabled until a choice. |
| Assistance | Checkbox group, “select all that apply,” exclusive “None.” Continue disabled until ≥1. |
| Assistance Details | Optional textarea. Continue always enabled. |
| Last Mammogram | Three-option radio. Branches to date and/or location. |
| Mammogram Date | Required date field (branch). |
| Mammogram Location | Optional textarea (branch). Continue always enabled. |

### MPF Portal (operations)

| Screen / tab | Arrangement |
|--------------|-------------|
| Dashboard chrome | `AppShell` + sidebar + header (title, global search, user profile). Search hides on Scan Search. |
| My info | Segmented tabs. Two-column grid of titled tables + one full-width table. Empty tables keep headers and a `0` footer. |
| Scan Search | Section title + outline “Create new scan request” + search bar. Results table only after a search. |
| My Reports | Single titled empty table (headers + `0` footer). |

---

## Recurring layouts (observed)

These are the page-level arrangements. They belong in Patterns until Templates are extracted from the same screens.

```
Patients (every live screen)
├── Header: Logo + locale (desktop: + progress)
├── Step body (max 42rem on desktop)
│   ├── Back (except Date of Birth)
│   ├── Title + optional helper + optional emphasis
│   ├── Input or content
│   └── Continue (full width, size xxl)
└── Patients footer

MPF Dashboard (the only live MPF screen)
├── Sidebar
├── Header: page title + optional search + profile
└── Main: segmented tabs
    ├── Worklist grid of tables  OR
    └── Search header + search + optional results table
```

---

## Proposed patterns

Promote these to `/docs/patterns`. Names match what the screens already do.

| # | Name | Product | Occurrences |
|---|------|---------|-------------|
| 1 | Patients intake chrome | Patients | All 19 screens |
| 2 | Patients step | Patients | All 19 screens |
| 3 | Form field | Patients | Already published; reused on field screens |
| 4 | Exclusive choice | Patients | COVID, Share Results, Last Mammogram |
| 5 | Multi-select choice | Patients | Assistance, Availability times |
| 6 | Optional skip | Patients | Email, Insurance, Insurance Card, Availability Details, Assistance Details, Mammogram Location |
| 7 | Follow-up details | Patients | Availability Details, Assistance Details, Mammogram Location |
| 8 | Document upload | Patients | Insurance Card, Prescription |
| 9 | Conditional reveal | Patients | Home Address (second address), Last Mammogram (date/location branch) |
| 10 | In-step notice | Patients | Deposit, Availability |
| 11 | Operational app chrome | MPF | Dashboard (all tabs) |
| 12 | Workspace tabs | MPF | My info / Scan Search / My Reports |
| 13 | Worklist table | MPF | Active scans, exceptions, open tasks, reports, search results |
| 14 | Scan search | MPF | Scan Search tab |

---

### 1. Patients intake chrome

**Purpose:** Frame every Patients intake step with brand, locale, progress (desktop), and legal/support footer so the flow feels like one product, not a stack of unrelated forms.

**Structure**

1. `MultiStepFlowLayout` on muted surface
2. Header: Medmo lockup (start) + locale (end). Desktop: globe on locale; progress bar under header
3. Main: padded column. Desktop: `max-width: 42rem`, centered
4. `AppFooter` `variant="patients"` (brand, about, contact, copyright)

**Components used:** `MultiStepFlowLayout`, `MultiStepFlowLayoutHeader`, `MultiStepFlowLayoutLocale`, `MultiStepFlowLayoutProgress` (desktop), `MultiStepFlowLayoutMain` / `MultiStepFlowLayoutMainDesktop`, `MedmoLogoLockup`, `AppFooter`

**Variations**

- **Mobile:** no progress bar; locale without globe
- **Desktop:** progress under header; globe on locale; narrower content column
- Progress value changes per step (product-owned; chrome only displays it)

**Accessibility considerations**

- Shell main is a `main` landmark; header is a `header`
- Progress is a `progressbar` with `aria-valuenow` 0–100
- Footer links include privacy and contact; keep them reachable after the step actions
- Locale is currently text, not a language control — do not present it as a menu until it is one

---

### 2. Patients step

**Purpose:** One question or task per screen: go back, understand why, answer, continue. Continue is always the same primary control.

**Structure**

1. Back — ghost `sm` button, chevron left, label “Back” (omitted on Date of Birth)
2. Intro — `h1` at title size; optional muted helper; optional semibold emphasis line
3. Body — fields in `MultiStepFlowLayoutCard` and/or `MultiStepFlowLayoutInputPanel`
4. Continue — `Button` primary, size `xxl`, `fullWidth`. Disabled until the step is valid, unless the step is optional

**Components used:** `Button` (ghost Back, primary Continue), `MultiStepFlowLayoutCard`, `MultiStepFlowLayoutInputPanel`, plus the field components of the step

**Variations**

| Variation | What changes | Screens |
|-----------|----------------|---------|
| **Packed** | Intro, fields, and Continue share one card (mobile especially) | Date of Birth, Insurance, Insurance Card, Prescription, Deposit |
| **Split** | Intro card → input panel → Continue outside | Email, Home Address, Availability, COVID, Assistance, Share Results, Mammogram, Height and Weight, General Question, follow-up details |
| **Orientation** | No fields; checklist + inset list; primary label “Start” on mobile | Welcome |
| **Required** | Continue disabled until valid | Most steps |
| **Optional** | Continue always enabled, or enabled when empty | See pattern 6 |

**Accessibility considerations**

- One `h1` per step; helper is not a second heading
- Back must be a real button (it is), not a text link, so it is a consistent history control
- Disabled Continue is not the only error signal — pair with `FieldError` / `aria-invalid` when the user has entered invalid data (Email, Height and Weight, dropzones)
- Full-width `xxl` Continue meets the 44px touch target used on Patients mobile

---

### 3. Form field

**Purpose:** Visible label, control, optional helper, optional inline error. Already documented at `/docs/patterns/form-field-patterns`.

**Structure:** Label above control → helper or format hint → `FieldError` when invalid. Placeholders never replace the label.

**Components used:** `Label`, `Input`, `Textarea`, `DatePicker`, `Select` (not used on live Patients screens), `FieldError`, `Checkbox` / `RadioGroup` when labeled as a field

**Variations observed on product screens**

- Single field (Email, Date of Birth, General Question, Mammogram Date)
- Stacked fields (Insurance, Address)
- Two-column row (City + State; Height ft + in; Payment expiry + CVV)
- Field with visible unit suffix beside the input (ft, in, lbs on Height and Weight) — **one screen only**; keep as a form-field variation, not a separate pattern
- Numeric filtering (`inputMode="numeric"`, digits-only on zip / height / weight)

**Accessibility considerations**

- `htmlFor` / `id` on every labeled control
- `aria-invalid` and `aria-describedby` pointing at `FieldError` when invalid
- Date placeholder `MM/DD/YYYY` matches the clinical date-format rule; keep format visible, not only in the picker
- Units (ft, in, lbs) stay visible next to the value

---

### 4. Exclusive choice

**Purpose:** The patient must pick exactly one answer before continuing. Used for screening, consent, and branching questions.

**Structure**

1. Patients step intro (question as `h1`, optional helper)
2. `RadioGroup` in an input panel
3. Each option: `label` wrapping `RadioGroupItem` + text
4. Continue disabled until a value is set

**Components used:** `RadioGroup`, `RadioGroupItem`, Patients step chrome

**Variations**

- **Binary + decline:** Yes / No / Prefer not to answer (COVID)
- **Consent:** I agree / I do not agree, with extra legal copy and a learn-more dialog (Share Results)
- **Branching:** I know the date / First mammogram / I don’t remember → later steps (Last Mammogram)

**Accessibility considerations**

- `RadioGroup` has an `aria-label` (or should be named by the `h1` via `aria-labelledby` — product currently uses `aria-label`)
- Visible labels on every option; do not rely on color
- “Prefer not to answer” is a first-class choice, not a skip link
- Consent copy stays in the intro; the radio group only captures the decision

---

### 5. Multi-select choice

**Purpose:** The patient may select more than one option. Continue requires at least one selection.

**Structure**

1. Intro includes “Select all that apply” when that is the rule (Assistance)
2. Vertical list of `label` + `Checkbox`
3. Optional exclusive option that clears the others (“None of the above”)
4. Continue disabled until `selected.length > 0`

**Components used:** `Checkbox`, `Label` (section label on Availability times), `DayToggleGroup` (days on Availability — same “pick several” job, different control)

**Variations**

- **Checkbox list** with exclusive “None” (Assistance)
- **Day toggles + checkbox times** on one step (Availability). Days use `DayToggleGroup`; times use the checkbox list. Continue needs both groups filled
- Helper under the times label: “Applies to all selected days…”

**Accessibility considerations**

- Each checkbox has a unique `id` and a visible label
- “None of the above” must not stay selected with other needs (product already clears it)
- `DayToggleGroup` needs an accessible name (`aria-label="Choose days"` is present)
- Do not mix radio and checkbox on the same question; exclusive questions use pattern 4

---

### 6. Optional skip

**Purpose:** The patient may leave the step empty and still continue. The UI says so in copy; it does not hide Continue or use a second “Skip” button.

**Structure**

1. Helper or emphasis line states that continuing without data is allowed
2. Sometimes an inline text button “you can continue” inside the helper (Insurance, Insurance Card)
3. Continue stays enabled when the form is empty
4. If the patient starts filling, validation may require a complete, valid subset

**Components used:** Patients step, native `button` styled as a text link (not `TextLink`), field components of the step

**Variations**

| Variation | Behavior | Screens |
|-----------|----------|---------|
| **Empty is valid** | Continue enabled; invalid value blocks | Email (empty or valid email) |
| **Skip in copy** | Inline “you can continue” runs the same action as Continue | Insurance, Insurance Card |
| **Optional details** | Emphasis: “If you do not have more details, you can continue.” Continue never disabled | Availability Details, Assistance Details, Mammogram Location |
| **Partial invalid** | Empty OK; if any insurance field is filled, provider + member ID required | Insurance Details |

**Accessibility considerations**

- Inline skip must be a `button` with focus ring (it is), not a fake link without an `href`
- Do not use disabled Continue to mean “optional” — that reads as blocked
- When skip is in a sentence, keep the surrounding sentence readable without the button styles
- Optional fields include “(optional)” in the label where used (apartment, group ID, details)

---

### 7. Follow-up details

**Purpose:** After a required choice or schedule, collect free-text context. Always optional on the live screens that use it.

**Structure**

1. Back
2. Title “Add … details”
3. Muted helper with examples
4. Emphasis: can continue without more details
5. Labeled optional `Textarea` in an input panel
6. Continue always enabled

**Components used:** `Label`, `Textarea`, Patients step

**Variations**

- Availability details (schedule caveats)
- Assistance details (visit needs)
- Mammogram location (where the last exam happened)

Same structure; only copy and placeholder change. General Question is **not** this pattern: that textarea is required and the title is the question.

**Accessibility considerations**

- Label includes “(optional)”
- Placeholder is an example, not the label
- `aria-label` is duplicated on some textareas; prefer the visible `Label` + `id` only
- Do not require this step to unlock Continue

---

### 8. Document upload

**Purpose:** Attach a clinical document (insurance card or prescription) with type validation.

**Structure**

1. Step intro (why the file is needed)
2. One or two `Dropzone`s with a visible label
3. Accept `.pdf,.jpeg,.jpg,.png`; error copy: “Use file in .pdf, .jpeg or .png”
4. Continue: required vs skippable (see variations)

**Components used:** `Dropzone`, Patients step

**Variations**

- **Required single file:** Prescription. Emphasis: “This is required…”. Continue disabled until a valid file
- **Optional pair:** Insurance Card front + back. Skip in copy. Continue enabled with zero files; blocked only on invalid type

**Accessibility considerations**

- Each dropzone has an `id` and visible label (“Upload front of card”, not “File”)
- Error is shown on the dropzone; do not rely on disabled Continue alone
- Allowed types are in the error and `accept`; also state them in helper copy if the control does not
- Removing a file must remain keyboard-operable (Dropzone close control)

---

### 9. Conditional reveal

**Purpose:** Extra fields or extra steps appear only after a choice. The first step stays simple.

**Structure (in-page):** Checkbox in the first panel → second `MultiStepFlowLayoutInputPanel` with its own heading and the same field stack.

**Structure (next-step):** Exclusive choice → Continue routes to a different step (date and/or location).

**Components used:** `Checkbox` (in-page), `RadioGroup` (branch), address fields or Date Picker / Textarea on the revealed surface, Patients step

**Variations**

- **In-page panel:** “Find radiology centers near a different address” reveals a second address form (Home Address). Continue requires both addresses when the checkbox is on
- **Flow branch:** Last Mammogram → Mammogram Date and/or Mammogram Location. Back from location remembers whether the previous step was selection or date

**Accessibility considerations**

- Revealed heading (`h2` “Find near a different address”) so the new panel is announced as a section
- Focus should move to the new panel when it appears (not implemented today — call this out when documenting)
- Branching must not strand Back; location already stores the back target
- Do not reveal a required field without saying it became required

---

### 10. In-step notice

**Purpose:** Show a care-team or policy note **inside** the step intro, before the patient answers. Not a toast and not a blocking dialog.

**Structure**

1. Title + helper
2. `Alert variant="info"` with icon, title, description
3. Then fields or checkout content

**Components used:** `Alert`, `AlertIcon`, `AlertTitle`, `AlertDescription`

**Variations**

- Policy (Deposit): “Cancelation policy.” + refund rule
- Care team (Availability): “Note from Medmo Care Team:” + scheduling note slot

**Accessibility considerations**

- Info alert is not `role="alert"` (that is for errors). Keep it in the reading order under the `h1`
- Icon is decorative beside the title; title + description carry the meaning
- Do not use this for blocking legal consent — Share Results uses pattern 4 plus a dialog instead

---

### 11. Operational app chrome

**Purpose:** Persistent MPF Portal frame for operational work: navigate sections, see where you are, search, and identify the signed-in agent.

**Structure**

1. `AppShell`
2. `AppSidebar` — icon + label items; one `active`
3. `AppHeader` — page title | optional `GlobalSearchBar` | `UserProfileBlock`
4. `main` — tabbed workspace

**Components used:** `AppShell`, `AppSidebar`, `AppHeader`, `GlobalSearchBar`, `UserProfileBlock`

**Variations**

- Header search **shown** on My info and My Reports
- Header search **hidden** on Scan Search (search lives in the tab body instead)

**Accessibility considerations**

- Header title is `h1` (“Dashboard”)
- Sidebar needs a nav landmark and current-page indication (`active` item)
- Profile settings control must be named (not icon-only without a label)
- App Shell docs mention a skip link; the live Dashboard does not include one — document the gap, do not pretend it exists

---

### 12. Workspace tabs

**Purpose:** Switch between operational views inside the same chrome without changing the sidebar destination.

**Structure**

1. `Tabs` at the top of main
2. Segmented `TabsList` / `TabsTrigger`
3. `TabsContent` with `tabsSegmentedContentClassName`
4. Each tab owns a worklist grid, a search layout, or a single table

**Components used:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

**Variations:** Three live tabs only — My info (grid), Scan Search (search + results), My Reports (single table). No overflow/more-tabs pattern exists on product.

**Accessibility considerations**

- Tabs must be keyboard-operable (arrow / tab per the Tabs component)
- Selected tab is the only content in view; do not leave hidden tables in the accessibility tree as visible
- Do not reuse page `h1` inside tabs; section titles inside Scan Search are `h2`

---

### 13. Worklist table

**Purpose:** Scan operational lists (scans, exceptions, tasks, reports, search hits) with a title, columns, optional sort, row links, and a count.

**Structure**

1. `DataTable` with `title`
2. Header row: `DataTableHead` and optional `DataTableMenuHead` (sort)
3. Body: `DataTableRow`; SRID and patient as `DataTableLinkCell`; other values as `DataTableCell`
4. `DataTableRowCountFooter` with `count`

**Components used:** `DataTable` and its header/body/cell/footer parts

**Variations**

- **Populated** with sort on one column (My active scans, Search results DOB)
- **Empty:** same headers, empty body, footer `count={0}` — this **is** the live empty state. There is no illustrated empty, title, or CTA on these tables
- **Grid placement:** half-width vs `span="full"` on My info (layout of pattern 13 inside a dashboard grid)

**Accessibility considerations**

- Table title is the accessible name for the region
- Sortable headers must expose sort direction
- Link cells need distinguishable link text (SRID, patient name — not “open”)
- Empty: `0` in the footer is the only empty signal; screen readers get an empty table. If this ships as the pattern, say so explicitly — do not add a new empty illustration here

---

### 14. Scan search

**Purpose:** Find scan requests on demand. Results are not shown until the agent searches.

**Structure**

1. Row: `h2` “Search scan requests” + outline `Button` “Create new scan request”
2. `GlobalSearchBar` with dialog title/description and grouped items
3. **After** submit or select: `DataTable title="Search results"` (worklist table)

**Components used:** `Button` (outline), `GlobalSearchBar`, `DataTable` (pattern 13)

**Variations:** Only this tab. Pre-search is title + CTA + search, no table. That absence is the empty state — not a separate empty-pattern invention.

**Accessibility considerations**

- Search dialog has title and description on the product screen
- Creating a scan request is a separate outline action, not buried in search results
- Results table appears in order after search; do not move focus without a plan (not specified on the live screen)
- Header global search is hidden on this tab so two search fields are not shown at once

---

## Observed once — do not catalog yet

These appear on a single Patients screen (or a single unique composition). Reuse would be copying a screen, not a pattern. Keep them in Products until they repeat.

| Observation | Screen | Why it is not a pattern yet |
|-------------|--------|-----------------------------|
| Welcome orientation (checklist + ordered-scans inset) | Welcome | Only intro screen; other steps use fields |
| Deposit checkout (summary + payment + policy alert) | Deposit | One checkout. `DepositSummary` + `PaymentForm` are components; the page composition is not repeated |
| Consent learn-more dialog | Share Results | One dialog. Dialog itself is a component |
| Unit suffix inputs (ft / in / lbs) | Height and Weight | One clinical measurement screen |

If a second checkout, welcome, or units screen appears, promote then — do not design extras now.

---

## Not extracted (not on published product screens)

| Arrangement | Where it appears | Why excluded |
|-------------|------------------|--------------|
| Command palette | Component docs preview | Not on MPF Dashboard |
| Activity timeline | Component docs preview | No MPF detail-view userflow |
| `DashboardPanel` wrapping a table | Component docs preview | Live Dashboard uses `DataTable title` directly |
| Illustrated empty state | Nowhere in product | Empty tables use headers + `0` |
| Breadcrumb | Planned component only | Not on screens |
| Patients Review & Submit | Coming Soon | No screen |

---

## Map to the current Patterns nav

| Nav item (today) | Extracted patterns to publish under it |
|------------------|----------------------------------------|
| Form Field Patterns | **Already live.** Keep. Patterns 3, plus unit-suffix as a variation |
| Forms | Patients step (2) + optional skip (6) + conditional reveal (9) as form-flow notes — or keep 2 as the parent and nest 6 and 9 |
| Search & Command | Scan search (14) only. Do **not** add Command palette until MPF uses it |
| Empty States | **Do not invent.** Worklist empty is pattern 13’s empty variation (headers + `0`). Scan search empty is “no table yet” |
| Navigation | Patients intake chrome (1), Operational app chrome (11), Workspace tabs (12) |
| Data Display | Worklist table (13). Dashboard grid is the My info layout of 13, not a new pattern |
| Feedback | In-step notice (10) only. No toast/Sonner on these product screens |

Exclusive choice (4), multi-select (5), follow-up details (7), and document upload (8) do not match a current nav label. Publish them as their own pages, or under Forms, rather than creating unused names.

---

## Suggested publish order

1. **Patients step** + **Patients intake chrome** — they unlock every Patients screen
2. **Exclusive choice** and **Multi-select choice** — most health/consent/scheduling questions
3. **Optional skip** and **Follow-up details** — already a paired behavior
4. **Document upload**
5. **Worklist table** + **Operational app chrome** + **Workspace tabs** — the entire live MPF surface
6. **Scan search**
7. **In-step notice** and **Conditional reveal** — smaller, already visible inside 2

Leave Deposit, Welcome, and the consent dialog in **Products / Patients** until a second instance exists.
