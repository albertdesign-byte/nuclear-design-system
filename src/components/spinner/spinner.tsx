import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

import { spinnerVariants } from "./spinner.styles";

export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps
  extends Omit<ComponentProps<"svg">, "size">,
    VariantProps<typeof spinnerVariants> {
  /** Icon scale derived from iconography tokens. @default "md" */
  size?: SpinnerSize;
}

function Spinner({
  className,
  size = "md",
  ...props
}: SpinnerProps) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}

export { Spinner };
