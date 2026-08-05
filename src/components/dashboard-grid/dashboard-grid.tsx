import { cn } from "@/lib/utils";

export const dashboardGridClassName =
  "grid grid-cols-1 gap-[var(--space-inline-md)] lg:grid-cols-2";

export const dashboardGridFullClassName = "col-span-1 lg:col-span-2";

export function DashboardGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="dashboard-grid" className={cn(dashboardGridClassName, className)}>
      {children}
    </div>
  );
}

export function DashboardGridItem({
  children,
  span = "half",
  className,
}: {
  children: React.ReactNode;
  span?: "half" | "full";
  className?: string;
}) {
  return (
    <div
      data-slot="dashboard-grid-item"
      data-span={span}
      className={cn(span === "full" && dashboardGridFullClassName, className)}
    >
      {children}
    </div>
  );
}
