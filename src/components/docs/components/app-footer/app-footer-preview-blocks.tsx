import {
  ExternalLinkIcon,
  KeyboardIcon,
  LayoutTemplateIcon,
  ShieldCheckIcon,
} from "lucide-react";

import {
  AppFooter,
  MEDMO_WEBSITE_URL,
  patientsFooterLinkClassName,
} from "@/components/app-footer";
import { cn } from "@/lib/utils";

const footerLinkStateClasses = {
  default: "",
  hover: "bg-[var(--color-action-primary-hover)] underline",
  focus:
    "ring-[length:var(--focus-ring-width)] ring-[var(--color-action-primary-text)] ring-offset-[length:var(--focus-ring-offset)] ring-offset-[var(--color-action-primary)]",
  active: "bg-[var(--color-action-primary-active)] underline",
};

export function FooterLinkStatesPreview() {
  return (
    <div className="grid w-full gap-[var(--space-grid-gap)] rounded-[var(--radius-card)] bg-[var(--color-action-primary)] p-[var(--space-card)] sm:grid-cols-2 lg:grid-cols-4">
      {(Object.keys(footerLinkStateClasses) as Array<
        keyof typeof footerLinkStateClasses
      >).map((state) => (
        <div
          key={state}
          className="flex min-h-24 flex-col items-start justify-center gap-[var(--space-stack-sm)]"
        >
          <span className="text-[length:var(--text-caption-size)] font-medium capitalize text-[var(--color-action-primary-text)] opacity-80">
            {state}
          </span>
          <a
            href={MEDMO_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              patientsFooterLinkClassName,
              footerLinkStateClasses[state]
            )}
          >
            About Medmo
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export function FooterResponsivePreview() {
  return (
    <div className="flex w-full flex-col items-center gap-[var(--space-stack-xl)]">
      <div className="w-full max-w-sm">
        <p className="mb-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] font-medium text-[var(--color-text-muted)]">
          Mobile
        </p>
        <AppFooter variant="patients" device="mobile" className="rounded-[var(--radius-card)]" />
      </div>
      <div className="w-full max-w-3xl">
        <p className="mb-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] font-medium text-[var(--color-text-muted)]">
          Tablet
        </p>
        <AppFooter variant="patients" device="tablet" className="rounded-[var(--radius-card)]" />
      </div>
      <div className="w-full">
        <p className="mb-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] font-medium text-[var(--color-text-muted)]">
          Desktop
        </p>
        <AppFooter variant="patients" device="desktop" className="rounded-[var(--radius-card)]" />
      </div>
    </div>
  );
}

export function FooterGuidelineCard({
  title,
  description,
  correct,
  incorrect,
  icon: Icon = LayoutTemplateIcon,
}: {
  title: string;
  description: string;
  correct: string;
  incorrect: string;
  icon?:
    | typeof LayoutTemplateIcon
    | typeof ShieldCheckIcon
    | typeof KeyboardIcon
    | typeof ExternalLinkIcon;
}) {
  return (
    <article className="flex h-full flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div className="flex items-center gap-[var(--space-inline-sm)]">
        <Icon className="size-4 shrink-0 text-[var(--color-text-muted)]" aria-hidden />
        <h3 className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
      </div>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        {description}
      </p>
      <p className="mt-auto text-[length:var(--text-caption-size)] text-[var(--color-success-text)]">
        <strong>Correct:</strong> {correct}
      </p>
      <p className="text-[length:var(--text-caption-size)] text-[var(--color-error-text)]">
        <strong>Incorrect:</strong> {incorrect}
      </p>
    </article>
  );
}
