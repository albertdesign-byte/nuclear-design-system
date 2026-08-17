import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CircleHelpIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  HealthcareTooltipExamplesPreview,
  TooltipContentPatternsPreview,
  TooltipPlacementPreview,
  TooltipTriggerTypesPreview,
} from "@/components/docs/components/tooltip/tooltip-preview-blocks";

import { componentParameters } from "../../../.storybook/story-meta";

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Supplementary information shown on mouse hover or keyboard focus. The collision-safe arrow remains visible and separated from its trigger on every side.",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon-xl" aria-label="Patient ID help" />
        }
      >
        <CircleHelpIcon />
      </TooltipTrigger>
      <TooltipContent>Internal patient identifier</TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => <TooltipPlacementPreview />,
};

function PositionStory({
  side,
}: {
  side: "top" | "bottom" | "left" | "right";
}) {
  return (
    <div className="grid min-h-48 place-items-center p-[var(--space-card)]">
      <Tooltip defaultOpen>
        <TooltipTrigger
          render={
            <Button variant="outline">
              {side[0].toUpperCase() + side.slice(1)}
            </Button>
          }
        />
        <TooltipContent side={side}>
          Arrow stays clear of the trigger
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export const Top: Story = {
  render: () => <PositionStory side="top" />,
};

export const Bottom: Story = {
  render: () => <PositionStory side="bottom" />,
};

export const Left: Story = {
  render: () => <PositionStory side="left" />,
};

export const Right: Story = {
  render: () => <PositionStory side="right" />,
};

export const TriggerTypes: Story = {
  render: () => <TooltipTriggerTypesPreview />,
};

export const ContentPatterns: Story = {
  render: () => <TooltipContentPatternsPreview />,
};

export const HealthcareExamples: Story = {
  render: () => <HealthcareTooltipExamplesPreview />,
};

export const KeyboardFocus: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
      <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        Tab to the icon button. Focus opens the same content as hover.
      </p>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xl"
              aria-label="Insurance information"
            />
          }
        >
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent>Coverage was verified today.</TooltipContent>
      </Tooltip>
    </div>
  ),
};
