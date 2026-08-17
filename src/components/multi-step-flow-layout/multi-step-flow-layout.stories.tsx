import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MedmoLogoLockup } from "@/components/brand";
import { Button } from "@/components/button";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutProgress,
} from "./multi-step-flow-layout";

const meta = {
  title: "Templates/MultiStepFlowLayout",
  component: MultiStepFlowLayout,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Generic multi-step workflow layout: header, progress, and content regions. Nuclear owns structure and responsive behavior. Products own copy, validation, routing, and domain fields. Reusable for Patient Intake, Provider Onboarding, Clinic Registration, Radiology Workflow, Insurance Enrollment, and any guided multi-step process.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof MultiStepFlowLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <MultiStepFlowLayout className="min-h-[24rem] rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
      <MultiStepFlowLayoutHeader>
        <MedmoLogoLockup />
        <MultiStepFlowLayoutLocale showGlobe />
      </MultiStepFlowLayoutHeader>
      <MultiStepFlowLayoutProgress value={0.33} />
      <MultiStepFlowLayoutMain>
        <MultiStepFlowLayoutCard>
          <h2 className="text-[length:var(--text-title-size)] font-semibold">
            Step title
          </h2>
          <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
            Step content slot.
          </p>
          <Button size="sm">Continue</Button>
        </MultiStepFlowLayoutCard>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  ),
};

export const Default: Story = {
  render: () => (
    <MultiStepFlowLayout className="min-h-[20rem] rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
      <MultiStepFlowLayoutHeader>
        <MedmoLogoLockup />
        <MultiStepFlowLayoutLocale />
      </MultiStepFlowLayoutHeader>
      <MultiStepFlowLayoutProgress value={0.5} />
      <MultiStepFlowLayoutMain>
        <MultiStepFlowLayoutCard>Step body</MultiStepFlowLayoutCard>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  ),
};

export const Progress: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <MultiStepFlowLayoutProgress value={0} />
      <MultiStepFlowLayoutProgress value={0.33} />
      <MultiStepFlowLayoutProgress value={1} />
    </div>
  ),
};
