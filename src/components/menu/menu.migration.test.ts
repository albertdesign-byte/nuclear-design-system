import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const srcRoot = join(process.cwd(), "src");

function walkSourceFiles(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);

    if (statSync(full).isDirectory()) {
      walkSourceFiles(full, files);
      continue;
    }

    if (/\.(ts|tsx|mdx)$/.test(entry) && !entry.endsWith(".test.ts")) {
      files.push(full);
    }
  }

  return files;
}

describe("Menu migration leftovers", () => {
  it("does not leave a second App Sidebar implementation", () => {
    expect(existsSync(join(srcRoot, "components/app-sidebar"))).toBe(false);
  });

  it("does not leave AppSidebar imports or public names in src", () => {
    const hits = walkSourceFiles(srcRoot).filter((file) => {
      const source = readFileSync(file, "utf8");
      return (
        source.includes("@/components/app-sidebar") ||
        source.includes("AppSidebar")
      );
    });

    expect(hits).toEqual([]);
  });
});
