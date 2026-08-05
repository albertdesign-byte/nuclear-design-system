"use client";

import { useState } from "react";

import { Button } from "@/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import type { CardSize } from "@/components/card";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: CardSize[] = ["default", "sm"];

export function CardPlayground() {
  const [size, setSize] = useState<CardSize>("default");
  const [showFooter, setShowFooter] = useState(true);
  const [showAction, setShowAction] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Card Playground
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
              onChange={(e) => setSize(e.target.value as CardSize)}
            >
              {sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Toggle
            label="Show footer"
            checked={showFooter}
            onChange={setShowFooter}
          />
          <Toggle
            label="Show action"
            checked={showAction}
            onChange={setShowAction}
          />
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>
            <Card size={size} className="max-w-sm">
              <CardHeader>
                <CardTitle>María González</CardTitle>
                <CardDescription>ID #48291 · 58 años</CardDescription>
                {showAction ? (
                  <CardAction>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </CardAction>
                ) : null}
              </CardHeader>
              <CardContent>
                Signos vitales dentro de rangos normales. Próxima cita programada
                para el 18 de julio.
              </CardContent>
              {showFooter ? (
                <CardFooter>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Ver expediente
                  </button>
                </CardFooter>
              ) : null}
            </Card>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {sizes.map((item) => (
                <Card key={item} size={item}>
                  <CardHeader>
                    <CardTitle>{item}</CardTitle>
                  </CardHeader>
                  <CardContent>Card spacing via Medmo tokens.</CardContent>
                </Card>
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

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 rounded border border-border"
      />
      {label}
    </label>
  );
}
