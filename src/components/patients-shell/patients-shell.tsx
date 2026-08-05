import type { ReactNode } from "react";

import { GlobeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const patientsShellClassName =
  "flex min-h-full w-full flex-col bg-[var(--color-surface-muted)]";

export const patientsShellHeaderClassName = [
  "flex items-center justify-between",
  "bg-[var(--color-surface)] px-[var(--space-page)] py-[var(--space-stack-md)]",
].join(" ");

export const patientsShellMainClassName = [
  "flex flex-1 flex-col px-[var(--space-page)] py-[var(--space-stack-lg)]",
].join(" ");

export const patientsShellMainDesktopClassName = [
  "flex flex-1 flex-col px-[var(--space-page)] py-[var(--space-stack-xl)]",
].join(" ");

export const patientsShellCardClassName = [
  "flex flex-col gap-[var(--space-stack-md)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const patientsShellInputPanelClassName = [
  "flex flex-col gap-[var(--space-stack-sm)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const patientsShellLocaleClassName = [
  "inline-flex items-center gap-[var(--space-inline-xs)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-muted)]",
].join(" ");

export const patientsFieldGroupClassName =
  "flex flex-col gap-[var(--space-stack-xs)]";

export const patientsShellDesktopContentClassName =
  "mx-auto flex w-full max-w-[42rem] flex-col gap-[var(--space-stack-md)]";

export function PatientsShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="patients-shell" className={cn(patientsShellClassName, className)}>
      {children}
    </div>
  );
}

export function PatientsShellHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header
      data-slot="patients-shell-header"
      className={cn(patientsShellHeaderClassName, className)}
    >
      {children}
    </header>
  );
}

export function PatientsShellLocale({
  showGlobe = false,
  children = "Español",
  className,
}: {
  showGlobe?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(patientsShellLocaleClassName, className)}>
      {showGlobe ? <GlobeIcon aria-hidden className="size-4 shrink-0" /> : null}
      {children}
    </span>
  );
}

/** @deprecated Use PatientsShellLocale */
export function PatientsShellLocalePlaceholder({
  children = "Español",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <PatientsShellLocale className={className}>{children}</PatientsShellLocale>
  );
}

export function PatientsShellProgress({
  value = 0.33,
  className,
}: {
  value?: number;
  className?: string;
}) {
  const clampedValue = Math.min(Math.max(value, 0), 1);

  return (
    <div
      data-slot="patients-shell-progress"
      className={cn("h-[0.1875rem] w-full bg-[var(--color-border-subtle)]", className)}
      role="progressbar"
      aria-valuenow={Math.round(clampedValue * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-[var(--color-info-foreground)] transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ width: `${clampedValue * 100}%` }}
      />
    </div>
  );
}

export function PatientsShellMainDesktop({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      data-slot="patients-shell-main-desktop"
      className={cn(patientsShellMainDesktopClassName, className)}
    >
      {children}
    </main>
  );
}

export function PatientsShellInputPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      data-slot="patients-shell-input-panel"
      className={cn(patientsShellInputPanelClassName, className)}
    >
      {children}
    </section>
  );
}

export function PatientsShellMain({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      data-slot="patients-shell-main"
      className={cn(patientsShellMainClassName, className)}
    >
      {children}
    </main>
  );
}

export function PatientsShellCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      data-slot="patients-shell-card"
      className={cn(patientsShellCardClassName, className)}
    >
      {children}
    </section>
  );
}
