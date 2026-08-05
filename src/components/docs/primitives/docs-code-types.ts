"use client";

export type CodeLine = {
  tokens: { text: string; className?: string }[];
};

export const docsCodeColors = {
  keyword: "text-[var(--color-error-text)]",
  plain: "text-foreground",
  string: "text-[var(--color-info-text)]",
  muted: "text-muted-foreground",
  tag: "text-[var(--color-info-text)]",
  attribute: "text-[var(--color-warning-text)]",
  property: "text-[var(--color-info-text)]",
  value: "text-[var(--color-success-text)]",
} as const;

export function codeLine(...tokens: { text: string; className?: string }[]): CodeLine {
  return { tokens };
}
