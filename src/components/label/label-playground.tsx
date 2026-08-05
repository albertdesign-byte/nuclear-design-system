"use client";

import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { ThemeToggle } from "@/components/theme-toggle";

export function LabelPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Label Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Patient name field</h2>
        <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]">
          <Label htmlFor="patient-name">Patient name</Label>
          <Input id="patient-name" placeholder="Enter full legal name" />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Disabled field</h2>
        <div className="group flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]" data-disabled="true">
          <Label htmlFor="disabled-field">Medical record number</Label>
          <Input id="disabled-field" disabled defaultValue="MRN-48291" />
        </div>
      </section>
    </div>
  );
}
