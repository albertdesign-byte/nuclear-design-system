"use client";

import type { CodeLine } from "./docs-code-types";
import { normalizeComponentCode } from "./component-code-example";
import { ComponentCodeTabs } from "./component-code-tabs";
import type { ComponentCodeExample } from "./component-code-example";

export type { CodeLine } from "./docs-code-types";
export { docsCodeColors, codeLine } from "./docs-code-types";
export type { ComponentCodeExample } from "./component-code-example";
export { ComponentCodeTabs } from "./component-code-tabs";

export function DocsPreview({
  children,
  code,
  className,
}: {
  children: React.ReactNode;
  code: CodeLine[] | ComponentCodeExample;
  className?: string;
}) {
  const normalized = normalizeComponentCode(code);

  return (
    <ComponentCodeTabs code={normalized} className={className}>
      {children}
    </ComponentCodeTabs>
  );
}
