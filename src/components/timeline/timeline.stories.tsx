import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TimelineRealScreenPreview } from "@/components/docs/components/timeline/timeline-real-screen-preview";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { Timeline } from "./timeline";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Three-column activity feed for system events, notes, and communications.",
      },
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <TimelineRealScreenPreview />,
};

export const Default: Story = {
  render: () => <TimelineRealScreenPreview />,
};
