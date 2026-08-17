import type { Decorator } from "@storybook/nextjs-vite";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/tooltip";
import { ibmPlexSansCondensed, poppins } from "@/lib/fonts";

export const withMedmoTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as "light" | "dark" | undefined) ?? "light";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme={theme}
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider>
        <div
          className={`${poppins.variable} ${ibmPlexSansCondensed.variable} min-w-0 bg-[var(--color-background)] font-sans text-[var(--color-text-primary)] antialiased ${theme === "dark" ? "dark" : ""}`}
        >
          <Story />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};
