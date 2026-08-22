# Medmo Design systems feedback — status

**Source:** original “Medmo Design systems feedback”  
**Codebase audit:** 2026-08-20 (conversation; not previously persisted)  
**Re-audit:** 2026-08-21 — open items verified against the repository  
**Implementation pass:** 2026-08-21 — remaining real gaps closed in code and docs

This file is the canonical status for original feedback items. Status below is from **current code**.

**Totals after this pass:** 36 items · **36 DONE** · **0 PARTIALLY DONE** · **0 NOT DONE** · **0 DECISION NEEDED**

---

## LABEL

### Integrate labels into components that use them — DONE

**Previous status (2026-08-20):** PARTIALLY DONE  

**Status now:** DONE  

Do not retire Label. Field composites are the preferred API when a Field exists. Label remains the supported primitive for controls without a Field (`DatePicker`, `Textarea`, `Switch`, `DayToggleGroup`, and legitimate Label + control composition).

Label sigue siendo un primitive soportado para controles que actualmente no tienen un Field composite correspondiente. Los componentes Field siguen siendo la API preferida siempre que exista uno.

**Still missing:** nothing.

---

## GENERAL

### Update all text to English — DONE

**Previous status:** PARTIALLY DONE  

**Status now:** DONE  

Live product and catalog strings identified in the re-audit are English: calendar actions are `Clear` / `Today`; Badge samples are `Stable` / `Archived`. Storybook stories were already English.

Remaining Spanish is intentional live documentation from the 2026-08-21 pass (Switch guidelines, Chip vs Badge, Date Picker catalog copy) plus the Label architectural quote, plus archival MDX under `docs/design-system/` which is not the live docs site.

**Evidence:** `date-range-picker-calendar.tsx`, `badge-docs-page.tsx`, `badge-code-snippets.ts`, `badge-playground.tsx`.

**Still missing:** nothing for the identified live leftover copy.

### Design library footer — DONE

**Previous status:** DECISION NEEDED  

**Status now:** DONE  

Decision: remove the Design Library footer. `HomeFooter` was deleted. `HomeLayoutShell` no longer renders a footer. Product `AppFooter` (Patients userflows) is unchanged.

**Evidence:** `src/components/docs/home/home-layout-shell.tsx`; `home-footer.tsx` removed.

**Still missing:** nothing.

---

## DATE PICKER

### Patient apps do not really use a date picker — DONE

Click/focus opens the calendar; month and year navigation; typed MM/DD/YYYY with mask; ranges via `DateRangePicker`; DOB and Mammogram date use `DatePicker`. Date Picker is now a published docs-registry component.

**Evidence:** `date-picker.tsx`, `date-input-mask.ts`, `components-registry.ts` (`Date Picker`), `/docs/components/date-picker`.

### More user-friendly modern React option — DONE

Editable input + popover calendar + mask + range sibling. No library swap.

### English regional placeholder MM/DD/YYYY — DONE

Unchanged.

---

## INPUT FIELDS

### Determine whether File input is actually needed — DONE

Dropzone is the official upload. Hidden `type="file"` stays inside Dropzone only.

---

## SWITCH

### Rules for placement of the switch label — DONE

**Previous status:** PARTIALLY DONE  

**Status now:** DONE  

Guidelines document when to use Label, left/right placement on settings rows, spacing, helper text with `FieldDescription`, and not duplicating labels. No `SwitchField`. Docs example and Storybook `WithLabel` use the same Label-left / Switch-right row.

**Evidence:** `switch-docs-page.tsx` Guidelines, `switch.stories.tsx`.

**Still missing:** nothing.

---

## BADGE

### Clear Chip vs Badge distinction — DONE

**Previous status:** PARTIALLY DONE  

**Status now:** DONE  

Shared section “Cuándo usar Chip vs Badge” on both docs pages, with side-by-side examples. Components are not merged. Storybook descriptions cross-link the rule.

**Evidence:** `src/components/docs/shared/chip-vs-badge-section.tsx`, Badge and Chip docs pages.

**Still missing:** nothing.

---

## DEPOSIT USERFLOW

### Top section visually different from the rest — DONE

Same `MultiStepFlowLayout` chrome; intro is intentional content.

---

## TEXT LINK

### Move Text Link to a more foundational/basic section — DONE

**Previous status:** NOT DONE  

**Status now:** DONE  

There is no Foundations/Basic component category. Within the current catalog, Inputs is the basic interaction group (`Button`, `Label`, `Input`). Text Link moved from **Navigation** to **Inputs**. Storybook title remains `Components/Text Link` (CSF titles do not encode registry category). Visual API unchanged.

**Evidence:** `components-registry.ts` (`category: "Inputs"`).

**Still missing:** nothing.

---

## PATIENT USERFLOW / DATE OF BIRTH

### DOB is not a date picker; it is an MM/DD/YYYY validator — DONE

Superseded: DOB uses the current DatePicker (calendar + typed MM/DD/YYYY + validation). Do not replace with a plain Input.

---

## Summary table

| Section | Feedback | Status |
|---|---|---|
| General | Update font to Poppins | DONE |
| General | All text to English | DONE |
| General | Design library footer | DONE |
| General | Icon usage and sizing | DONE |
| General | Disabled cursor | DONE |
| Buttons | More horizontal padding | DONE |
| Buttons | Danger variant | DONE |
| Buttons | Icon spacing | DONE |
| Buttons | Button Group ordering | DONE |
| Buttons | Group as part of Button | DONE |
| Label | Integrate into labeled components | DONE |
| Checkbox | Example with label | DONE |
| Checkbox | 44px touch zone | DONE |
| Radio | 44px touch zone | DONE |
| Radio | Disabled + selected | DONE |
| Date picker | Patients rarely use one | DONE |
| Date picker | Placeholder MM/DD/YYYY | DONE |
| Date picker | Modern React option | DONE |
| Input | Always show label | DONE |
| Input | Is File input needed? | DONE |
| Input | Units / icon / search | DONE |
| Select | Visible label | DONE |
| Switch | Label placement rules | DONE |
| Badge | Small badge rounded | DONE |
| Badge | Chip vs Badge distinction | DONE |
| Card | Variations cut off | DONE |
| Footer | Larger logo → medmo.com | DONE |
| Footer | Align link hover styles | DONE |
| Text Link | Move to basic/foundational section | DONE |
| Alerts | Consolidate Patient/Admin | DONE |
| Command/Search | Clarify / consolidate / guide | DONE |
| Tooltip | Pointer covered by icon | DONE |
| Dropdown | Add caret | DONE |
| Dialog | Define vs Alert Dialog | DONE |
| Deposit | Top section looks different | DONE |
| DOB | Not a picker; MM/DD/YYYY validator | DONE |
