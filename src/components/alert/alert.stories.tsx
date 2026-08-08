import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CircleAlertIcon, InfoIcon } from "lucide-react";

import { Button } from "@/components/button";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  subcomponents: {
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
          "Inline feedback banner for status messages. Variants: default, destructive, and success.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success"],
    },
  },
  args: {
    variant: "default",
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
      <InfoIcon />
      <AlertTitle>Appointment confirmed</AlertTitle>
      <AlertDescription>
        Your MRI is scheduled for July 18 at 10:30 AM.
      </AlertDescription>
    </Alert>
  ),
};

export const Default: Story = {
  render: () => (
    <Alert>
      <InfoIcon />
      <AlertTitle>Before your visit</AlertTitle>
      <AlertDescription>
        Arrive 15 minutes early to complete check-in paperwork.
      </AlertDescription>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      <Alert variant="default">
        <InfoIcon />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>General informational message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          We could not process your card. Try another payment method.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <InfoIcon />
        <AlertTitle>Availability saved</AlertTitle>
        <AlertDescription>
          Your preferred days and times have been recorded.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Alert variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Insurance verification needed</AlertTitle>
      <AlertDescription>
        Upload a photo of your insurance card to continue booking.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          Upload card
        </Button>
      </AlertAction>
    </Alert>
  ),
};
