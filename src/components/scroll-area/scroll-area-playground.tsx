"use client";

import { ScrollArea } from "@/components/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";

const medications = [
  "Metformin 850 mg — every 12 h",
  "Losartan 50 mg — every 24 h",
  "Atorvastatin 20 mg — every 24 h",
  "Aspirin 100 mg — every 24 h",
  "Levothyroxine 75 mcg — on empty stomach",
  "Omeprazole 20 mg — before breakfast",
  "Amlodipine 5 mg — every 24 h",
  "Insulin glargine 22 units — at night",
  "Empagliflozin 10 mg — in the morning",
  "Carvedilol 6.25 mg — every 12 h",
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
