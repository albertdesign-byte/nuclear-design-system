import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import type { chipVariants } from "./chip.styles";

export type ChipVariant = "default" | "outline" | "muted";

export interface ChipProps
  extends ComponentProps<"span">,
    VariantProps<typeof chipVariants> {
  /** Optional remove handler — renders a dismiss control when set. */
  onRemove?: () => void;
  removeLabel?: string;
}
