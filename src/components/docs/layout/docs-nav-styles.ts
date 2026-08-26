/** Docs library chrome — not a Medmo product typeface. Pair with header navbar scale. */
export const docsNavLinkTypographyClassName =
  "font-[family-name:var(--font-family-sans)] text-[length:var(--text-label-size)] font-normal leading-[var(--text-label-line-height)]";

/** Docs chrome controls — sans only; pair with Button to keep size/variant tokens. */
export const docsChromeFontClassName =
  "font-[family-name:var(--font-family-sans)]";

export const docsNavLinkClassName = (active: boolean) =>
  [
    docsNavLinkTypographyClassName,
    active
      ? "bg-[var(--docs-nav-active-bg)] text-foreground"
      : "text-foreground hover:bg-[var(--color-surface-hover)]",
  ].join(" ");
