import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/input";
import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { FieldError } from "./field-error";

const meta = {
  title: "Components/FieldError",
  component: FieldError,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Inline validation message with `role=\"alert\"`. Compose below inputs with matching `aria-describedby`.",
      },
    },
  },
  argTypes: {
    showIcon: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "This field is required.",
    showIcon: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FieldError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    showIcon: true,
    children: "Enter a valid email address.",
  },
};

export const InFormField: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="field-error-email" invalid>
        Email address
      </Label>
      <Input
        id="field-error-email"
        aria-invalid
        aria-describedby="field-error-email-message"
        defaultValue="not-an-email"
      />
      <FieldError id="field-error-email-message" showIcon>
        Enter a valid email address.
      </FieldError>
    </div>
  ),
};
