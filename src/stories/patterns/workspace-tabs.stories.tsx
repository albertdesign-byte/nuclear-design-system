"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { WorkspaceTabsPreview } from "./workspace-tabs-preview";

const meta = {
  title: "Patterns/Workspace tabs",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Switch operational views inside the same chrome without changing the sidebar destination. Compose Tabs (default segmented list) with Worklist table and Scan search. Do not wrap AppShell here — that is Operational app chrome.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyInfo: Story = {
  name: "My info",
  render: () => <WorkspaceTabsPreview defaultValue="my-info" />,
};

export const ScanSearch: Story = {
  render: () => <WorkspaceTabsPreview defaultValue="scan-search" />,
};

export const MyReports: Story = {
  render: () => <WorkspaceTabsPreview defaultValue="my-reports" />,
};
