"use client";

import { Separator } from "@/components/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export function SeparatorPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Separator Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-sm font-semibold">Datos del paciente</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Información demográfica y contacto.
        </p>
        <Separator className="my-4" />
        <h2 className="text-sm font-semibold">Antecedentes clínicos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Alergias, comorbilidades y medicación habitual.
        </p>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Vertical</h2>
        <div className="flex h-24 items-stretch gap-4">
          <div className="flex-1 rounded-md bg-muted p-3 text-sm">Column A</div>
          <Separator orientation="vertical" />
          <div className="flex-1 rounded-md bg-muted p-3 text-sm">Column B</div>
        </div>
      </section>
    </div>
  );
}
