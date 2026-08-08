"use client";

import { CircleHelpIcon, ExternalLinkIcon } from "lucide-react";

import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { cn } from "@/lib/utils";

const consentDialogBodyClassName =
  "flex flex-col gap-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

export function ShareResultsConsentDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className={cn(
              "inline-flex w-fit items-center gap-[var(--space-inline-xs)]",
              "font-medium text-[var(--color-text-link)] underline-offset-[3px]",
              "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
              "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
            )}
          >
            Learn what this means
            <ExternalLinkIcon aria-hidden className="size-3.5 shrink-0" />
          </button>
        }
      />

      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <div className="flex flex-col gap-[var(--space-stack-md)]">
          <div
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-info-foreground)] text-[var(--color-action-primary-text)]"
          >
            <CircleHelpIcon className="size-5" />
          </div>

          <DialogHeader className="gap-[var(--space-stack-sm)]">
            <DialogTitle>What you are agreeing to</DialogTitle>
          </DialogHeader>

          <div className={consentDialogBodyClassName}>
            <p>
              You agree to allow the transmission of your clinical documents, including radiology
              results and reports, to Medmo, Inc. and its authorized service providers for
              scheduling and care coordination purposes.
            </p>
            <p>These documents may be accessed by:</p>
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
              <li>
                Me – as a Personal Health Record (PHR), in accordance with privacy regulations.
              </li>
              <li>My ordering doctor – for the purpose of continuing my care.</li>
            </ul>
            <p>
              Medmo collects and processes this information in compliance with applicable privacy
              laws. You may withdraw this consent at any time by contacting support.
            </p>
          </div>

          <DialogClose render={<PatientsFlowContinueButton variant="outline" />}>
            Close
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
