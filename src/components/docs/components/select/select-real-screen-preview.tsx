import { SelectField } from "@/components/select";

export function SelectRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Patient data
      </h3>
      <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-sm)]">
        <SelectField
          id="select-real-screen-insurance"
          label="Medical insurance"
          defaultValue="bluecross"
          options={[
            { value: "bluecross", label: "BlueCross PPO" },
            { value: "aetna", label: "Aetna HMO" },
            { value: "medicare", label: "Medicare" },
          ]}
        />
      </div>
    </div>
  );
}
