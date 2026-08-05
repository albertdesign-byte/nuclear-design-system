import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";

export function FieldErrorRealScreenPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-[var(--space-stack-xs)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-page)]">
      <Label htmlFor="field-error-preview-email" invalid>
        Email
      </Label>
      <Input
        id="field-error-preview-email"
        aria-invalid
        aria-describedby="field-error-preview-message"
        defaultValue="not-an-email"
      />
      <FieldError id="field-error-preview-message">
        Enter a valid email address.
      </FieldError>
    </div>
  );
}
