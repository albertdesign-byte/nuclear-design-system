"use client";

import { useState } from "react";
import { CommandIcon } from "lucide-react";

import { Button } from "@/components/button";
import { CommandDialog } from "@/components/command";
import { CommandActionsPreview } from "@/components/docs/components/global-search-bar/search-command-preview-blocks";

export function CommandRealScreenPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <CommandIcon aria-hidden />
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
    </>
  );
}
