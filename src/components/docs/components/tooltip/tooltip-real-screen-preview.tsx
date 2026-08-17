import { CircleHelpIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";

export function TooltipRealScreenPreview() {
  return (
    <div className="flex items-center gap-[var(--space-inline-sm)]">
      <span className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
        Patient ID: MED-104829
      </span>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xl"
              aria-label="Patient ID help"
            />
          }
        >
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent side="top">
          Internal identifier used across referrals and imaging studies.
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
