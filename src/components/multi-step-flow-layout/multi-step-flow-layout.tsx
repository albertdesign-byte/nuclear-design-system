import type { ReactNode } from "react";

import { GlobeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const multiStepFlowLayoutClassName =
  "flex min-h-full w-full flex-col bg-[var(--color-surface-muted)]";

export const multiStepFlowLayoutHeaderClassName = [
  "flex items-center justify-between",
  "bg-[var(--color-surface)] px-[var(--space-page)] py-[var(--space-stack-md)]",
].join(" ");

export const multiStepFlowLayoutMainClassName = [
  "flex flex-1 flex-col px-[var(--space-page)] py-[var(--space-stack-lg)]",
].join(" ");

export const multiStepFlowLayoutMainDesktopClassName = [
  "flex flex-1 flex-col px-[var(--space-page)] py-[var(--space-stack-xl)]",
].join(" ");

export const multiStepFlowLayoutCardClassName = [
  "flex flex-col gap-[var(--space-stack-md)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const multiStepFlowLayoutInputPanelClassName = [
  "flex flex-col gap-[var(--space-stack-sm)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const multiStepFlowLayoutLocaleClassName = [
  "inline-flex items-center gap-[var(--space-inline-xs)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-muted)]",
].join(" ");

export const multiStepFlowFieldGroupClassName =
  "flex flex-col gap-[var(--space-stack-xs)]";

export const multiStepFlowLayoutDesktopContentClassName =
  "mx-auto flex w-full max-w-[42rem] flex-col gap-[var(--space-stack-md)]";

export function MultiStepFlowLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="multi-step-flow-layout"
      className={cn(multiStepFlowLayoutClassName, className)}
    >
      {children}
    </div>
  );
}

export function MultiStepFlowLayoutHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header
      data-slot="multi-step-flow-layout-header"
      className={cn(multiStepFlowLayoutHeaderClassName, className)}
    >
      {children}
    </header>
  );
}

export function MultiStepFlowLayoutLocale({
  showGlobe = false,
  children = "English",
  className,
}: {
  showGlobe?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(multiStepFlowLayoutLocaleClassName, className)}>
      {showGlobe ? <GlobeIcon aria-hidden className="size-4 shrink-0" /> : null}
      {children}
    </span>
  );
}

/** @deprecated Use MultiStepFlowLayoutLocale */
export function MultiStepFlowLayoutLocalePlaceholder({
  children = "English",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <MultiStepFlowLayoutLocale className={className}>
      {children}
    </MultiStepFlowLayoutLocale>
  );
}

export function MultiStepFlowLayoutProgress({
  value = 0.33,
  className,
}: {
  value?: number;
  className?: string;
}) {
  const clampedValue = Math.min(Math.max(value, 0), 1);

  return (
    <div
      data-slot="multi-step-flow-layout-progress"
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

export function MultiStepFlowLayoutMainDesktop({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      data-slot="multi-step-flow-layout-main-desktop"
      className={cn(multiStepFlowLayoutMainDesktopClassName, className)}
    >
      {children}
    </main>
  );
}

export function MultiStepFlowLayoutInputPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      data-slot="multi-step-flow-layout-input-panel"
      className={cn(multiStepFlowLayoutInputPanelClassName, className)}
    >
      {children}
    </section>
  );
}

export function MultiStepFlowLayoutMain({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      data-slot="multi-step-flow-layout-main"
      className={cn(multiStepFlowLayoutMainClassName, className)}
    >
      {children}
    </main>
  );
}

export function MultiStepFlowLayoutCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      data-slot="multi-step-flow-layout-card"
      className={cn(multiStepFlowLayoutCardClassName, className)}
    >
      {children}
    </section>
  );
}
