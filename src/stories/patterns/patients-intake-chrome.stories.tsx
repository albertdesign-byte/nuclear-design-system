"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMainDesktop,
  MultiStepFlowLayoutProgress,
  multiStepFlowLayoutDesktopContentClassName,
} from "@/components/multi-step-flow-layout";

import { fullWidthParameters } from "../../../.storybook/story-meta";

function PatientsIntakeChrome({
  progress,
  stepTitle,
  stepBody,
}: {
  progress: number;
  stepTitle: string;
  stepBody: string;
}) {
  return (
    <div className="flex min-h-[32rem] flex-col">
      <MultiStepFlowLayout className="flex-1">
        <div className="bg-[var(--color-surface)]">
          <MultiStepFlowLayoutHeader className="pb-[var(--space-stack-sm)]">
            <MedmoLogoLockup />
            <MultiStepFlowLayoutLocale showGlobe />
          </MultiStepFlowLayoutHeader>
          <MultiStepFlowLayoutProgress value={progress} />
        </div>

        <MultiStepFlowLayoutMainDesktop className="flex-1">
          <div className={multiStepFlowLayoutDesktopContentClassName}>
            <MultiStepFlowLayoutCard>
              <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
                {stepTitle}
              </h2>
              <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                {stepBody}
              </p>
            </MultiStepFlowLayoutCard>
          </div>
        </MultiStepFlowLayoutMainDesktop>
      </MultiStepFlowLayout>
      <AppFooter variant="patients" device="desktop" />
    </div>
  );
}

const meta = {
  title: "Patterns/Patients intake chrome",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Desktop intake frame: Medmo lockup, locale with globe, progress under the header, centered MultiStepFlowLayout main, and AppFooter variant=\"patients\". The card is a content slot — not a Patients step. Do not use AppShell here; that is Operational app chrome. Progress values are owned by each step; the chrome only displays them.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: "Standard intake",
  render: () => (
    <PatientsIntakeChrome
      progress={0.33}
      stepTitle="Step title"
      stepBody="Step content slot."
    />
  ),
};

export const MidFlow: Story = {
  name: "Mid-flow intake",
  render: () => (
    <PatientsIntakeChrome
      progress={0.66}
      stepTitle="Later step"
      stepBody="Later step content slot."
    />
  ),
};
