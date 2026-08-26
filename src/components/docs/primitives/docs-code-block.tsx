"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/button";
import { docsChromeFontClassName } from "@/components/docs/layout/docs-nav-styles";
import { cn } from "@/lib/utils";

import type { CodeLine } from "./docs-code-types";

export function DocsCodeBlock({ lines }: { lines: CodeLine[] }) {
  return (
    <pre className="overflow-x-auto px-0 py-[var(--space-stack-sm)] font-mono text-[0.875rem] leading-[1.75rem]">
      {lines.map((line, index) => (
        <div key={index} className="flex min-h-[1.625rem] items-start">
          <span
            className="sticky left-0 w-16 shrink-0 bg-[var(--docs-code-header-bg)]"
            aria-hidden
          />
          <code className="block min-w-0 flex-1 pr-[var(--space-inline-md)]">
            {line.tokens.map((token, tokenIndex) => (
              <span key={tokenIndex} className={token.className}>
                {token.text}
              </span>
            ))}
          </code>
        </div>
      ))}
    </pre>
  );
}

export function DocsCopyableCode({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <DocsCodeCopyButton text={text} />
      {children}
    </div>
  );
}

function DocsCodeCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={copied ? "Copied" : "Copy code"}
      aria-live="polite"
      className={cn(
        docsChromeFontClassName,
        "absolute top-[var(--space-stack-sm)] right-[var(--space-inline-sm)] z-10",
        "bg-[var(--docs-code-bg)]"
      )}
      onClick={copy}
    >
      {copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
      <span className="grid justify-items-start">
        <span className="invisible col-start-1 row-start-1" aria-hidden>
          Copied
        </span>
        <span className="col-start-1 row-start-1">{copied ? "Copied" : "Copy"}</span>
      </span>
    </Button>
  );
}
