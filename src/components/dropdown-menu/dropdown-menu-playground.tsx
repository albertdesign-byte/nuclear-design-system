"use client";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { MoreHorizontalIcon } from "lucide-react";

export function DropdownMenuPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Dropdown Menu Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Patient actions</h2>
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
            <DropdownMenuItem>
              Export record
              <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Archive patient
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
}
