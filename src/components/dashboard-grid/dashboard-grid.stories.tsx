import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DashboardPanel } from "@/components/dashboard-panel";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { DashboardGrid, DashboardGridItem } from "./dashboard-grid";

const meta = {
  title: "Components/Dashboard Grid",
  component: DashboardGrid,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Two-column dashboard layout. Items span half or full width at the large breakpoint.",
      },
    },
  },
  args: {
    children: <div />,
  },
} satisfies Meta<typeof DashboardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <DashboardGrid>
      <DashboardGridItem>
        <DashboardPanel title="Assigned">
          <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
            8 studies
          </p>
        </DashboardPanel>
      </DashboardGridItem>
      <DashboardGridItem>
        <DashboardPanel title="Unassigned">
          <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
            4 studies
          </p>
        </DashboardPanel>
      </DashboardGridItem>
    </DashboardGrid>
  ),
};

export const Default: Story = {
  render: () => (
    <DashboardGrid>
      <DashboardGridItem span="half">
        <DashboardPanel title="Left">
          <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
            Half width
          </p>
        </DashboardPanel>
      </DashboardGridItem>
      <DashboardGridItem span="half">
        <DashboardPanel title="Right">
          <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
            Half width
          </p>
        </DashboardPanel>
      </DashboardGridItem>
    </DashboardGrid>
  ),
};

export const FullSpan: Story = {
  render: () => (
    <DashboardGrid>
      <DashboardGridItem span="full">
        <DashboardPanel title="Worklist">
          <p className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
            Full-width panel
          </p>
        </DashboardPanel>
      </DashboardGridItem>
    </DashboardGrid>
  ),
};
