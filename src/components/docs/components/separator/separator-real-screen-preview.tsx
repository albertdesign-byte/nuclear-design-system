import { Separator } from "@/components/separator";

export function SeparatorRealScreenPreview() {
  return (
    <form className="w-full max-w-md space-y-[var(--space-stack-md)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <fieldset className="space-y-[var(--space-stack-sm)]">
        <legend className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
          Datos del paciente
        </legend>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          Nombre, identificación y contacto de emergencia.
        </p>
      </fieldset>

      <Separator />

      <fieldset className="space-y-[var(--space-stack-sm)]">
        <legend className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
          Antecedentes clínicos
        </legend>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          Alergias, comorbilidades y medicación habitual.
        </p>
      </fieldset>
    </form>
  );
}
