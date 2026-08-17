import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { Skeleton } from "./skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component: "Placeholder surface shown while content is loading.",
      },
    },
  },
  argTypes: {
    className: { control: "text" },
  },
  args: {
    className: "h-4 w-48",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { className: "h-4 w-48" },
};

export const PatientCard: Story = {
  render: () => (
    <div className="flex w-64 items-start gap-[var(--space-inline-sm)]">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-[var(--space-stack-xs)]">
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-2/5" />
      </div>
    </div>
  ),
};

export const FormFields: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-[var(--space-stack-sm)]">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-3 w-32" />
      <Skeleton className="h-10 w-full" />
    </div>
  ),
};
