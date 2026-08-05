"use client";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";

export function DropdownMenuRealScreenPreview() {
  return (
    <div className="flex w-full max-w-md items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div>
        <p className="text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-primary)]">
          María González
        </p>
        <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          MRN-48291 · Cardiología
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="icon-sm" />}>
          <MoreHorizontalIcon />
          <span className="sr-only">Patient actions</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>María González</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View chart</DropdownMenuItem>
          <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Archive patient
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
