"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  CircleHelpIcon,
  FileUpIcon,
  InfoIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";

type TooltipSide = "top" | "bottom" | "left" | "right";

export function TooltipPlacementPreview() {
  return (
    <div className="grid min-h-64 place-items-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border-subtle)] p-[var(--space-card)]">
      <div className="grid grid-cols-3 items-center gap-[var(--space-stack-lg)]">
        <span aria-hidden />
        <PlacementTooltip side="top" />
        <span aria-hidden />
        <PlacementTooltip side="left" />
        <div className="flex size-20 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
          Trigger
        </div>
        <PlacementTooltip side="right" />
        <span aria-hidden />
        <PlacementTooltip side="bottom" />
        <span aria-hidden />
      </div>
    </div>
  );
}

function PlacementTooltip({ side }: { side: TooltipSide }) {
  const label = side[0].toUpperCase() + side.slice(1);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" size="sm">
            {label}
          </Button>
        }
      />
      <TooltipContent side={side}>{label} placement</TooltipContent>
    </Tooltip>
  );
}

export function TooltipTriggerTypesPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-lg)]">
      <TriggerExample label="Icon Button">
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
          <TooltipContent>Patient ID help</TooltipContent>
        </Tooltip>
      </TriggerExample>

      <TriggerExample label="Text Link">
        <Tooltip>
          <TooltipTrigger
            render={
              <Link
                href="#tooltip-guidelines"
                className="rounded-[var(--radius-sm)] font-medium text-[var(--color-text-link)] underline underline-offset-4 outline-none hover:text-[var(--color-text-link-hover)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
              >
                Insurance details
              </Link>
            }
          />
          <TooltipContent>View plan and eligibility information</TooltipContent>
        </Tooltip>
      </TriggerExample>

      <TriggerExample label="Button">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="secondary">
                <FileUpIcon data-icon="inline-start" />
                Upload study
              </Button>
            }
          />
          <TooltipContent>Upload DICOM files</TooltipContent>
        </Tooltip>
      </TriggerExample>

      <TriggerExample label="Form Element">
        <Tooltip>
          <TooltipTrigger
            render={
              <Input
                aria-label="Patient ID"
                value="MED-104829"
                readOnly
                fullWidth={false}
              />
            }
          />
          <TooltipContent>Internal patient identifier</TooltipContent>
        </Tooltip>
      </TriggerExample>
    </div>
  );
}

function TriggerExample({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-28 flex-col justify-between gap-[var(--space-stack-md)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        {label}
      </span>
      <div className="flex min-h-12 items-center">{children}</div>
    </div>
  );
}

export function TooltipContentPatternsPreview() {
  return (
    <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
      <TooltipExample trigger="Simple text" content="Patient ID" />
      <TooltipExample
        trigger="Short description"
        content="Report reviewed and ready to share."
      />
      <TooltipExample
        trigger="Help content"
        content="Upload DICOM files only. Remove direct patient identifiers from filenames."
      />
    </div>
  );
}

function TooltipExample({
  trigger,
  content,
}: {
  trigger: string;
  content: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" size="sm">
            {trigger}
          </Button>
        }
      />
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
}

export function HealthcareTooltipExamplesPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <HealthcareExample
        label="Patient ID"
        value="MED-104829"
        tooltip="Internal identifier used across referrals and imaging studies."
        icon={<InfoIcon />}
      />
      <HealthcareExample
        label="Study Status"
        value="Pending review"
        tooltip="The radiology report has not been signed yet."
        icon={<CircleHelpIcon />}
      />
      <HealthcareExample
        label="Upload Information"
        value="DICOM files"
        tooltip="Supported files are validated before they are attached to the patient record."
        icon={<FileUpIcon />}
      />
      <HealthcareExample
        label="Insurance Information"
        value="Eligibility verified"
        tooltip="Coverage was verified today using the active plan on file."
        icon={<ShieldCheckIcon />}
      />
    </div>
  );
}

function HealthcareExample({
  label,
  value,
  tooltip,
  icon,
}: {
  label: string;
  value: string;
  tooltip: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-[var(--space-inline-md)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div>
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          {label}
        </p>
        <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
          {value}
        </p>
      </div>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xl"
              aria-label={`${label} help`}
            />
          }
        >
          {icon}
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </div>
  );
}

export function TooltipGuidelineCard({
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
