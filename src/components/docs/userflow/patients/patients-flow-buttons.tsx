import { ChevronLeftIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/button";

/** Primary action scale for every Patients userflow screen. */
export const patientsFlowPrimaryButtonSize = "xxl" as const;

type PatientsFlowContinueButtonProps = Omit<
  ComponentProps<typeof Button>,
  "size" | "fullWidth"
>;

export function PatientsFlowContinueButton({
  variant = "primary",
  className,
  ...props
}: PatientsFlowContinueButtonProps) {
  return (
    <Button
      size={patientsFlowPrimaryButtonSize}
      variant={variant}
      fullWidth
      className={className}
      {...props}
    />
  );
}

export function PatientsFlowBackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="-ml-[var(--space-inline-xs)] self-start px-[var(--space-inline-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
      onClick={onClick}
    >
      <ChevronLeftIcon aria-hidden />
      Back
    </Button>
  );
}
