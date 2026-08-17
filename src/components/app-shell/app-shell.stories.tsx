import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AppShellRealScreenPreview } from "@/components/docs/components/app-shell/app-shell-real-screen-preview";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { AppShell } from "./app-shell";

const meta = {
  title: "Templates/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Operational application layout: sidebar, header, and main slots. Product-agnostic. App Header, App Sidebar, and header actions remain Components; this template only frames them.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[28rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <AppShellRealScreenPreview />,
};

export const Default: Story = {
  render: () => <AppShellRealScreenPreview />,
};
