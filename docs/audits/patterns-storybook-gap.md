# Patterns vs Storybook gap report

**Date:** 2026-08-14  
**Scope:** Documented patterns (`patterns-registry.ts`, `/docs/patterns`) compared to Storybook.  
**Constraint:** Do not create new UI, templates, or undocumented patterns. Compose existing components and templates only.

Implementation batch 1 added four `Patterns/*` CSF stories. Batch 2 added Operational app chrome. Batch 3 added Patients step. Batch 4 added Exclusive choice. Batch 5 added Multi-select choice. Batch 6 added In-step notice. Batch 7 added Conditional reveal. Batch 8 added Optional skip. Batch 9 added Follow-up details. Batch 10 added Document upload. Batch 11 added Patients intake chrome. This document is the living audit.

Storybook: `src/stories/patterns/` — Overview MDX plus Form field, Worklist table, Scan search, Workspace tabs, Operational app chrome, Patients step, Exclusive choice, Multi-select choice, In-step notice, Conditional reveal, Optional skip, Follow-up details, Document upload, Patients intake chrome. Glob: `.storybook/main.ts` includes `src/stories/**/*.stories.@(ts|tsx)`.

---

## Report

| Count | Item |
|------:|------|
| 14 | Patterns documented (recipes; plus Overview) |
| 14 | Patterns represented in Storybook CSF |
| 0 | Remaining documented recipes without a `Patterns/` story |

**Represented:** Form field, Worklist table, Scan search, Workspace tabs, Operational app chrome, Patients step, Exclusive choice, Multi-select choice, In-step notice, Conditional reveal, Optional skip, Follow-up details, Document upload, Patients intake chrome.

**Remaining:** none.

Do **not** add generic Search, generic Feedback, or Empty State.

---

## Executive summary

Fourteen patterns are documented (plus Overview). All fourteen have a Storybook representation of the documented recipe. Stories import production composites — field wrappers, DataTable, ScanSearchSection (SearchResults), Tabs + DashboardGrid, AppShell, MultiStepFlowLayout, RadioGroupField, CheckboxGroupField, Alert info, native skip-in-copy button, Dropzone, MedmoLogoLockup, AppFooter — not new chrome.

Form Field remains the only pattern with live composed examples on the docs site (`form-field-demos.tsx`). The Storybook story reuses those wrappers plus `InputField` for stacked and two-column rows.

Empty worklists stay headers + footer count 0. Scan search pre-search shows no table. Neither is an illustrated empty state.

---

## Focus set

| Pattern (requested) | Docs | Storybook | Production | Status |
|---------------------|------|-----------|------------|--------|
| Form Field | **Yes** — `/docs/patterns/form-field-patterns` | **Yes** — `Patterns/Form field` | Email, Home Address, Height and Weight, Insurance, others | Represented: single, helper, error, stacked, two-column, Select, Checkbox, Radio |
| Multi Select | **Yes** as **Multi-select choice** | **Yes** — `Patterns/Multi-select choice` | Assistance; Availability | Represented: CheckboxGroupField; at least one selected vs none + error. Not Assistance/Availability copy. |
| Document Upload | **Yes** | **Yes** — `Patterns/Document upload` | Prescription; Insurance Card | Represented: required single Dropzone. Empty (no file, Continue off) and Uploaded (file attached, Continue on). Not a file manager, modal, or drawer. |
| Conditional Reveal | **Yes** | **Yes** — `Patterns/Conditional reveal` | Home Address (in-page); Last Mammogram (branch) | Represented: in-page checkbox → second input panel. Flow branch is routing, not this story. |
| Workspace Tabs | **Yes** | **Yes** — `Patterns/Workspace tabs` | Dashboard: My info, Scan Search, My Reports | Represented: three tab bodies. Does not wrap AppShell |
| Worklist Table | **Yes** | **Yes** — `Patterns/Worklist table` | Active scans; empty exceptions/tasks/reports | Represented: populated + sort; empty headers + 0 |
| Search | **Partial** — **Scan search** only | **Yes** — `Patterns/Scan search`. No `Patterns/Search` | Scan Search tab | Represented: pre-search and after-search via `ScanSearchSection` |
| Feedback | **Partial** — **In-step notice** only | **Yes** — `Patterns/In-step notice`. No `Patterns/Feedback` | Deposit, Availability | Represented: info Alert under the step h1. Informational (Continue on) and Blocking (Continue off until the field is filled). Not a toast or dialog. |
| Empty State | **No** documented pattern | **Not added** | Worklist empty = headers + 0; Scan search pre-search = no table | Covered as Worklist table Empty and Scan search Pre-search |

