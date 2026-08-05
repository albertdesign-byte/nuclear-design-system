/** Docs preview tabs — UI Design = full reference; Real screen = one product context. */
export type DocsPreviewMode = "ui-design" | "real-screen";

export type DocsTabItem = {
  label: string;
  value: string;
};

export const docsPreviewModeTabs: DocsTabItem[] = [
  { label: "UI Design", value: "ui-design" },
  { label: "Real screen", value: "real-screen" },
];
