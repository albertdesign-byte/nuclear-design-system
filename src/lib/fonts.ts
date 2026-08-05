import { IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";

/**
 * IBM Plex — loaded via next/font and wired to Foundation CSS variables.
 *
 * Uses the same variable names as foundations/typography/typography.css
 * so --font-family-sans / --font-family-mono resolve to optimized stacks
 * without redefining tokens in globals.css.
 */
export const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-sans",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family-mono",
  display: "swap",
});
