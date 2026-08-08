import type { Decorator } from "@storybook/nextjs-vite";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ibmPlexMono, ibmPlexSansCondensed } from "@/lib/fonts";

export const withMedmoTheme: Decorator = (Story) => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <div
      className={`${ibmPlexSansCondensed.variable} ${ibmPlexMono.variable} min-w-0 font-sans text-foreground antialiased`}
    >
      <Story />
    </div>
  </ThemeProvider>
);
