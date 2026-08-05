"use client";

import { useState } from "react";
import { DownloadIcon, PlusIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/button";
import type { ButtonIntent, ButtonSize, ButtonVariant } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

const variants: ButtonVariant[] = ["primary", "secondary", "outline", "ghost"];
const intents: ButtonIntent[] = ["default", "danger"];
const sizes: ButtonSize[] = [
  "sm",
  "md",
  "lg",
  "icon-sm",
  "icon-md",
  "icon-lg",
];

export function ButtonPlayground() {
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [intent, setIntent] = useState<ButtonIntent>("default");
  const [size, setSize] = useState<ButtonSize>("md");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

  const isIconOnly = size.startsWith("icon-");

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Button Playground</h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <Field label="Variant">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={variant}
              onChange={(e) => setVariant(e.target.value as ButtonVariant)}
            >
              {variants.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Intent">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={intent}
              onChange={(e) => setIntent(e.target.value as ButtonIntent)}
            >
              {intents.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Size">
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={size}
              onChange={(e) => setSize(e.target.value as ButtonSize)}
            >
              {sizes.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>

          <Toggle label="Disabled" checked={disabled} onChange={setDisabled} />
          <Toggle label="Loading" checked={loading} onChange={setLoading} />
          <Toggle label="Full width" checked={fullWidth} onChange={setFullWidth} />
        </aside>

        <section className="flex min-h-64 flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-border bg-muted/30 p-8">
          <Button
            variant={variant}
            intent={intent}
            size={size}
            disabled={disabled}
            loading={loading}
            fullWidth={fullWidth}
            loadingLabel="Processing"
            aria-label={isIconOnly ? "Delete item" : undefined}
          >
            {isIconOnly ? (
              <Trash2Icon />
            ) : (
              <>
                <PlusIcon />
                Guardar cambios
              </>
            )}
          </Button>

          <code className="rounded-md bg-background px-3 py-2 text-xs text-muted-foreground">
            {`<Button variant="${variant}" intent="${intent}" size="${size}"${
              disabled ? " disabled" : ""
            }${loading ? " loading" : ""}${fullWidth ? " fullWidth" : ""} />`}
          </code>
        </section>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">Matrix — default intent</h2>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <Button key={v} variant={v} size="md">
              {v}
            </Button>
          ))}
        </div>

        <h2 className="text-sm font-semibold">Matrix — danger intent</h2>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <Button key={v} variant={v} intent="danger" size="md">
              {v}
            </Button>
          ))}
        </div>

        <h2 className="text-sm font-semibold">With icons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <PlusIcon />
            Nuevo paciente
          </Button>
          <Button variant="outline">
            <DownloadIcon />
            Exportar
          </Button>
          <Button variant="ghost" intent="danger" size="icon-md" aria-label="Eliminar">
            <Trash2Icon />
          </Button>
        </div>
      </section>
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
    <label className="flex items-center justify-between gap-3 text-sm">
      <span className="font-medium text-muted-foreground">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-4 rounded border-border"
      />
    </label>
  );
}
