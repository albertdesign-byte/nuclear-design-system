"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";
import { RadioGroupField } from "@/components/radio-group";

import { fullWidthParameters } from "../../../.storybook/story-meta";

const visitTypeOptions = [
  { value: "in-person", label: "In-person" },
  { value: "telemedicine", label: "Telemedicine" },
  { value: "home", label: "Home visit" },
] as const;

function ExclusiveChoice({ invalid = false }: { invalid?: boolean }) {
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
              How should the patient be seen?
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              Choose how the patient prefers to be seen for this appointment.
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <RadioGroupField
            id={invalid ? "visit-type-invalid" : "visit-type"}
            legend="Visit type"
            defaultValue={invalid ? undefined : "telemedicine"}
            invalid={invalid}
            error={invalid ? "Select a visit type to continue." : undefined}
            options={[...visitTypeOptions]}
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
  title: "Patterns/Exclusive choice",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "The patient picks exactly one answer before continuing. Compose Patients step (intro card, input panel, Continue) with RadioGroupField. Continue is disabled until a value is set. Do not mix radios with checkboxes — that is Multi-select choice.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "Standard choice",
  render: () => <ExclusiveChoice />,
};

export const Validation: Story = {
  name: "Validation choice",
  render: () => <ExclusiveChoice invalid />,
};
