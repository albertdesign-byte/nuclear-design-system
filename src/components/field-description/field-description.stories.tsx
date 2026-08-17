import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/input";
import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { FieldDescription } from "./field-description";

const meta = {
  title: "Components/Field Description",
  component: FieldDescription,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Helper text under a form control. Pair with Label and Input; do not use as the only label.",
      },
    },
  },
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Use the name as it appears on the insurance card.",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="field-description-default">Legal name</Label>
      <Input id="field-description-default" placeholder="Elena Morales" />
      <FieldDescription {...args} />
    </div>
  ),
};

export const WithField: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="field-description-email">Email</Label>
      <Input id="field-description-email" type="email" placeholder="name@medmo.com" />
      <FieldDescription>
        Optional. Leave blank if not applicable.
      </FieldDescription>
    </div>
  ),
};
