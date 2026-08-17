import { Input } from "@/components/input";
import { Label } from "@/components/label";

export function LabelRealScreenPreview() {
  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <Label htmlFor="patient-name-preview">Patient name</Label>
      <Input
        id="patient-name-preview"
        placeholder="Enter full legal name"
        defaultValue="Maria Gonzalez"
      />
    </div>
  );
}
