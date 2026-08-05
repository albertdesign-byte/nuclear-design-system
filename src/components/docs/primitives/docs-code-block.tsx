"use client";

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
