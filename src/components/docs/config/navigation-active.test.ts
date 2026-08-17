import { describe, expect, it } from "vitest";

import { resolveActiveNavHref } from "./navigation-active";

const foundationItems = [
  { href: "/docs/foundations" },
  { href: "/docs/foundations/colors" },
  { href: "/docs/foundations/icons" },
  { href: "/docs/foundations/disabled-state" },
];

describe("resolveActiveNavHref", () => {
  it("activates Overview only for the exact Foundations pathname", () => {
    expect(
      resolveActiveNavHref("/docs/foundations", foundationItems)
    ).toBe("/docs/foundations");
  });

  it("prefers Icons over the Foundations Overview", () => {
    expect(
      resolveActiveNavHref("/docs/foundations/icons", foundationItems)
    ).toBe("/docs/foundations/icons");
  });

  it("prefers Disabled State over the Foundations Overview", () => {
    expect(
      resolveActiveNavHref(
        "/docs/foundations/disabled-state",
        foundationItems
      )
    ).toBe("/docs/foundations/disabled-state");
  });

  it("selects the deepest matching child route", () => {
    const items = [
      { href: "/docs/products" },
      { href: "/docs/products/patients" },
      { href: "/docs/products/patients/registration" },
    ];

    expect(
      resolveActiveNavHref(
        "/docs/products/patients/registration/confirmation",
        items
      )
    ).toBe("/docs/products/patients/registration");
  });

  it("does not treat sibling prefixes as route matches", () => {
    const items = [
      { href: "/docs/components/card" },
      { href: "/docs/components/card-group" },
    ];

    expect(
      resolveActiveNavHref("/docs/components/card-group", items)
    ).toBe("/docs/components/card-group");
  });

  it("returns null when no item matches", () => {
    expect(
      resolveActiveNavHref("/docs/foundations/unknown", foundationItems)
    ).toBeNull();
  });
});
