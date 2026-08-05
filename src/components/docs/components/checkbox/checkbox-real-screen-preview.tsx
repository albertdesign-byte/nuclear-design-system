import { Checkbox } from "@/components/checkbox";

export function CheckboxRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Consentimiento informado
      </h3>
      <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Confirma las autorizaciones requeridas antes de continuar el registro.
      </p>
      <label className="mt-[var(--space-stack-md)] flex items-start gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
        <Checkbox id="checkbox-real-screen-consent" defaultChecked />
        <span>
          Acepto el tratamiento de datos clínicos según la política del centro.
        </span>
      </label>
    </div>
  );
}
