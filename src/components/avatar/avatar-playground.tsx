"use client";

import { useState } from "react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/avatar";
import type { AvatarSize } from "@/components/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

const sizes: AvatarSize[] = ["sm", "md", "lg"];

export function AvatarPlayground() {
  const [size, setSize] = useState<AvatarSize>("md");
  const [showImage, setShowImage] = useState(true);
  const [showBadge, setShowBadge] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Avatar Playground
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
              onChange={(e) => setSize(e.target.value as AvatarSize)}
            >
              {sizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Toggle
            label="Show image"
            checked={showImage}
            onChange={setShowImage}
          />
          <Toggle label="Show badge" checked={showBadge} onChange={setShowBadge} />
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>
            <Avatar size={size}>
              {showImage ? (
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Dr. Rivera"
                />
              ) : null}
              <AvatarFallback>DR</AvatarFallback>
              {showBadge ? <AvatarBadge aria-hidden /> : null}
            </Avatar>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Size matrix</h2>
            <div className="flex items-center gap-3">
              {sizes.map((item) => (
                <Avatar key={item} size={item}>
                  <AvatarFallback>{item.toUpperCase()}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Group</h2>
            <AvatarGroup>
              <Avatar size={size}>
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Avatar size={size}>
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+2</AvatarGroupCount>
            </AvatarGroup>
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
