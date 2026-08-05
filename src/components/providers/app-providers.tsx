"use client";

import { Toaster } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      {children}
      <Toaster richColors closeButton position="top-right" />
    </TooltipProvider>
  );
}
