# Storybook accuracy — Phase 1 report

**Date:** 2026-08-14  
**Scope:** Registry ↔ Storybook title parity only. No new components, tokens, docs pages, Figma, or Code Connect.  
**Rule now enforced:** for every documented stable component, `docs title` = `registry title` = Storybook CSF last segment (`Components/{title}`).

---

## Executive result

Every documented stable component that already had a `*.stories.tsx` now publishes that story from `components-registry.ts`. CamelCase CSF titles were renamed to the docs name. Planned components and Overview stay unmapped. Six stories remain orphans (no docs page / no registry entry) — out of scope for this phase.

Validators:

- `npm run validate:components` — pass
- Identity is now asserted in `components-registry.test.ts` and `scripts/validate-components.mjs`

---

## Fixed mappings

Empty `storybook` fields filled because a matching story already existed:

| Registry / docs title | Storybook title |
|-----------------------|-----------------|
| Date Range Picker | `Components/Date Range Picker` |
| Tabs | `Components/Tabs` |
| Accordion | `Components/Accordion` |
| Sonner | `Components/Sonner` |
| Spinner | `Components/Spinner` |
| Skeleton | `Components/Skeleton` |
| Chip | `Components/Chip` |
| Table | `Components/Table` |
| Data Table | `Components/Data Table` |
| Timeline | `Components/Timeline` |
| Timeline Card | `Components/Timeline Card` |
| Stage Flow Badge | `Components/Stage Flow Badge` |
| Popover | `Components/Popover` |
| Logo | `Components/Logo` |
| Dashboard Panel | `Components/Dashboard Panel` |
| Scroll Area | `Components/Scroll Area` |
| Separator | `Components/Separator` |
| User Profile Block | `Components/User Profile Block` |

Already-mapped titles that were renamed so the CSF path matches the docs name:

| Registry / docs title | Was | Now |
|-----------------------|-----|-----|
| Day Toggle Group | `Components/DayToggleGroup` | `Components/Day Toggle Group` |
| Radio Group | `Components/RadioGroup` | `Components/Radio Group` |
| Field Error | `Components/FieldError` | `Components/Field Error` |
| Text Link | `Components/TextLink` | `Components/Text Link` |
| Dropdown Menu | `Components/DropdownMenu` | `Components/Dropdown Menu` |

Date Range Picker was previously kept empty on purpose so it would not point at Date Picker stories. It now maps to **its own** story (`Components/Date Range Picker`), not Date Picker.

---

## Missing mappings

None for documented stable components.

Intentionally empty (no matching `Components/{title}` story):

| Entry | Status | Reason |
|-------|--------|--------|
| Overview | stable | Index page. No `Components/Overview` story. |
| Calendar | planned | No story. `href: "#"`. |
| Attachment | planned | No story. `href: "#"`. |
| Breadcrumb | planned | No story. `href: "#"`. |
| Bubble | planned | No story. `href: "#"`. |
| Aspect Ratio | planned | No story. `href: "#"`. |

No registry entry referenced a story that does not exist. No such reference was removed.

---

## Orphan stories

Stories exist, but there is no `/docs/components/*` page and no `components-registry.ts` entry. Not added in this phase (would create new catalog items).

| Storybook title | Source |
|-----------------|--------|
| `Components/Date Picker` | `src/components/date-picker/date-picker.stories.tsx` |
| `Components/Input Button Group` | `src/components/input-button-group/input-button-group.stories.tsx` |
| `Components/Field Description` | `src/components/field-description/field-description.stories.tsx` |
| `Components/App Header` | `src/components/app-header/app-header.stories.tsx` |
| `Components/App Sidebar` | `src/components/app-sidebar/app-sidebar.stories.tsx` |
| `Components/Dashboard Grid` | `src/components/dashboard-grid/dashboard-grid.stories.tsx` |

Template stories are registered in `templates-registry.ts`, not here: `Templates/AppShell`, `Templates/MultiStepFlowLayout`, `Templates/Overview`.

---

## Naming mismatches

**Resolved** for every documented component. Canonical name is the docs / registry title (words separated, Title Case). Storybook CSF title is `Components/{that name}`.

Orphan CSF titles were also normalized to the same convention so they are ready if docs pages are added later:

| Was | Now |
|-----|-----|
| `Components/DatePicker` | `Components/Date Picker` |
| `Components/InputButtonGroup` | `Components/Input Button Group` |

Already spaced (unchanged): `Components/Field Description`, `Components/App Header`, `Components/App Sidebar`, `Components/Dashboard Grid`.

---

## What this phase did not do

- No new components, docs pages, or registry entries for orphans
- No Figma or Code Connect
- No token changes
- No pattern stories
- No foundation galleries (Motion, Breakpoints, Icons, Disabled, Density)

Next in the build order: docs pages (or explicit Storybook-only) for the six orphans, then pattern stories.
