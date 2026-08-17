import { InputField } from "@/components/input";

export function InputRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Clinical intake
      </h3>
      <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-sm)]">
        <InputField
          id="input-real-screen-mrn"
          label="Medical record number"
          prefix="MRN"
          defaultValue="104829"
        />
        <InputField
          id="input-real-screen-weight"
          label="Weight"
          suffix="kg"
          inputMode="decimal"
          defaultValue="72.5"
        />
        <InputField
          id="input-real-screen-phone"
          label="Phone"
          type="tel"
          defaultValue="+1 (555) 014-2098"
        />
      </div>
    </div>
  );
}
