"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ScanSearchSection } from "@/components/examples/scan-search-section";

import { fullWidthParameters } from "../../../.storybook/story-meta";

const meta = {
  title: "Patterns/Scan search",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Find scan requests on demand. Compose the SearchResults template via ScanSearchSection: toolbar, GlobalSearchBar, and a Worklist table only after search. Do not add a Command palette.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PreSearch: Story = {
  name: "Pre-search",
  render: () => <ScanSearchSection />,
};

export const AfterSearch: Story = {
  name: "After search",
  render: () => <ScanSearchSection initiallySearched />,
};
