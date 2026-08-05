import {
  SelectInsuranceDemo,
} from "@/components/docs/components/select/select-docs-examples";

export function SelectRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Datos del paciente
      </h3>
      <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-sm)]">
        <div className="grid gap-[var(--space-inline-xs)]">
          <label
            htmlFor="select-real-screen-insurance"
            className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]"
          >
            Seguro médico
          </label>
          <SelectInsuranceDemo
            triggerId="select-real-screen-insurance"
            className="max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
