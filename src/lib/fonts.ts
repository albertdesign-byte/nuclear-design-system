import { IBM_Plex_Sans_Condensed, Poppins } from "next/font/google";

/**
 * Font loading:
 * - Poppins → official Medmo typeface for components (--font-family-component)
 * - IBM Plex Sans Condensed → library documentation chrome only (--font-family-sans)
 */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-component",
  display: "swap",
});

export const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-sans",
  display: "swap",
});
