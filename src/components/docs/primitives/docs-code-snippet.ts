import {
  codeLine,
  docsCodeColors,
  type CodeLine,
} from "./docs-code-types";
import type { ComponentCodeExample } from "./component-code-example";

const { keyword, plain, string: stringColor, tag, attribute, property, value } =
  docsCodeColors;

const TSX_KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "function",
  "return",
]);

const CSS_KEYWORDS = new Set(["var"]);

/**
 * Converts a full TSX example string into highlighted code lines for docs.
 */
export function tsxSnippet(source: string): CodeLine[] {
  return source.replace(/\n$/, "").split("\n").map(highlightTsxLine);
}

/**
 * Converts an HTML string into highlighted code lines for docs.
 */
export function htmlSnippet(source: string): CodeLine[] {
  return source.replace(/\n$/, "").split("\n").map(highlightHtmlLine);
}

/**
 * Converts a CSS string into highlighted code lines for docs.
 */
export function cssSnippet(source: string): CodeLine[] {
  return source.replace(/\n$/, "").split("\n").map(highlightCssLine);
}

export function exampleSnippet(
  jsx: string,
  options?: { imports?: string[]; name?: string }
): CodeLine[] {
  const imports =
    options?.imports ?? ['import { Button } from "@/components/button";'];
  const name = options?.name ?? "Example";

  const jsxBody = jsx
    .split("\n")
    .map((line) => (line.length ? `    ${line}` : line))
    .join("\n");

  const source = `${imports.join("\n")}

export function ${name}() {
  return (
${jsxBody}
  );
}`;

  return tsxSnippet(source);
}

/** Builds a full ComponentCodeExample from React, HTML, and CSS source strings. */
export function componentCodeExample(config: {
  react: string;
  html: string;
  css: string;
  reactHighlight?: "tsx" | "example";
  exampleOptions?: { imports?: string[]; name?: string };
}): ComponentCodeExample {
  const react =
    config.reactHighlight === "example"
      ? exampleSnippet(config.react, config.exampleOptions)
      : tsxSnippet(config.react);

  return {
    react,
    html: htmlSnippet(config.html),
    css: cssSnippet(config.css),
  };
}

function highlightTsxLine(line: string): CodeLine {
  if (line.length === 0) {
    return codeLine();
  }

  const tokens: { text: string; className?: string }[] = [];
  const parts = line.split(/("[^"]*"|'[^']*')/g);

  for (const part of parts) {
    if (!part) continue;

    if (part.startsWith('"') || part.startsWith("'")) {
      tokens.push({ text: part, className: stringColor });
      continue;
    }

    const segments = part.split(/(\b(?:import|from|export|function|return)\b)/g);
    for (const segment of segments) {
      if (!segment) continue;
      tokens.push({
        text: segment,
        className: TSX_KEYWORDS.has(segment) ? keyword : plain,
      });
    }
  }

  return { tokens };
}

function highlightHtmlLine(line: string): CodeLine {
  if (line.length === 0) {
    return codeLine();
  }

  const tokens: { text: string; className?: string }[] = [];
  const tagMatch = line.match(/^(\s*)(<\/?)([\w-]+)([^>]*)(\/?>)(.*)$/);

  if (!tagMatch) {
    return codeLine({ text: line, className: plain });
  }

  const [, indent, open, tagName, attrs, close, rest] = tagMatch;
  if (indent) tokens.push({ text: indent, className: plain });
  tokens.push({ text: open, className: tag });
  tokens.push({ text: tagName, className: tag });

  if (attrs) {
    const attrParts = attrs.split(/(\s[\w-]+=("[^"]*"|'[^']*'))/g).filter(Boolean);
    for (const part of attrParts) {
      if (part.match(/^\s[\w-]+=/)) {
        tokens.push({ text: part, className: attribute });
      } else if (part.startsWith('"') || part.startsWith("'")) {
        tokens.push({ text: part, className: stringColor });
      } else {
        tokens.push({ text: part, className: plain });
      }
    }
  }

  tokens.push({ text: close, className: tag });
  if (rest) tokens.push({ text: rest, className: plain });

  return { tokens };
}

function highlightCssLine(line: string): CodeLine {
  if (line.length === 0) {
    return codeLine();
  }

  const tokens: { text: string; className?: string }[] = [];
  const commentMatch = line.match(/^(\s*)(\/\*.*\*\/)(.*)$/);

  if (commentMatch) {
    const [, indent, comment, rest] = commentMatch;
    if (indent) tokens.push({ text: indent, className: plain });
    tokens.push({ text: comment, className: docsCodeColors.muted });
    if (rest) tokens.push(...highlightCssProperties(rest));
    return { tokens };
  }

  return { tokens: highlightCssProperties(line) };
}

function highlightCssProperties(line: string): { text: string; className?: string }[] {
  const tokens: { text: string; className?: string }[] = [];
  const parts = line.split(/(var\([^)]+\))/g);

  for (const part of parts) {
    if (!part) continue;

    if (part.startsWith("var(")) {
      tokens.push({ text: part, className: value });
      continue;
    }

    const segments = part.split(/([{}:;])/g);
    for (const segment of segments) {
      if (!segment) continue;
      if (segment === "{" || segment === "}" || segment === ";" || segment === ":") {
        tokens.push({ text: segment, className: plain });
      } else if (segment.trim().endsWith("{") || segment.includes(".")) {
        tokens.push({ text: segment, className: property });
      } else if (CSS_KEYWORDS.has(segment.trim())) {
        tokens.push({ text: segment, className: keyword });
      } else {
        tokens.push({ text: segment, className: plain });
      }
    }
  }

  return tokens;
}
