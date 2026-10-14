import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const root = dirname(fileURLToPath(import.meta.url));

const dialogStyles = readFileSync(join(root, "dialog.styles.ts"), "utf8");
const dialogComponent = readFileSync(join(root, "dialog.tsx"), "utf8");
const previewSource = readFileSync(
  join(root, "../docs/components/dialog/dialog-alert-preview-blocks.tsx"),
  "utf8"
);

describe("Dialog docs examples open as a side panel", () => {
  it("still ships a centered viewport for Command and compact Dialog", () => {
    expect(dialogStyles).toContain("justify-center");
  });

  it("DialogContent accepts a side placement", () => {
    expect(dialogComponent).toMatch(/placement/);
  });

  it("Create patient and other form examples request side placement", () => {
    expect(previewSource).toMatch(
      /function DialogFormExample[\s\S]*placement="side"/
    );
  });
});
