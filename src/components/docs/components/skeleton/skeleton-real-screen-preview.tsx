import { Skeleton } from "@/components/skeleton";

export function SkeletonRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <div className="flex items-start gap-[var(--space-inline-md)]">
        <Skeleton className="size-12 shrink-0 rounded-full" />
        <div className="flex min-w-0 flex-1 flex-col gap-[var(--space-stack-sm)]">
          <Skeleton className="h-4 w-3/5" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-2/5" />
        </div>
      </div>
      <div className="mt-[var(--space-stack-md)] space-y-[var(--space-stack-sm)]">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-11/12" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  );
}
