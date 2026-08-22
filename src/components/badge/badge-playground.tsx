"use client";

import { useState } from "react";

import { Badge } from "@/components/badge";
import type { BadgeSize, BadgeVariant } from "@/components/badge";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: BadgeSize[] = ["sm", "md", "lg"];
const variants: BadgeVariant[] = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];

export function BadgePlayground() {
  const [size, setSize] = useState<BadgeSize>("md");
  const [variant, setVariant] = useState<BadgeVariant>("default");

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Badge Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <Field label="Size">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={size}
              onChange={(e) => setSize(e.target.value as BadgeSize)}
            >
              {sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Variant">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={variant}
              onChange={(e) => setVariant(e.target.value as BadgeVariant)}
            >
              {variants.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>
            <Badge size={size} variant={variant}>
              Stable
            </Badge>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Variant matrix</h2>
            <div className="flex flex-wrap gap-2">
              {variants.map((item) => (
                <Badge key={item} size={size} variant={item}>
                  {item}
                </Badge>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
            <div className="flex flex-wrap items-center gap-2">
              {sizes.map((item) => (
                <Badge key={item} size={item} variant={variant}>
                  {item}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
