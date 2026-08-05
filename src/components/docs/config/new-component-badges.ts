/** How long the "New" badge stays visible in docs navigation after a component ships. */
export const NEW_COMPONENT_BADGE_DAYS = 10;

/**
 * Map docs route (without hash) → ISO date when the component was added.
 * Add an entry here whenever a new component is published to the DS.
 */
export const newComponentBadges: Record<string, string> = {
  "/docs/components/date-range-picker": "2026-07-20",
  "/docs/components/deposit-summary": "2026-07-27",
  "/docs/components/payment-form": "2026-07-27",
  "/docs/components/dropzone": "2026-07-27",
  "/docs/components/day-toggle-group": "2026-07-27",
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
