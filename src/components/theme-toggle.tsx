"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

/**
 * Dev shell control — verifies next-themes ↔ Foundation `.dark` without hacks.
 * Not part of the public component library.
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        Theme
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const label =
    theme === "system" ? `System (${resolvedTheme ?? "…"})` : theme;

  return (
    <Button variant="outline" size="sm" onClick={cycleTheme}>
      Theme: {label}
    </Button>
  );
}
