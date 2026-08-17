"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import { InputFieldPattern } from "@/components/docs/shared/form-field-demos";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function PatientsStep({ invalid = false }: { invalid?: boolean }) {
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
              Use the name shown on the insurance card.
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <InputFieldPattern
            id={invalid ? "patient-name-invalid" : "patient-name"}
            variant={invalid ? "error" : "default"}
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
  title: "Patterns/Patients step",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "One question per screen: Back, title and helper, answer, full-width Continue. Compose MultiStepFlowLayout (split: intro card, input panel, Continue outside) with Form field. Continue is disabled until the step is valid. Do not wrap intake chrome here — that is Patients intake chrome.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "Standard step",
  render: () => <PatientsStep />,
};

export const Validation: Story = {
  name: "Validation step",
  render: () => <PatientsStep invalid />,
};
