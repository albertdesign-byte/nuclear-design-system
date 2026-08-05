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
        Resultado HbA1c: 7.2%
      </span>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Explicar HbA1c"
            />
          }
        >
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent side="top">
          La hemoglobina glicosilada (HbA1c) refleja el control glucémico
          promedio de los últimos 2–3 meses.
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
