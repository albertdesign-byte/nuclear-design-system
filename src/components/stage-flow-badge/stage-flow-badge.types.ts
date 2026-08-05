import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import type { stageFlowBadgeVariants } from "./stage-flow-badge.styles";

export type StageFlowBadgeVariant = "default" | "success" | "warning" | "neutral";

export interface StageFlowBadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof stageFlowBadgeVariants> {
  /** Pipeline label, e.g. "Requested → MS1 Approved". */
  children: React.ReactNode;
  /** Hide trailing chevron. @default false */
  hideArrow?: boolean;
}
