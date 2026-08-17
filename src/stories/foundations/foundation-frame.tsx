import type { CSSProperties, ReactNode } from "react";

import { tokenCssExports } from "@medmo/tokens/tooling";

export function FoundationSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="mt-[var(--space-stack-lg)] first:mt-0">
      <h2 className="text-[length:var(--text-h3-size)] font-semibold leading-[var(--text-h3-line-height)] tracking-[var(--text-h3-letter-spacing)] text-[var(--color-text-primary)]">
        {title}
      </h2>
      {description ? (
        <div className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          {description}
        </div>
      ) : null}
      {children ? (
        <div className="mt-[var(--space-stack-md)]">{children}</div>
      ) : null}
    </section>
  );
}

export function FoundationTable({
  columns,
  children,
  minWidthClassName = "min-w-[40rem]",
}: {
  columns: string[];
  children: ReactNode;
  minWidthClassName?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
      <table
        className={`w-full ${minWidthClassName} border-collapse text-left text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]`}
      >
        <thead className="bg-[var(--color-surface-muted)]">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="p-[var(--space-table)] font-semibold text-[var(--color-text-primary)]"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function FoundationRow({ children }: { children: ReactNode }) {
  return (
    <tr className="border-t border-[var(--color-border-subtle)] align-top">
      {children}
    </tr>
  );
}

export function FoundationCell({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <td
      className={`p-[var(--space-table)] ${muted ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-primary)]"}`}
    >
      {children}
    </td>
  );
}

export function DoDont({
  doExample,
  dontExample,
  doCaption,
  dontCaption,
}: {
  doExample: ReactNode;
  dontExample: ReactNode;
  doCaption: ReactNode;
  dontCaption: ReactNode;
}) {
  return (
    <div className="grid gap-[var(--space-card-gap)] md:grid-cols-2">
      <article className="rounded-[var(--radius-lg)] border border-[var(--color-success-border)] bg-[var(--color-success-background)] p-[var(--space-card)]">
        <p className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-success-text)]">
          Do
        </p>
        <div className="mt-[var(--space-stack-sm)]">{doExample}</div>
        <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-success-text)]">
          {doCaption}
        </p>
      </article>
      <article className="rounded-[var(--radius-lg)] border border-[var(--color-error-border)] bg-[var(--color-error-background)] p-[var(--space-card)]">
        <p className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-error-text)]">
          Don&apos;t
        </p>
        <div className="mt-[var(--space-stack-sm)]">{dontExample}</div>
        <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-error-text)]">
          {dontCaption}
        </p>
      </article>
    </div>
  );
}

const lightThemeVars = {
  ...tokenCssExports.colors.light,
  ...tokenCssExports.shadows.primitives,
} as CSSProperties;

const darkThemeVars = {
  ...tokenCssExports.colors.light,
  ...tokenCssExports.colors.dark,
  ...tokenCssExports.shadows.primitives,
  ...tokenCssExports.shadows.primitivesDark,
} as CSSProperties;

export function ThemeFrame({
  mode,
  label,
  children,
}: {
  mode: "light" | "dark";
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      className={mode === "dark" ? "dark" : undefined}
      style={{
        colorScheme: mode,
        ...(mode === "dark" ? darkThemeVars : lightThemeVars),
      }}
    >
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-[var(--space-dialog)] text-[var(--color-text-primary)]">
        <p className="mb-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
