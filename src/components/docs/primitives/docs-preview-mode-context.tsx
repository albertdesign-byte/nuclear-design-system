"use client";

import { createContext, useContext } from "react";

import type { DocsPreviewMode } from "./docs-preview-mode";

const DocsPreviewModeContext = createContext<DocsPreviewMode>("ui-design");

export function DocsPreviewModeProvider({
  mode,
  children,
}: {
  mode: DocsPreviewMode;
  children: React.ReactNode;
}) {
  return (
    <DocsPreviewModeContext.Provider value={mode}>
      {children}
    </DocsPreviewModeContext.Provider>
  );
}

export function useDocsPreviewMode() {
  return useContext(DocsPreviewModeContext);
}
