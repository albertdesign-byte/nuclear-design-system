import { Button } from "@/components/button";

export function ButtonRealScreenPreview() {
  return (
    <div className="relative w-full max-w-lg min-h-[17.5rem] overflow-hidden rounded-[var(--radius-lg)] border border-border">
      <div
        className="bg-muted/40 px-[var(--space-page)] py-[var(--space-stack-lg)]"
        aria-hidden
      >
        <div className="h-2.5 w-28 rounded-sm bg-muted" />
        <div className="mt-[var(--space-stack-md)] h-2 w-full max-w-xs rounded-sm bg-muted/80" />
        <div className="mt-2 h-2 w-2/3 rounded-sm bg-muted/60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-overlay)] p-[var(--space-page)]">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="button-real-screen-title"
          className="w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border border-border bg-card shadow-lg"
        >
          <div className="p-[var(--space-card)]">
            <h3
              id="button-real-screen-title"
              className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground"
            >
              Save changes
            </h3>
            <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
              Contact details will be updated in Elena Morales&apos;s clinical record.
            </p>
          </div>

          <div className="flex flex-wrap justify-end gap-[var(--space-inline-sm)] border-t border-border bg-muted/30 px-[var(--space-card)] py-[var(--space-stack-sm)]">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
