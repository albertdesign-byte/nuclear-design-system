"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import { AlertInfoPreview } from "@/components/docs/components/alert/alert-preview-blocks";
import { InputFieldPattern } from "@/components/docs/shared/form-field-demos";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function InStepNotice({ blocking = false }: { blocking?: boolean }) {
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
          <AlertInfoPreview />
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <InputFieldPattern
            id={blocking ? "patient-name-blocked" : "patient-name"}
            variant={blocking ? "required" : "default"}
          />
        </MultiStepFlowLayoutInputPanel>

        <Button size="xxl" fullWidth disabled={blocking}>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/In-step notice",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "A care-team or policy note inside the step intro, before the patient answers. Compose Patients step with Alert variant=\"info\" (icon, title, description). Not a toast, not a blocking dialog, and not a new Alert variant. Continue stays disabled until the step requirement is met; the notice itself does not become an error.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  name: "Informational notice",
  render: () => <InStepNotice />,
};

export const Blocking: Story = {
  name: "Blocking notice",
  render: () => <InStepNotice blocking />,
};
