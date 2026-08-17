import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { MedmoLogo, MedmoLogoLockup } from "./medmo-logo";

const meta = {
  title: "Components/Logo",
  component: MedmoLogoLockup,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Medmo mark and wordmark used in headers, footers, and empty states.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "inverse"],
    },
  },
  args: {
    size: "md",
    variant: "default",
  },
} satisfies Meta<typeof MedmoLogoLockup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { size: "md", variant: "default" },
};

export const MarkOnly: Story = {
  render: () => <MedmoLogo />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
      <MedmoLogoLockup size="md" />
      <MedmoLogoLockup size="lg" />
    </div>
  ),
};

export const Inverse: Story = {
  args: { variant: "inverse", size: "md" },
  decorators: [
    (Story) => (
      <div className="rounded-[var(--radius-md)] bg-[var(--color-action-primary)] p-[var(--space-card)]">
        <Story />
      </div>
    ),
  ],
};
