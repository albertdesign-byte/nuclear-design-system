import { Textarea } from "@/components/textarea";

export function TextareaRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Clinical notes
      </h3>
      <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Document relevant observations before closing the visit.
      </p>
      <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-inline-xs)]">
        <label
          htmlFor="textarea-real-screen-notes"
          className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]"
        >
          Observaciones
        </label>
        <Textarea
          id="textarea-real-screen-notes"
          placeholder="Evaluation summary, follow-up plan…"
          defaultValue="Patient stable. Continue current treatment and follow-up in 30 days."
        />
      </div>
    </div>
  );
}
