import { CheckboxField } from "@/components/checkbox";

export function CheckboxRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Informed consent
      </h3>
      <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Confirm required authorizations before continuing registration.
      </p>
      <CheckboxField
        id="checkbox-real-screen-consent"
        defaultChecked
        className="mt-[var(--space-stack-md)]"
        label="Clinical data processing"
        description="I accept clinical data processing per center policy."
      />
    </div>
  );
}
