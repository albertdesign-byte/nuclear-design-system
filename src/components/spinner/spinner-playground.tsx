"use client";

import { Spinner } from "@/components/spinner";
import type { SpinnerSize } from "@/components/spinner";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: SpinnerSize[] = ["sm", "md", "lg"];

export function SpinnerPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Spinner Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
        <div className="flex items-center gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Spinner size={size} />
              <span className="text-xs text-muted-foreground">{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Saving indicator</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner size="sm" aria-hidden />
          <span>Guardando registro…</span>
        </div>
      </section>
    </div>
  );
}
