"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { docsChromeFontClassName } from "@/components/docs/layout/docs-nav-styles";
import { cn } from "@/lib/utils";

type DocsColorSwatchCardProps = {
  step: string;
  hex: string;
  usage: string;
};

export function DocsColorSwatchCard({
  step,
  hex,
  usage,
}: DocsColorSwatchCardProps) {
  const [copied, setCopied] = useState(false);
  const labelOnSwatch = Number(step) >= 500 ? "#FFFFFF" : "#343842";

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      <div
        className="relative flex h-24 items-end p-[var(--space-stack-sm)]"
        style={{ backgroundColor: hex }}
      >
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label={copied ? "Copied" : `Copy ${hex}`}
          aria-live="polite"
          className={cn(
            docsChromeFontClassName,
            "absolute top-[var(--space-stack-sm)] right-[var(--space-stack-sm)]",
            "border-[var(--color-border-subtle)] bg-[var(--color-surface)]",
            "hover:border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-hover)]"
          )}
          onClick={copyHex}
        >
          {copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
          <span className="grid justify-items-start">
            <span className="invisible col-start-1 row-start-1" aria-hidden>
              Copied
            </span>
            <span className="col-start-1 row-start-1">
              {copied ? "Copied" : "Copy"}
            </span>
          </span>
        </Button>
        <span
          className="text-[length:var(--text-caption-size)] font-semibold"
          style={{ color: labelOnSwatch }}
        >
          {step}
        </span>
      </div>
      <div className="flex flex-col gap-[var(--space-stack-xs)] p-[var(--space-card)]">
        <code className="text-[length:var(--text-caption-size)]">{hex}</code>
        <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
          {usage}
        </p>
      </div>
    </article>
  );
}
