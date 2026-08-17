"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { buttonPrimaryStateClassName } from "@/stories/shared/interaction-state-classes";
import { Button } from "@/components/button";
import {
  CreatePatientDialogPreview,
  EditPatientDialogPreview,
  EditProfileDialogPreview,
  UploadStudyDialogPreview,
} from "@/components/docs/components/dialog/dialog-alert-preview-blocks";

import { InteractionStateGrid } from "../../../.storybook/interaction-state-grid";
import { componentParameters } from "../../../.storybook/story-meta";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  subcomponents: {
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  },
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Modal workspace for focused tasks, complex forms, and editable content. Use Alert Dialog for destructive confirmation.",
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <EditPatientDialogPreview />,
};

export const Default: Story = {
  render: () => <CreatePatientDialogPreview />,
};

export const EditPatient: Story = {
  render: () => <EditPatientDialogPreview />,
};

export const CreatePatient: Story = {
  render: () => <CreatePatientDialogPreview />,
};

export const EditProfile: Story = {
  render: () => <EditProfileDialogPreview />,
};

export const UploadStudy: Story = {
  render: () => <UploadStudyDialogPreview />,
};

export const HealthcareExamples: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <EditPatientDialogPreview />
      <CreatePatientDialogPreview />
      <UploadStudyDialogPreview />
    </div>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="secondary" />}>
          Open dialog
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Required action</DialogTitle>
            <DialogDescription>
              This dialog hides the corner close button. Use footer actions instead.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const DisabledActions: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete required fields</DialogTitle>
          <DialogDescription>
            Confirm is disabled until insurance information is provided.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button disabled>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid disabled={<Button disabled>Confirm</Button>}>
      {(state) => (
        <Button className={cn(buttonPrimaryStateClassName[state])}>Confirm</Button>
      )}
    </InteractionStateGrid>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dialog footer actions use the same Button disabled pattern.",
      },
    },
  },
};
