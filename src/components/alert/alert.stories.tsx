import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InfoIcon } from "lucide-react";

import {
  AlertErrorPreview,
  AlertInfoPreview,
  AlertSuccessPreview,
  AlertWarningPreview,
  AlertWithActionPreview,
  AlertWithDescriptionPreview,
  AlertWithIconPreview,
  AlertWithTitlePreview,
  BasicAlertPreview,
  DismissibleAlertPreview,
  PersistentAlertPreview,
} from "@/components/docs/components/alert/alert-preview-blocks";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  subcomponents: {
    AlertIcon,
    AlertTitle,
    AlertDescription,
    AlertAction,
  },
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "The single Medmo inline-feedback standard for Patient, Admin, and future products. Official variants: info, success, warning, and error.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    dismissible: { control: "boolean" },
  },
  args: {
    variant: "info",
    dismissible: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon><InfoIcon /></AlertIcon>
      <AlertTitle>New imaging results available</AlertTitle>
      <AlertDescription>
        The radiology report is ready for review in the patient record.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => <AlertInfoPreview />,
};

export const Success: Story = {
  render: () => <AlertSuccessPreview />,
};

export const Warning: Story = {
  render: () => <AlertWarningPreview />,
};

export const Error: Story = {
  render: () => <AlertErrorPreview />,
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-md)]">
      <AlertSuccessPreview />
      <AlertWarningPreview />
      <AlertErrorPreview />
      <AlertInfoPreview />
    </div>
  ),
};

export const BasicAlert: Story = {
  render: () => <BasicAlertPreview />,
};

export const WithIcon: Story = {
  render: () => <AlertWithIconPreview />,
};

export const WithTitle: Story = {
  render: () => <AlertWithTitlePreview />,
};

export const WithDescription: Story = {
  render: () => <AlertWithDescriptionPreview />,
};

export const Dismissible: Story = {
  render: () => <DismissibleAlertPreview />,
};

export const WithActionButton: Story = {
  render: () => <AlertWithActionPreview />,
};

export const DefaultState: Story = {
  render: () => <AlertInfoPreview />,
};

export const DismissedState: Story = {
  render: () => <DismissibleAlertPreview />,
};

export const PersistentState: Story = {
  render: () => <PersistentAlertPreview />,
};
