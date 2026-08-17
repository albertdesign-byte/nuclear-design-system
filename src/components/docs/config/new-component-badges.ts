/** How long the "New" badge stays visible in docs navigation after a component ships or is updated. */
export const NEW_COMPONENT_BADGE_DAYS = 5;

/**
 * Map docs route (without hash) → ISO date when the page shipped or received a major update.
 * Add or refresh an entry whenever a component or docs section is published or significantly updated.
 */
export const newComponentBadges: Record<string, string> = {
  // Foundations — shipped Aug 12, 2026
  "/docs/foundations/icons": "2026-08-12",
  "/docs/foundations/disabled-state": "2026-08-12",
  "/docs/foundations": "2026-08-14",
  "/docs/foundations/colors": "2026-08-14",
  "/docs/foundations/typography": "2026-08-14",
  "/docs/foundations/spacing": "2026-08-14",
  "/docs/foundations/shadows": "2026-08-14",

  "/docs/patterns": "2026-08-14",
  "/docs/patterns/form-field-patterns": "2026-08-14",
  "/docs/patterns/patients-intake-chrome": "2026-08-14",
  "/docs/patterns/patients-step": "2026-08-14",
  "/docs/patterns/exclusive-choice": "2026-08-14",
  "/docs/patterns/multi-select-choice": "2026-08-14",
  "/docs/patterns/optional-skip": "2026-08-14",
  "/docs/patterns/follow-up-details": "2026-08-14",
  "/docs/patterns/document-upload": "2026-08-14",
  "/docs/patterns/conditional-reveal": "2026-08-14",
  "/docs/patterns/in-step-notice": "2026-08-14",
  "/docs/patterns/operational-app-chrome": "2026-08-14",
  "/docs/patterns/workspace-tabs": "2026-08-14",
  "/docs/patterns/worklist-table": "2026-08-14",
  "/docs/patterns/scan-search": "2026-08-14",

  // Architecture overviews — Navigation First
  "/docs/components": "2026-08-14",
  "/docs/templates": "2026-08-14",
  "/docs/templates/app-shell": "2026-08-14",
  "/docs/templates/multi-step-flow-layout": "2026-08-14",
  "/docs/templates/search-results": "2026-08-14",
  "/docs/products": "2026-08-14",

  // Form controls — accessibility + form-field pattern updates
  "/docs/components/button": "2026-08-13",
  "/docs/components/checkbox": "2026-08-12",
  "/docs/components/alert": "2026-08-13",
  "/docs/components/command": "2026-08-13",
  "/docs/components/dialog": "2026-08-13",
  "/docs/components/alert-dialog": "2026-08-13",
  "/docs/components/global-search-bar": "2026-08-13",
  "/docs/components/input": "2026-08-13",
  "/docs/components/select": "2026-08-13",
  "/docs/components/label": "2026-08-12",
  "/docs/components/radio-group": "2026-08-13",
  "/docs/components/tooltip": "2026-08-14",
  "/docs/components/dropdown-menu": "2026-08-14",
  "/docs/components/card": "2026-08-14",
  "/docs/components/app-footer": "2026-08-14",
};

export function isNavItemNew(href: string, now = new Date()) {
  const route = href.split("#")[0];
  const addedAt = newComponentBadges[route];
  if (!addedAt) {
    return false;
  }

  const start = new Date(`${addedAt}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + NEW_COMPONENT_BADGE_DAYS);

  return now >= start && now <= end;
}
