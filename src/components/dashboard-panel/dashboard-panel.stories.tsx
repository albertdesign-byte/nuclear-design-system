import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { DashboardPanel } from "./dashboard-panel";

const meta = {
  title: "Components/Dashboard Panel",
  component: DashboardPanel,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Operational dashboard module for metrics, queues, and summaries.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
  },
  args: {
    title: "My active scans",
  },
} satisfies Meta<typeof DashboardPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <DashboardPanel {...args}>
      <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        Panel content slot.
      </p>
    </DashboardPanel>
  ),
};

export const Default: Story = {
  render: () => (
    <DashboardPanel title="Queue">
      <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
        12 studies awaiting assignment.
      </p>
    </DashboardPanel>
  ),
};
