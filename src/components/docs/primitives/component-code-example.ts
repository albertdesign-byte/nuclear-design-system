import type { CodeLine } from "./docs-code-types";

/** Full code example for UI Design docs — React + semantic HTML + token-based CSS. */
export type ComponentCodeExample = {
  react: CodeLine[];
  html?: CodeLine[];
  css?: CodeLine[];
};

export function isComponentCodeExample(
  code: CodeLine[] | ComponentCodeExample
): code is ComponentCodeExample {
  return (
    typeof code === "object" &&
    code !== null &&
    "react" in code &&
    Array.isArray(code.react)
  );
}

export function normalizeComponentCode(
  code: CodeLine[] | ComponentCodeExample
): ComponentCodeExample {
  return isComponentCodeExample(code) ? code : { react: code };
}
