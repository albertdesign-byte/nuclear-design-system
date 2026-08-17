"use client";

import {
  AlertErrorPreview,
  AlertInfoPreview,
  AlertSuccessPreview,
  AlertWarningPreview,
  DismissibleAlertPreview,
} from "@/components/docs/components/alert/alert-preview-blocks";
import { ThemeToggle } from "@/components/theme-toggle";

export function AlertPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Alert Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
        <h2 className="text-sm font-semibold">Unified Alert variants</h2>
        <AlertSuccessPreview />
        <AlertWarningPreview />
        <AlertErrorPreview />
        <AlertInfoPreview />
        <DismissibleAlertPreview />
      </section>
    </div>
  );
}
