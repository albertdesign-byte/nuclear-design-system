import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/button";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Non-modal floating panel for pickers, filters, and lightweight editing.",
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Coverage</PopoverTitle>
          <PopoverDescription>
            Verified today. No outstanding authorizations.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const Default: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        Filters
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Filters</PopoverTitle>
          <PopoverDescription>Refine the worklist.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            {side}
          </PopoverTrigger>
          <PopoverContent side={side}>
            <PopoverHeader>
              <PopoverTitle>{side}</PopoverTitle>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};
