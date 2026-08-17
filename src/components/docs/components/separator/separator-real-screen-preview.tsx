import { Separator } from "@/components/separator";

export function SeparatorRealScreenPreview() {
  return (
    <form className="w-full max-w-md space-y-[var(--space-stack-md)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <fieldset className="space-y-[var(--space-stack-sm)]">
        <legend className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
          Patient data
        </legend>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          Name, ID, and emergency contact.
        </p>
      </fieldset>

      <Separator />

      <fieldset className="space-y-[var(--space-stack-sm)]">
        <legend className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
          Clinical history
        </legend>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          Allergies, comorbidities, and usual medication.
        </p>
      </fieldset>
    </form>
  );
}
