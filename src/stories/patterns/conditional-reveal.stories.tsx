"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  CheckboxFieldPattern,
  InputFieldPattern,
  SelectFieldPattern,
} from "@/components/docs/shared/form-field-demos";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";
import { formFieldGroupClassName } from "@/lib/form-field";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function ConditionalReveal({ revealed = false }: { revealed?: boolean }) {
  const idPrefix = revealed ? "revealed" : "hidden";

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
              Extra fields appear only after a choice. The first step stays simple.
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <div className={formFieldGroupClassName}>
            <InputFieldPattern id={`${idPrefix}-patient-name`} />
            <CheckboxFieldPattern
              id={`${idPrefix}-reveal-trigger`}
              variant={revealed ? "checked" : "default"}
            />
          </div>
        </MultiStepFlowLayoutInputPanel>

        {revealed ? (
          <MultiStepFlowLayoutInputPanel>
            <h2 className="text-[length:var(--text-body-size)] font-semibold leading-[var(--text-body-line-height)] text-[var(--color-text-primary)]">
              Additional details
            </h2>
            <div className={formFieldGroupClassName}>
              <InputFieldPattern id={`${idPrefix}-additional-name`} variant="helper" />
              <SelectFieldPattern id={`${idPrefix}-patient-status`} />
            </div>
          </MultiStepFlowLayoutInputPanel>
        ) : null}

        <Button size="xxl" fullWidth>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/Conditional reveal",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Extra fields appear only after a choice. In-page: checkbox in the first panel, then a second MultiStepFlowLayoutInputPanel with its own heading and the same Form field stack. Not a new disclosure, accordion, dialog, or drawer. Flow branch (routing to another step) is not this story.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Hidden: Story = {
  name: "Hidden state",
  render: () => <ConditionalReveal />,
};

export const Revealed: Story = {
  name: "Revealed state",
  render: () => <ConditionalReveal revealed />,
};
