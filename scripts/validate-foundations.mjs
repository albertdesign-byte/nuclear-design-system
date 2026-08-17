#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function check(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
    return;
  }

  failed = true;
  console.error(`✗ ${message}`);
}

const disabledPage = read(
  "src/components/docs/foundations/disabled-state/disabled-state-docs-page.tsx"
);
const disabledPreviews = read(
  "src/components/docs/foundations/disabled-state/disabled-state-preview-blocks.tsx"
);
const disabledSnippets = read(
  "src/components/docs/foundations/disabled-state/disabled-state-code-snippets.ts"
);
const registry = read("src/components/docs/config/foundations-registry.ts");
const sidebar = read("src/components/docs/layout/docs-sidebar.tsx");
const activeResolver = read(
  "src/components/docs/config/navigation-active.ts"
);

console.log("=== Foundations validation ===\n");

for (const section of [
  "native-disabled",
  "aria-disabled",
  "data-disabled",
]) {
  check(
    disabledPage.includes(`id="${section}"`) &&
      registry.includes(`id: "${section}"`),
    `disabled section #${section} exists in page and registry`
  );
}

check(
  disabledSnippets.includes("<Button disabled>Submit referral</Button>") &&
    disabledPreviews.includes("NativeDisabledButtonPreview"),
  "native disabled button example exists"
);
check(
  disabledSnippets.includes('aria-disabled="true"') &&
    disabledSnippets.includes("event.preventDefault()") &&
    disabledPreviews.includes("AriaDisabledLinkPreview"),
  "guarded aria-disabled link example exists"
);
check(
  disabledSnippets.includes("<DropdownMenuItem disabled>") &&
    disabledPreviews.includes("DataDisabledMenuItemPreview"),
  "data-disabled menu item example exists"
);
check(
  disabledSnippets.includes("ariaDisabledWithoutGuardSnippet") &&
    disabledSnippets.includes("does not block navigation") &&
    disabledPreviews.includes("AriaDisabledWithoutGuardPreview"),
  "unguarded aria-disabled anti-pattern exists"
);

check(
  sidebar.includes("resolveActiveNavHref(pathname, items)") &&
    sidebar.includes("activeHref === item.href"),
  "sidebar consumes one resolved active href"
);
check(
  activeResolver.includes("hasChildItem") &&
    activeResolver.includes("depthDifference"),
  "active resolver enforces exact parent and most-specific child matching"
);

console.log("");
if (failed) {
  console.error("Foundations validation failed.");
  process.exit(1);
}

console.log("Foundations disabled semantics and navigation are valid.");
