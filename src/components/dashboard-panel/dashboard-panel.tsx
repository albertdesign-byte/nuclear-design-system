import { cn } from "@/lib/utils";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const dashboardPanelClassName = [
  componentFontFamilyClassName,
  "overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface-muted)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const dashboardPanelHeaderClassName = [
  "border-b border-[var(--color-border-subtle)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]",
  "text-[length:var(--text-label-size)] font-semibold leading-[var(--text-label-line-height)]",
  "text-[var(--color-action-primary)]",
].join(" ");

export const dashboardPanelContentClassName = "bg-[var(--color-surface)] p-0";

export function DashboardPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section data-slot="dashboard-panel" className={cn(dashboardPanelClassName, className)}>
      <header className={dashboardPanelHeaderClassName}>{title}</header>
      <div className={dashboardPanelContentClassName}>{children}</div>
    </section>
  );
}
