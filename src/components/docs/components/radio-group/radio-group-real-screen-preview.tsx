import { RadioGroupField } from "@/components/radio-group";

export function RadioGroupRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <RadioGroupField
        id="radio-real-screen"
        legend="Visit type"
        description="Select how the follow-up appointment will take place."
        defaultValue="telemedicine"
        options={[
          { value: "in-person", label: "In-person at clinic" },
          { value: "telemedicine", label: "Telemedicine" },
          { value: "home", label: "Home visit" },
        ]}
      />
    </div>
  );
}
