"use client";

import {
  ArchiveIcon,
  ClipboardListIcon,
  FileTextIcon,
  SettingsIcon,
  ShieldIcon,
  Trash2Icon,
  UserIcon,
  UserMinusIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconButton,
  DropdownMenuItem,
  DropdownMenuItemDescription,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/dropdown-menu";

function PreviewCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-28 flex-col items-center justify-center gap-[var(--space-stack-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <span className="text-[length:var(--text-caption-size)] font-medium text-[var(--color-text-muted)]">
        {label}
      </span>
      {children}
    </div>
  );
}

export function DropdownVariantsPreview() {
  return (
    <div className="grid w-full gap-[var(--space-grid-gap)] sm:grid-cols-2 xl:grid-cols-5">
      <PreviewCell label="Default">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit record</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="Disabled">
        <DropdownMenu>
          <DropdownMenuButton size="sm" disabled>
            Actions
          </DropdownMenuButton>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="With Icon">
        <DropdownMenu>
          <DropdownMenuButton size="sm">
            <UserIcon data-icon="inline-start" />
            Patient
          </DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>View patient</DropdownMenuItem>
              <DropdownMenuItem>Edit demographics</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="With Sections">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Study</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Study</DropdownMenuLabel>
              <DropdownMenuItem>Open study</DropdownMenuItem>
              <DropdownMenuItem>Assign reader</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Export</DropdownMenuLabel>
              <DropdownMenuItem>Download DICOM</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="With Descriptions">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Report</DropdownMenuButton>
          <DropdownMenuContent className="w-64">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>
                  Finalize report
                  <DropdownMenuItemDescription>
                    Lock findings and notify the care team
                  </DropdownMenuItemDescription>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>
                  Save as draft
                  <DropdownMenuItemDescription>
                    Keep the report editable
                  </DropdownMenuItemDescription>
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>
    </div>
  );
}

const triggerStateClasses = {
  hover:
    "bg-[var(--color-surface-hover)] text-[var(--color-text-primary)]",
  focus:
    "ring-2 ring-[var(--color-focus-ring)] ring-offset-2 ring-offset-[var(--color-surface)]",
};

export function DropdownStatesPreview() {
  return (
    <div className="grid w-full gap-[var(--space-grid-gap)] sm:grid-cols-2 xl:grid-cols-5">
      <PreviewCell label="Closed">
        <DropdownMenu open={false}>
          <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
        </DropdownMenu>
      </PreviewCell>
      <PreviewCell label="Hover">
        <DropdownMenu open={false}>
          <DropdownMenuButton size="sm" className={triggerStateClasses.hover}>
            Actions
          </DropdownMenuButton>
        </DropdownMenu>
      </PreviewCell>
      <PreviewCell label="Focus">
        <DropdownMenu open={false}>
          <DropdownMenuButton size="sm" className={triggerStateClasses.focus}>
            Actions
          </DropdownMenuButton>
        </DropdownMenu>
      </PreviewCell>
      <PreviewCell label="Open">
        <DropdownMenu defaultOpen>
          <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>View details</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>
      <PreviewCell label="Disabled">
        <DropdownMenu>
          <DropdownMenuButton size="sm" disabled>
            Actions
          </DropdownMenuButton>
        </DropdownMenu>
      </PreviewCell>
    </div>
  );
}

export function DropdownContentPatternsPreview() {
  return (
    <div className="grid w-full gap-[var(--space-grid-gap)] sm:grid-cols-2 xl:grid-cols-4">
      <PreviewCell label="Simple Actions">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Patient</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Edit patient</DropdownMenuItem>
              <DropdownMenuItem>Send message</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="Navigation Actions">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Navigate</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem render={<a href="#accessibility" />}>
                Accessibility
              </DropdownMenuItem>
              <DropdownMenuItem render={<a href="#dropdown-guidelines" />}>
                Guidelines
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="Grouped Actions">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Study</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Workflow</DropdownMenuLabel>
              <DropdownMenuItem>Assign reader</DropdownMenuItem>
              <DropdownMenuItem>Mark urgent</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Export study</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>

      <PreviewCell label="Dangerous Actions">
        <DropdownMenu>
          <DropdownMenuButton size="sm">Manage</DropdownMenuButton>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Edit user</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="danger">
                <UserMinusIcon />
                Remove user
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewCell>
    </div>
  );
}

export function DropdownDangerActionsPreview() {
  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuButton size="sm">Danger actions</DropdownMenuButton>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem variant="danger">
            <Trash2Icon />
            Delete report
          </DropdownMenuItem>
          <DropdownMenuItem variant="danger">
            <ArchiveIcon />
            Archive patient
          </DropdownMenuItem>
          <DropdownMenuItem variant="danger">
            <UserMinusIcon />
            Remove user
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const healthcareMenus = [
  {
    label: "Patient Actions",
    icon: UserIcon,
    items: ["View chart", "Edit demographics", "Schedule follow-up"],
  },
  {
    label: "Study Actions",
    icon: ClipboardListIcon,
    items: ["Open study", "Assign reader", "Download DICOM"],
  },
  {
    label: "Report Actions",
    icon: FileTextIcon,
    items: ["Open report", "Edit findings", "Send to provider"],
  },
  {
    label: "User Management",
    icon: ShieldIcon,
    items: ["Edit role", "Reset access", "Review audit log"],
  },
] as const;

export function DropdownHealthcareExamplesPreview() {
  return (
    <div className="grid w-full gap-[var(--space-grid-gap)] sm:grid-cols-2">
      {healthcareMenus.map(({ label, icon: Icon, items }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
        >
          <div className="flex items-center gap-[var(--space-inline-sm)]">
            <Icon className="size-4 text-[var(--color-text-muted)]" aria-hidden />
            <span className="text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
              {label}
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuIconButton aria-label={`Open ${label.toLowerCase()}`} />
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                {items.map((item) => (
                  <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
}

export function DropdownGuidelineCard({
  title,
  description,
  correct,
  incorrect,
  icon: Icon = SettingsIcon,
}: {
  title: string;
  description: string;
  correct: string;
  incorrect: string;
  icon?: typeof SettingsIcon;
}) {
  return (
    <article className="flex h-full flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div className="flex items-center gap-[var(--space-inline-sm)]">
        <Icon className="size-4 text-[var(--color-text-muted)]" aria-hidden />
        <h3 className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
      </div>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        {description}
      </p>
      <div className="mt-auto grid gap-[var(--space-stack-xs)]">
        <p className="text-[length:var(--text-caption-size)] text-[var(--color-success-text)]">
          <strong>Correct:</strong> {correct}
        </p>
        <p className="text-[length:var(--text-caption-size)] text-[var(--color-error-text)]">
          <strong>Incorrect:</strong> {incorrect}
        </p>
      </div>
    </article>
  );
}
