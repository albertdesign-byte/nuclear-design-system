import {
  AlertTriangleIcon,
  BellIcon,
  CheckCircle2Icon,
  CircleAlertIcon,
  ClipboardListIcon,
  DownloadIcon,
  FlaskConicalIcon,
  LayoutGridIcon,
  SearchIcon,
  SettingsIcon,
  UploadIcon,
  UsersIcon,
  XCircleIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@/components/alert";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";
import { iconDocumentation } from "@medmo/tokens/tooling";

type CatalogIconName = (typeof iconDocumentation.catalog)[number]["name"];

const iconComponents: Record<CatalogIconName, LucideIcon> = {
  UsersIcon,
  FlaskConicalIcon,
  ClipboardListIcon,
  UploadIcon,
  DownloadIcon,
  SearchIcon,
  SettingsIcon,
  BellIcon,
};

function getCatalogIcon(name: CatalogIconName) {
  return iconComponents[name];
}

export function IconsOverviewPreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-md)] sm:grid-cols-2">
      <PreviewTile title="Icon + Text">
        <Button variant="outline" size="sm">
          <UploadIcon className="size-[var(--icon-sm)]" aria-hidden />
          Upload report
        </Button>
      </PreviewTile>

      <PreviewTile title="Icon Only">
        <Button variant="ghost" size="icon-md" aria-label="Open settings">
          <SettingsIcon className="size-[var(--icon-sm)]" />
        </Button>
      </PreviewTile>

      <PreviewTile title="Navigation Icons">
        <nav className="flex flex-col gap-[var(--space-stack-xs)]">
          {iconDocumentation.catalog.slice(0, 4).map(({ label, name }) => {
            const Icon = getCatalogIcon(name);
            return (
              <span
                key={name}
                className="inline-flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-text-primary)]"
              >
                <Icon className="size-[var(--icon-sm)] shrink-0" aria-hidden />
                {label}
              </span>
            );
          })}
        </nav>
      </PreviewTile>

      <PreviewTile title="Status Icons">
        <div className="flex flex-col gap-[var(--space-stack-xs)]">
          <StatusRow icon={CheckCircle2Icon} label="Completed" tone="success" />
          <StatusRow icon={AlertTriangleIcon} label="Pending review" tone="warning" />
          <StatusRow icon={CircleAlertIcon} label="Action required" tone="error" />
        </div>
      </PreviewTile>
    </div>
  );
}

