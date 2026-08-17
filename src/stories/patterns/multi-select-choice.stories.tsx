"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import { CheckboxGroupField } from "@/components/checkbox";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";

import { fullWidthParameters } from "../../../.storybook/story-meta";

const notificationOptions = [
  { value: "email", label: "Email reminders" },
  { value: "sms", label: "SMS reminders" },
  { value: "none", label: "No reminders" },
] as const;

function MultiSelectChoice({ invalid = false }: { invalid?: boolean }) {
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
              Notification preferences
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              Select all that apply.
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <CheckboxGroupField
            id={invalid ? "notification-preferences-invalid" : "notification-preferences"}
            legend="Notification preferences"
            invalid={invalid}
            error={
              invalid ? "Select at least one option to continue." : undefined
            }
            options={notificationOptions.map((option) => ({
              ...option,
              defaultChecked: !invalid && option.value === "email",
            }))}
          />
        </MultiStepFlowLayoutInputPanel>

        <Button size="xxl" fullWidth disabled={invalid}>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/Multi-select choice",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "The patient may select more than one option. Continue requires at least one selection. Compose Patients step (intro card, input panel, Continue) with CheckboxGroupField. Intro includes “Select all that apply.” Do not mix radios with checkboxes — that is Exclusive choice.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "Standard multi-select",
  render: () => <MultiSelectChoice />,
};

export const Validation: Story = {
  name: "Validation multi-select",
  render: () => <MultiSelectChoice invalid />,
};
