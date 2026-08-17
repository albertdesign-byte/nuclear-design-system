"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import { InputField } from "@/components/input";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";
import { cn } from "@/lib/utils";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function OptionalSkip({ filled = false }: { filled?: boolean }) {
  return (
    <MultiStepFlowLayout className="min-h-[24rem]">
      <MultiStepFlowLayoutMain className="gap-[var(--space-stack-md)]">
        <MultiStepFlowLayoutCard>
          <Button type="button" variant="ghost" size="sm">
            <ChevronLeftIcon aria-hidden />
            Back
          </Button>
          <div className="flex flex-col gap-[var(--space-stack-xs)]">
            <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
              What is the patient&apos;s name?
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              If you do not have more details,{" "}
              <button
                type="button"
                className={cn(
                  "font-medium text-[var(--color-text-link)] underline-offset-[3px]",
                  "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
                  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
                )}
              >
                you can continue
              </button>
              .
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <InputField
            id={filled ? "patient-name-optional-filled" : "patient-name-optional"}
            label="Patient name (optional)"
            placeholder="Enter full legal name"
            defaultValue={filled ? "Elena Morales" : undefined}
          />
        </MultiStepFlowLayoutInputPanel>

        <Button size="xxl" fullWidth>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/Optional skip",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "The patient may leave the step empty and still continue. Copy says so; there is no second Skip button. The inline “you can continue” control is a native button styled as a text link that runs the same action as Continue. Do not disable Continue to mean optional.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Optional: Story = {
  name: "Optional step",
  render: () => <OptionalSkip />,
};

export const Completed: Story = {
  name: "Completed optional step",
  render: () => <OptionalSkip filled />,
};