export function IconsLibraryPreview() {
  return (
    <div className="flex w-full flex-wrap items-center gap-[var(--space-inline-md)]">
      {iconDocumentation.catalog.map(({ label, name }) => {
        const Icon = getCatalogIcon(name);
        return (
          <div
            key={name}
            className="flex flex-col items-center gap-[var(--space-stack-xs)] rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--color-surface)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]"
          >
            <Icon className="size-[var(--icon-md)] text-[var(--color-text-primary)]" aria-hidden />
            <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function IconsSizesPreview() {
  return (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      {Object.entries(iconDocumentation.sizes).map(([role, size]) => (
        <div
          key={role}
          className="grid grid-cols-[7rem_4rem_1fr] items-center gap-[var(--space-inline-md)] rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--color-surface)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]"
        >
          <code className="text-[length:var(--text-body-small-size)] text-[var(--color-text-primary)]">
            icon-{role}
          </code>
          <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
            {size.px}px
          </span>
          <div className="flex items-center gap-[var(--space-inline-sm)]">
            <SearchIcon
              className="shrink-0 text-[var(--color-text-primary)]"
              style={{
                width: `var(--icon-${role})`,
                height: `var(--icon-${role})`,
              }}
              aria-hidden
            />
            <span className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              Search
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function IconsUsagePreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-md)] lg:grid-cols-2">
      <PreviewTile title="Buttons">
        <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
          <Button size="sm">
            <DownloadIcon className="size-[var(--icon-sm)]" aria-hidden />
            Export
          </Button>
          <Button variant="outline" size="icon-md" aria-label="Search patients">
            <SearchIcon className="size-[var(--icon-sm)]" />
          </Button>
        </div>
      </PreviewTile>

      <PreviewTile title="Inputs">
        <div className="relative w-full max-w-xs">
          <SearchIcon
            className="pointer-events-none absolute top-1/2 left-[var(--space-inline-sm)] size-[var(--icon-sm)] -translate-y-1/2 text-[var(--color-text-muted)]"
            aria-hidden
          />
          <Input className="pl-[calc(var(--space-inline-sm)+var(--icon-sm)+var(--space-inline-xs))]" placeholder="Search patients" />
        </div>
      </PreviewTile>

      <PreviewTile title="Navigation">
        <span className="inline-flex items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-button)] bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)] py-[var(--space-inline-xs)] text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
          <LayoutGridIcon className="size-[var(--icon-sm)]" aria-hidden />
          Dashboard
        </span>
      </PreviewTile>

      <PreviewTile title="Alerts">
        <Alert variant="error" className="w-full">
          <AlertIcon><AlertTriangleIcon /></AlertIcon>
          <AlertTitle>Missing insurance card</AlertTitle>
          <AlertDescription>Upload a photo before scheduling.</AlertDescription>
        </Alert>
      </PreviewTile>

      <PreviewTile title="Cards" className="lg:col-span-2">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-inline-sm)]">
              <UsersIcon className="size-[var(--icon-md)] text-[var(--color-action-primary)]" aria-hidden />
              Active patients
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
            128 patients with studies in progress.
          </CardContent>
        </Card>
      </PreviewTile>
    </div>
  );
}

export function IconsColorPreview() {
  const rows = [
    { label: "Default", className: "text-[var(--color-text-primary)]", state: "Rest" },
    { label: "Hover", className: "text-[var(--color-text-primary)]", state: "Hover" },
    { label: "Active", className: "text-[var(--color-action-primary)]", state: "Selected" },
    { label: "Disabled", className: "text-[var(--color-disabled-text)]", state: "Disabled" },
    { label: "Success", className: "text-[var(--color-success-foreground)]", state: "Success" },
    { label: "Warning", className: "text-[var(--color-warning-foreground)]", state: "Warning" },
    { label: "Error", className: "text-[var(--color-error-foreground)]", state: "Error" },
  ] as const;

  return (
    <div className="grid w-full gap-[var(--space-stack-xs)] sm:grid-cols-2 lg:grid-cols-3">
      {rows.map(({ label, className, state }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--color-surface)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]"
        >
          <div className="flex items-center gap-[var(--space-inline-sm)]">
            <BellIcon className={cn("size-[var(--icon-sm)]", className)} aria-hidden />
            <span className="text-[length:var(--text-body-small-size)] text-[var(--color-text-primary)]">
              {label}
            </span>
          </div>
          <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
            {state}
          </span>
        </div>
      ))}
    </div>
  );
}

export function IconsAccessibilityPreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-md)] sm:grid-cols-2">
      <GuidanceTile tone="correct" title="Icon-only control">
        <Button variant="outline" size="icon-md" aria-label="Download report">
          <DownloadIcon className="size-[var(--icon-sm)]" />
        </Button>
        <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          Uses <code className="text-[var(--color-text-secondary)]">aria-label</code> for screen readers.
        </p>
      </GuidanceTile>

      <GuidanceTile tone="incorrect" title="Icon-only control">
        <Button variant="outline" size="icon-md">
          <DownloadIcon className="size-[var(--icon-sm)]" />
        </Button>
        <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          Missing accessible name — icon meaning is unclear.
        </p>
      </GuidanceTile>

      <GuidanceTile tone="correct" title="Decorative icon">
        <Button size="sm">
          <UploadIcon className="size-[var(--icon-sm)]" aria-hidden />
          Upload study
        </Button>
      </GuidanceTile>

      <GuidanceTile tone="incorrect" title="Critical status">
        <span className="inline-flex items-center gap-[var(--space-inline-xs)] text-[var(--color-error-foreground)]">
          <XCircleIcon className="size-[var(--icon-sm)]" aria-hidden />
        </span>
        <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          Icon alone cannot communicate clinical status.
        </p>
      </GuidanceTile>
    </div>
  );
}

