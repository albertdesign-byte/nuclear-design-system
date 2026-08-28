"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function useCopiedState(resetMs = 2000) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), resetMs);
    return () => window.clearTimeout(timeoutId);
  }, [copied, resetMs]);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
}

type DocsCopyTokenProps = {
  value: string;
  className?: string;
};

export function DocsCopyToken({ value, className }: DocsCopyTokenProps) {
  const { copied, copy } = useCopiedState();

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={copied ? "Copied" : `Copy ${value}`}
      aria-live="polite"
      title={copied ? "Copied" : `Copy ${value}`}
      className={cn(
        "relative z-0 inline-flex max-w-full items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-sm)]",
        "bg-[var(--docs-inline-code-bg)] px-[0.24rem] py-[0.06rem]",
        "font-mono text-[0.8rem] text-foreground",
        "transition-[var(--motion-hover)]",
        "hover:bg-[var(--color-surface-hover)]",
        "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
        className
      )}
    >
      <span className="grid min-w-0 justify-items-start">
        <span className="invisible col-start-1 row-start-1 truncate" aria-hidden>
          {value}
        </span>
        <span className="col-start-1 row-start-1 truncate">
          {copied ? "Copied" : value}
        </span>
      </span>
      {copied ? (
        <CheckIcon aria-hidden className="size-3 shrink-0" />
      ) : (
        <CopyIcon aria-hidden className="size-3 shrink-0" />
      )}
    </button>
  );
}
