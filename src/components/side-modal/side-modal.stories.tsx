"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Button } from "@/components/button";
import {
  CreateNewUserSideModalPreview,
  SideModalBasicPreview,
  SideModalControlledPreview,
  SideModalLongContentPreview,
} from "@/components/docs/components/side-modal/side-modal-preview-blocks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  SideModal,
  SideModalBody,
  SideModalClose,
  SideModalContent,
  SideModalDescription,
  SideModalFooter,
  SideModalHeader,
  SideModalTitle,
  SideModalTrigger,
} from "./side-modal";

const meta = {
  title: "Components/Side Modal",
  component: SideModal,
  tags: ["autodocs"],
  subcomponents: {
    SideModalTrigger,
    SideModalContent,
    SideModalHeader,
    SideModalTitle,
    SideModalDescription,
    SideModalBody,
    SideModalFooter,
  },
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Right-aligned modal panel for create and edit tasks. Header and footer stay in view while the body scrolls. Use Dialog for centered tasks and Alert Dialog for destructive confirmation. Expand is not implemented.",
      },
    },
  },
} satisfies Meta<typeof SideModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <SideModalBasicPreview />,
};

export const Default: Story = {
  render: () => <SideModalBasicPreview />,
};

export const ScrollingBody: Story = {
  render: () => <SideModalLongContentPreview />,
};

export const FooterWithLongContent: Story = {
  render: () => (
    <SideModal>
      <SideModalTrigger render={<Button variant="outline" size="sm" />}>
        Open long form
      </SideModalTrigger>
      <SideModalContent>
        <SideModalHeader>
          <SideModalTitle>Footer stays visible</SideModalTitle>
          <SideModalDescription>
            Scroll the body. Cancel and Save remain at the bottom of the panel.
          </SideModalDescription>
        </SideModalHeader>
        <SideModalBody>
          <div className="flex flex-col gap-[var(--space-stack-md)]">
            {Array.from({ length: 16 }, (_, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>Block {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                    Enough content to overflow the viewport so the footer can be
                    verified while scrolling.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SideModalBody>
        <SideModalFooter>
          <SideModalClose render={<Button variant="outline" />}>
            Cancel
          </SideModalClose>
          <SideModalClose render={<Button />}>Save</SideModalClose>
        </SideModalFooter>
      </SideModalContent>
    </SideModal>
  ),
};

export const Controlled: Story = {
  render: () => <SideModalControlledPreview />,
};

export const CreateNewUser: Story = {
  render: () => <CreateNewUserSideModalPreview />,
};

export const WithoutTrigger: Story = {
  render: function WithoutTriggerStory() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
        <Button onClick={() => setOpen(true)}>Open controlled</Button>
        <SideModal open={open} onOpenChange={setOpen}>
          <SideModalContent>
            <SideModalHeader>
              <SideModalTitle>No trigger</SideModalTitle>
              <SideModalDescription>
                Useful when a table row or page action owns open state.
              </SideModalDescription>
            </SideModalHeader>
            <SideModalBody>
              <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                Save and Cancel close the panel. Nothing is persisted.
              </p>
            </SideModalBody>
            <SideModalFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </SideModalFooter>
          </SideModalContent>
        </SideModal>
      </div>
    );
  },
};
