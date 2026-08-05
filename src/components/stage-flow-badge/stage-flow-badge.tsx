"use client";

import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  stageFlowBadgeLabelClassName,
  stageFlowBadgeVariants,
} from "./stage-flow-badge.styles";
import type { StageFlowBadgeProps } from "./stage-flow-badge.types";

function StageFlowBadge({
  className,
  variant = "success",
  hideArrow = false,
  children,
  ...props
}: StageFlowBadgeProps) {
  return (
    <span
      data-slot="stage-flow-badge"
      data-variant={variant}
      className={cn(stageFlowBadgeVariants({ variant }), className)}
      {...props}
    >
      <span className={stageFlowBadgeLabelClassName}>{children}</span>
      {!hideArrow ? <ChevronRightIcon aria-hidden /> : null}
    </span>
  );
}

export { StageFlowBadge, stageFlowBadgeVariants };
