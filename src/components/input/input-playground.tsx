"use client";

import { useState } from "react";

import { Input } from "@/components/input";
import type { InputSize } from "@/components/input";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: InputSize[] = ["sm", "md", "lg"];

export function InputPlayground() {
  const [size, setSize] = useState<InputSize>("md");
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [value, setValue] = useState("Elena Morales");

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Input Playground</h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <Field label="Size">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={size}
              onChange={(e) => setSize(e.target.value as InputSize)}
            >
              {sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Toggle label="Disabled" checked={disabled} onChange={setDisabled} />
          <Toggle label="Invalid" checked={invalid} onChange={setInvalid} />
          <Toggle label="Full width" checked={fullWidth} onChange={setFullWidth} />
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>
            <div className={fullWidth ? "w-full max-w-md" : "inline-block"}>
              <Input
                size={size}
                fullWidth={fullWidth}
                disabled={disabled}
                aria-invalid={invalid || undefined}
                placeholder="Patient name"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
            <div className="flex max-w-md flex-col gap-3">
              {sizes.map((item) => (
                <Input
                  key={item}
                  size={item}
                  placeholder={`Size ${item}`}
                  defaultValue={`Size ${item}`}
                />
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">States</h2>
            <div className="grid max-w-md gap-3">
              <Input placeholder="Default" />
              <Input disabled placeholder="Disabled" />
              <Input aria-invalid placeholder="Invalid" />
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
