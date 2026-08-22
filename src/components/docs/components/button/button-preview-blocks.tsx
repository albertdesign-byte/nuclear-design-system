"use client";

import type { ReactNode } from "react";
import {
  ArchiveIcon,
  ArrowRightIcon,
  EyeIcon,
  SaveIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import type { ButtonSize } from "@/components/button";
import { cn } from "@/lib/utils";
import { buttonPrimaryStateClassName } from "@/stories/shared/interaction-state-classes";

const textSizes: Array<{
  size: Exclude<ButtonSize, `icon-${string}`>;
  current: string;
  currentClassName: string;
  proposed: string;
}> = [
  {
    size: "sm",
    current: "8px",
    currentClassName: "!px-[var(--space-inline-sm)]",
    proposed: "12px",
  },
  {
    size: "md",
    current: "8px",
    currentClassName: "!px-[var(--space-inline-sm)]",
    proposed: "12px",
  },
  {
    size: "lg",
    current: "12px",
    currentClassName: "!px-[var(--space-inline-md)]",
    proposed: "16px",
  },
  {
    size: "xl",
    current: "12px",
    currentClassName: "!px-[var(--space-inline-md)]",
    proposed: "20px",
  },
  {
    size: "xxl",
    current: "16px",
    currentClassName: "!px-[var(--space-inline-lg)]",
    proposed: "24px",
  },
];

export function ButtonPaddingComparisonPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <PaddingColumn title="Current" description="8 / 8 / 12 / 12 / 16px">
        {textSizes.map(({ size, current, currentClassName }) => (
          <PaddingRow key={size} label={`${size} · ${current}`}>
            <Button size={size} className={currentClassName}>
              Save patient
            </Button>
          </PaddingRow>
        ))}
      </PaddingColumn>
      <PaddingColumn
        title="Proposed · adopted"
        description="12 / 12 / 16 / 20 / 24px"
      >
        {textSizes.map(({ size, proposed }) => (
          <PaddingRow key={size} label={`${size} · ${proposed}`}>
            <Button size={size}>Save patient</Button>
          </PaddingRow>
        ))}
      </PaddingColumn>
    </div>
  );
}

function PaddingColumn({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div>
        <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
        <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

function PaddingRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-h-16 items-center justify-between gap-[var(--space-inline-md)] border-t border-[var(--color-border-subtle)] pt-[var(--space-stack-sm)]">
      <span className="text-[length:var(--text-caption-size)] font-medium uppercase text-[var(--color-text-muted)]">
        {label}
      </span>
      {children}
    </div>
  );
}

const dangerStateClassName = {
  Default: "",
  Hover:
    "border-[var(--color-error-foreground)] text-[var(--color-error-foreground)]",
  Focus:
    "border-[var(--color-focus-ring)] ring-[length:var(--focus-ring-width)] ring-[var(--color-focus-ring)] ring-offset-[length:var(--focus-ring-offset)]",
  Active:
    "border-[var(--color-error-foreground)] bg-[var(--color-error-background)] text-[var(--color-error-foreground)]",
} as const;

export function DangerButtonStatesPreview() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      {Object.entries(dangerStateClassName).map(([state, className]) => (
        <StateStripRow key={state} label={state}>
          <Button intent="danger" className={cn("pointer-events-none", className)}>
            Delete study
          </Button>
        </StateStripRow>
      ))}
      <StateStripRow label="Disabled">
        <Button intent="danger" disabled>
          Delete study
        </Button>
      </StateStripRow>
      <StateStripRow label="Loading">
        <Button intent="danger" loading loadingLabel="Deleting study">
          Delete study
        </Button>
      </StateStripRow>
    </div>
  );
}

function StateStripRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-[var(--space-inline-md)] border-t border-[var(--color-border-subtle)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)] first:border-t-0">
      <span className="shrink-0 text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        {label}
      </span>
      <div className="min-w-0 shrink-0">{children}</div>
    </div>
  );
}

export function ButtonIconPatternsPreview() {
  return (
    <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save patient
      </Button>
      <Button variant="outline">
        View report
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button size="icon-xl" variant="outline" aria-label="Upload study">
        <UploadIcon />
      </Button>
    </div>
  );
}

export function ButtonGroupsPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-lg)]">
      <ButtonGroupExample label="Primary + Secondary">
        <Button variant="secondary">Back</Button>
        <Button>Continue</Button>
      </ButtonGroupExample>
      <ButtonGroupExample label="Save + Cancel">
        <Button variant="outline">Cancel</Button>
        <Button>Save patient</Button>
      </ButtonGroupExample>
      <ButtonGroupExample label="Confirm + Delete">
        <Button variant="outline">Cancel</Button>
        <Button intent="danger">Delete study</Button>
      </ButtonGroupExample>
    </div>
  );
}

function ButtonGroupExample({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] p-[var(--space-card)]">
      <span className="text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-secondary)]">
        {label}
      </span>
      <div
        role="group"
        aria-label={label}
        className="flex flex-wrap justify-end gap-[var(--space-inline-sm)]"
      >
        {children}
      </div>
    </div>
  );
}

export function ButtonStatesPreview() {
  const states = ["Default", "Hover", "Focus", "Active"] as const;

  return (
    <div className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      {states.map((state) => (
        <StateStripRow key={state} label={state}>
          <Button
            className={cn(
              "pointer-events-none",
              buttonPrimaryStateClassName[state]
            )}
          >
            Save patient
          </Button>
        </StateStripRow>
      ))}
      <StateStripRow label="Disabled">
        <Button disabled>Save patient</Button>
      </StateStripRow>
      <StateStripRow label="Loading">
        <Button loading loadingLabel="Saving patient">
          Save patient
        </Button>
      </StateStripRow>
    </div>
  );
}

export function HealthcareButtonExamplesPreview() {
  return (
    <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save patient
      </Button>
      <Button variant="secondary">
        <UploadIcon data-icon="inline-start" />
        Upload study
      </Button>
      <Button variant="ghost">
        <EyeIcon data-icon="inline-start" />
        View report
      </Button>
      <Button intent="danger">
        <Trash2Icon data-icon="inline-start" />
        Delete study
      </Button>
      <Button variant="outline" intent="danger">
        <ArchiveIcon data-icon="inline-start" />
        Archive record
      </Button>
    </div>
  );
}

export function ButtonGuidelineCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <ul className="mt-[var(--space-stack-sm)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-lg)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        {children}
      </ul>
    </section>
  );
}
