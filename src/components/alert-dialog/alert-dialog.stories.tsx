import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  ArchiveRecordAlertDialogPreview,
  DeletePatientAlertDialogPreview,
  DeleteStudyAlertDialogPreview,
  RemoveUserAccessAlertDialogPreview,
} from "@/components/docs/components/dialog/dialog-alert-preview-blocks";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

const meta = {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  tags: ["autodocs"],
  subcomponents: {
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
  },
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Blocking confirmation for destructive or consequential decisions. Use Dialog for forms and editable tasks.",
      },
    },
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <DeletePatientAlertDialogPreview />,
};

export const DeletePatient: Story = {
  render: () => <DeletePatientAlertDialogPreview />,
};

export const DeleteStudy: Story = {
  render: () => <DeleteStudyAlertDialogPreview />,
};

export const RemoveUserAccess: Story = {
  render: () => <RemoveUserAccessAlertDialogPreview />,
};

export const ArchiveRecord: Story = {
  render: () => <ArchiveRecordAlertDialogPreview />,
};

export const HealthcareExamples: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <DeletePatientAlertDialogPreview />
      <DeleteStudyAlertDialogPreview />
      <RemoveUserAccessAlertDialogPreview />
      <ArchiveRecordAlertDialogPreview />
    </div>
  ),
};
