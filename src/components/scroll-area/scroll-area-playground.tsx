"use client";

import { ScrollArea } from "@/components/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";

const medications = [
  "Metformina 850 mg — cada 12 h",
  "Losartán 50 mg — cada 24 h",
  "Atorvastatina 20 mg — cada 24 h",
  "Aspirina 100 mg — cada 24 h",
  "Levotiroxina 75 mcg — ayunas",
  "Omeprazol 20 mg — antes del desayuno",
  "Amlodipino 5 mg — cada 24 h",
  "Insulina glargina 22 UI — noche",
  "Empagliflozina 10 mg — mañana",
  "Carvedilol 6.25 mg — cada 12 h",
];

export function ScrollAreaPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Scroll Area Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Medication list</h2>
        <ScrollArea className="h-48 rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <ul className="divide-y divide-[var(--color-border-subtle)] p-[var(--space-inline-sm)]">
            {medications.map((item) => (
              <li
                key={item}
                className="py-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </section>
    </div>
  );
}