export function IconsDoDontPreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-md)] sm:grid-cols-2">
      <GuidanceTile tone="correct" title="Consistent outline style">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <SearchIcon className="size-[var(--icon-sm)]" aria-hidden />
          <SettingsIcon className="size-[var(--icon-sm)]" aria-hidden />
          <BellIcon className="size-[var(--icon-sm)]" aria-hidden />
        </div>
      </GuidanceTile>

      <GuidanceTile tone="incorrect" title="Mixed filled + outline">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <SearchIcon className="size-[var(--icon-sm)]" aria-hidden />
          <CheckCircle2Icon className="size-[var(--icon-sm)] fill-[var(--color-success-foreground)] stroke-none" aria-hidden />
          <BellIcon className="size-[var(--icon-sm)]" aria-hidden />
        </div>
      </GuidanceTile>

      <GuidanceTile tone="correct" title="Clear meaning + label">
        <Button size="sm" variant="outline">
          <UsersIcon className="size-[var(--icon-sm)]" aria-hidden />
          View patients
        </Button>
      </GuidanceTile>

      <GuidanceTile tone="incorrect" title="Too many decorative icons">
        <div className="flex flex-wrap gap-[var(--space-inline-xs)]">
          {iconDocumentation.catalog.map(({ name }) => {
            const Icon = getCatalogIcon(name);
            return (
              <Icon
                key={name}
                className="size-[var(--icon-sm)] text-[var(--color-text-muted)]"
                aria-hidden
              />
            );
          })}
        </div>
      </GuidanceTile>

      <GuidanceTile tone="correct" title="Consistent sizes">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <UsersIcon className="size-[var(--icon-sm)]" aria-hidden />
          <UsersIcon className="size-[var(--icon-sm)]" aria-hidden />
          <UsersIcon className="size-[var(--icon-sm)]" aria-hidden />
        </div>
      </GuidanceTile>

      <GuidanceTile tone="incorrect" title="Inconsistent sizes">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <UsersIcon className="size-[var(--icon-xs)]" aria-hidden />
          <UsersIcon className="size-[var(--icon-lg)]" aria-hidden />
          <UsersIcon className="size-[var(--icon-xl)]" aria-hidden />
        </div>
      </GuidanceTile>
    </div>
  );
}

export function IconsDeveloperPreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-md)] sm:grid-cols-2">
      <PreviewTile title="Icon button">
        <Button variant="outline" size="icon-md" aria-label="Notifications">
          <BellIcon className="size-[var(--icon-sm)]" />
        </Button>
      </PreviewTile>

      <PreviewTile title="Button with icon">
        <Button size="sm">
          <UploadIcon className="size-[var(--icon-sm)]" aria-hidden />
          Upload
        </Button>
      </PreviewTile>

      <PreviewTile title="Input with icon">
        <div className="relative w-full max-w-xs">
          <SearchIcon
            className="pointer-events-none absolute top-1/2 left-[var(--space-inline-sm)] size-[var(--icon-sm)] -translate-y-1/2 text-[var(--color-text-muted)]"
            aria-hidden
          />
          <Input className="pl-[calc(var(--space-inline-sm)+var(--icon-sm)+var(--space-inline-xs))]" placeholder="Search studies" />
        </div>
      </PreviewTile>

      <PreviewTile title="Navigation item">
        <span className="inline-flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
          <ClipboardListIcon className="size-[var(--icon-sm)]" aria-hidden />
          Reports
        </span>
      </PreviewTile>
    </div>
  );
}

function PreviewTile({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--color-surface-muted)]/40 p-[var(--space-inline-md)]",
        className
      )}
    >
      <p className="mb-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        {title}
      </p>
      {children}
    </div>
  );
}

function GuidanceTile({
  title,
  tone,
  children,
}: {
  title: string;
  tone: "correct" | "incorrect";
  children: React.ReactNode;
}) {
  const isCorrect = tone === "correct";

  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border p-[var(--space-inline-md)]",
        isCorrect
          ? "border-[var(--color-success-border)] bg-[var(--color-success-background)]/40"
          : "border-[var(--color-error-border)] bg-[var(--color-error-background)]/40"
      )}
    >
      <p
        className={cn(
          "mb-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] font-semibold uppercase tracking-[0.08em]",
          isCorrect ? "text-[var(--color-success-foreground)]" : "text-[var(--color-error-foreground)]"
        )}
      >
        {isCorrect ? "Correct" : "Incorrect"} — {title}
      </p>
      {children}
    </div>
  );
}

function StatusRow({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof CheckCircle2Icon;
  label: string;
  tone: "success" | "warning" | "error";
}) {
  const toneClass = {
    success: "text-[var(--color-success-foreground)]",
    warning: "text-[var(--color-warning-foreground)]",
    error: "text-[var(--color-error-foreground)]",
  }[tone];

  return (
    <span className="inline-flex items-center gap-[var(--space-inline-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-primary)]">
      <Icon className={cn("size-[var(--icon-sm)] shrink-0", toneClass)} aria-hidden />
      {label}
    </span>
  );
}
