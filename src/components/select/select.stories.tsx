import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "Components/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  subcomponents: {
    Select,
    SelectContent,
    SelectItem,
    SelectValue,
  },
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Dropdown for choosing one option from a list. Compose `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, and `SelectItem`.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xs">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Select defaultValue="mri">
      <SelectTrigger>
        <SelectValue placeholder="Select scan type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mri">MRI</SelectItem>
        <SelectItem value="ct">CT Scan</SelectItem>
        <SelectItem value="pet">PET Scan</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="select-default">Modality</Label>
      <Select defaultValue="mri">
        <SelectTrigger id="select-default">
          <SelectValue placeholder="Select scan type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mri">MRI</SelectItem>
          <SelectItem value="ct">CT Scan</SelectItem>
          <SelectItem value="pet">PET Scan</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select key={size} defaultValue="active">
          <SelectTrigger size={size}>
            <SelectValue placeholder={`Size ${size}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select defaultValue="mri" disabled>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mri">MRI</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Select>
      <SelectTrigger aria-invalid>
        <SelectValue placeholder="Select insurance provider" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="aetna">Aetna</SelectItem>
        <SelectItem value="cigna">Cigna</SelectItem>
      </SelectContent>
    </Select>
  ),
};
