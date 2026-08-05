"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function AlertDialogPlayground() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Alert Dialog Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Delete record confirmation</h2>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger render={<Button intent="danger" variant="outline" />}>
            Delete record
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete clinical record?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently removes the progress note from María
                González&apos;s chart. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction intent="danger" onClick={() => setOpen(false)}>
                Delete record
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </div>
  );
}
