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
import { cn } from "@/lib/utils";

const sizes: CardSize[] = ["default", "sm"];

export function CardPlayground() {
  const [size, setSize] = useState<CardSize>("default");
  const [showFooter, setShowFooter] = useState(true);
  const [showAction, setShowAction] = useState(false);
  const [showLongContent, setShowLongContent] = useState(false);
  const [multipleActions, setMultipleActions] = useState(false);
  const [narrowPreview, setNarrowPreview] = useState(false);

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
          <Toggle
            label="Long content"
            checked={showLongContent}
            onChange={setShowLongContent}
          />
          <Toggle
            label="Multiple footer actions"
            checked={multipleActions}
            onChange={setMultipleActions}
          />
          <Toggle
            label="Narrow preview"
            checked={narrowPreview}
            onChange={setNarrowPreview}
          />
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>
            <Card
              size={size}
              className={cn("w-full", narrowPreview ? "max-w-[17.5rem]" : "max-w-sm")}
            >
              <CardHeader>
                <CardTitle>
                  <h3>
                    {showLongContent
                      ? "Maria Gonzalez — coordinated cardiology and imaging follow-up"
                      : "Maria Gonzalez"}
                  </h3>
                </CardTitle>
                <CardDescription>
                  {showLongContent
                    ? "MRN 48291 · A longer description remains completely visible as the Card becomes narrow."
                    : "MRN 48291 · 58 years"}
                </CardDescription>
                {showAction ? (
                  <CardAction>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </CardAction>
                ) : null}
              </CardHeader>
              <CardContent>
                {showLongContent
                  ? "Vital signs remain within normal ranges. Additional dynamic notes can increase the Card height without clipping or hidden overflow."
                  : "Vital signs within normal ranges. Next appointment scheduled for July 18."}
              </CardContent>
              {showFooter ? (
                <CardFooter className="justify-end">
                  {multipleActions ? (
                    <>
                      <Button variant="ghost" size="sm">
                        Cancel
                      </Button>
                      <Button variant="outline" size="sm">
                        Save draft
                      </Button>
                    </>
                  ) : null}
                  <Button size="sm">View record</Button>
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
                    <CardTitle>
                      <h3>{item}</h3>
                    </CardTitle>
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
