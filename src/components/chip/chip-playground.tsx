"use client";

import { useState } from "react";

import { Chip } from "@/components/chip";
import { ThemeToggle } from "@/components/theme-toggle";

const initialTags = ["MRI Brain", "Prior Auth", "Stat"];

export function ChipPlayground() {
  const [tags, setTags] = useState(initialTags);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Chip Playground</h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
        <div>
          <h2 className="mb-3 text-sm font-semibold">Dismissible filters</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip
                key={tag}
                onRemove={() => setTags((current) => current.filter((t) => t !== tag))}
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-2">
            <Chip variant="default">Default</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="muted">Muted</Chip>
          </div>
        </div>
      </section>
    </div>
  );
}