---

## All documented patterns

| Pattern | Docs | Storybook `Patterns/` | Production | Notes |
|---------|------|----------------------|------------|-------|
| Overview | `/docs/patterns` | `Patterns/Overview` MDX | n/a | List marks which recipes have CSF |
| Patients intake chrome | Yes | **Yes** | All 19 Patients screens | Compose MultiStepFlowLayout header (lockup + locale), desktop progress, centered main slot, and AppFooter variant="patients". Standard (progress 0.33) and Mid-flow (progress 0.66, different slot). Slot is not a Patients step. Not AppShell. |
| Patients step | Yes | **Yes** | Acting intake screens | Compose MultiStepFlowLayout split + Form field. Standard (Continue on) and Validation (error + Continue off). |
| Form field | Yes + live demos | **Yes** | Many Patients fields | Compose InputField / SelectField / CheckboxField / RadioGroupField |
| Exclusive choice | Yes | **Yes** | COVID, Share Results, Mammogram | Compose Patients step + RadioGroupField. Standard (one selected, Continue on) and Validation (none selected, error, Continue off). |
| Multi-select choice | Yes | **Yes** | Assistance, Availability | Compose Patients step + CheckboxGroupField. Standard (one selected, Continue on) and Validation (none selected, error, Continue off). |
| Optional skip | Yes | **Yes** | Email, Insurance, follow-ups | Represented: Patients step + optional InputField. Empty (Continue on, skip in copy) and Completed (field filled, Continue on). No second Skip button. |
| Follow-up details | Yes | **Yes** | Availability/Assistance/Location details | Compose Patients step + completed primary InputField + second InputPanel (h2 + InputField / SelectField). Basic (Continue on, skip emphasis) and Required (empty required field, error, Continue off). Same step — not a modal, drawer, accordion, or separate page. |
| Document upload | Yes | **Yes** | Prescription, Insurance Card | Compose Patients step + Dropzone. Empty (no file, Continue off) and Uploaded (file attached, Continue on). Required single file; accept .pdf,.jpeg,.jpg,.png. Not a file manager, modal, or drawer. |
| Conditional reveal | Yes | **Yes** | Home Address, Mammogram branch | Compose Patients step + checkbox trigger + second InputPanel (h2 + InputField / SelectField). Hidden vs Revealed. Not a disclosure primitive. |
| In-step notice | Yes | **Yes** | Deposit, Availability | Compose Patients step + Alert info. Informational (Continue on) and Blocking (Continue off; notice stays info, not an error variant). |
| Operational app chrome | Yes | **Yes** | MPF Dashboard | Compose AppShell around Workspace tabs. Scan Search Workspace hides header search; Reports Workspace shows it. |
| Workspace tabs | Yes | **Yes** | Dashboard 3 tabs | Compose Tabs + worklist + Scan search |
| Worklist table | Yes | **Yes** | Dashboard lists | Compose DataTable |
| Scan search | Yes | **Yes** | Scan Search tab | Compose SearchResults via ScanSearchSection |

**Counts:** 14 documented recipes. 14 pattern CSF stories. 0 remaining.

---

## Naming (identity rule)

Match docs / registry titles:

`Patterns/Patients intake chrome`, `Patterns/Patients step`, `Patterns/Form field`, `Patterns/Exclusive choice`, `Patterns/Multi-select choice`, `Patterns/Optional skip`, `Patterns/Follow-up details`, `Patterns/Document upload`, `Patterns/Conditional reveal`, `Patterns/In-step notice`, `Patterns/Operational app chrome`, `Patterns/Workspace tabs`, `Patterns/Worklist table`, `Patterns/Scan search`.

---

## Recommended remaining Storybook order

None. Every documented pattern has a `Patterns/{docs title}` story.

Do not add stories for Search, Feedback, or Empty State as new pattern titles.

---

## Out of scope

- New templates
- New components or illustrated empty states
- Generic Search / Feedback / Empty State catalog entries
- Reimplementing AppShell, SearchResults, or DataTable inside a pattern story
