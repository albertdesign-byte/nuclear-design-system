"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconButton,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/dropdown-menu";

export function DropdownMenuRealScreenPreview() {
  return (
    <div className="flex w-full max-w-md items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div>
        <p className="text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
          Maria Gonzalez
        </p>
        <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          MRN-48291 · Cardiology
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuIconButton aria-label="Open patient actions" />
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Maria Gonzalez</DropdownMenuLabel>
            <DropdownMenuItem>View chart</DropdownMenuItem>
            <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="danger">
              Archive patient
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
