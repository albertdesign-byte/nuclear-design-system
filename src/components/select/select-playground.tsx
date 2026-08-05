"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import type { SelectTriggerSize } from "@/components/select";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: SelectTriggerSize[] = ["sm", "md", "lg"];

export function SelectPlayground() {
  const [size, setSize] = useState<SelectTriggerSize>("md");
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Select Playground
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
              onChange={(e) => setSize(e.target.value as SelectTriggerSize)}
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
              <Select defaultValue="active" disabled={disabled}>
                <SelectTrigger
                  size={size}
                  fullWidth={fullWidth}
                  aria-invalid={invalid || undefined}
                >
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="observation">En observación</SelectItem>
                  <SelectItem value="discharged">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
            <div className="flex max-w-md flex-col gap-3">
              {sizes.map((item) => (
                <Select key={item} defaultValue="active">
                  <SelectTrigger size={item}>
                    <SelectValue placeholder={`Size ${item}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Activo</SelectItem>
                  </SelectContent>
                </Select>
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
