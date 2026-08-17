"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { CommandDialog } from "@/components/command";
import { CommandActionsPreview } from "@/components/docs/components/global-search-bar/search-command-preview-blocks";
import { ThemeToggle } from "@/components/theme-toggle";

export function CommandPlayground() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Command Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Quick actions and navigation</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Press{" "}
          <kbd className="rounded border px-1.5 py-0.5 text-xs">⌘K</kbd> or use
          the button below.
        </p>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command palette
        </Button>

        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          title="Command Palette"
          description="Run an action or navigate across Medmo"
        >
          <CommandActionsPreview onSelect={() => setOpen(false)} />
        </CommandDialog>
      </section>
    </div>
  );
}
