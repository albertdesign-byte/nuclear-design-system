"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  InputFieldPattern,
  SelectFieldPattern,
} from "@/components/docs/shared/form-field-demos";
import { InputField } from "@/components/input";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";
import { formFieldGroupClassName } from "@/lib/form-field";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function FollowUpDetails({ required = false }: { required?: boolean }) {
  const idPrefix = required ? "required" : "basic";

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
              For example: extra notes, status, or requests.
            </p>
            {required ? null : (
              <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
                If you do not have more details, you can continue.
              </p>
            )}
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <InputFieldPattern id={`${idPrefix}-patient-name`} />
        </MultiStepFlowLayoutInputPanel>

        <MultiStepFlowLayoutInputPanel>
          <h2 className="text-[length:var(--text-body-size)] font-semibold leading-[var(--text-body-line-height)] text-[var(--color-text-primary)]">
            Additional details
          </h2>
          <div className={formFieldGroupClassName}>
            {required ? (
              <InputField
                id={`${idPrefix}-follow-up-name`}
                label="Patient name *"
                placeholder="Enter full legal name"
                required
                invalid
                error="Enter the patient's full legal name."
              />
            ) : (
              <InputFieldPattern
                id={`${idPrefix}-follow-up-name`}
                variant="helper"
              />
            )}
            <SelectFieldPattern id={`${idPrefix}-patient-status`} />
          </div>
        </MultiStepFlowLayoutInputPanel>

        <Button size="xxl" fullWidth disabled={required}>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/Follow-up details",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "After a required answer, collect extra context on the same Patients step. Compose the completed primary field with a second MultiStepFlowLayoutInputPanel (heading + InputField / SelectField). Not a modal, drawer, accordion, or separate page. Basic keeps Continue enabled; required shows field validation and disables Continue.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "Basic follow-up",
  render: () => <FollowUpDetails />,
};

export const Required: Story = {
  name: "Required follow-up",
  render: () => <FollowUpDetails required />,
};
