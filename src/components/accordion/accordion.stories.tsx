import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component: "Vertically stacked sections that expand and collapse.",
      },
    },
  },
  argTypes: {
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    multiple: false,
    disabled: false,
    defaultValue: ["item-1"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

function AccordionDemo(
  props: Pick<ComponentProps<typeof Accordion>, "multiple" | "disabled" | "defaultValue">
) {
  return (
    <Accordion {...props}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>What imaging requires prior auth?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          MRI, PET/CT, and advanced nuclear studies typically require
          authorization before scheduling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>When are results available?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Most reports post within 24 hours of the read. STAT studies are
          flagged in the worklist.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export const Playground: Story = {
  render: (args) => <AccordionDemo {...args} />,
};

export const Default: Story = {
  render: () => <AccordionDemo defaultValue={["item-1"]} />,
};

export const Multiple: Story = {
  render: () => <AccordionDemo multiple defaultValue={["item-1", "item-2"]} />,
};

export const Disabled: Story = {
  render: () => <AccordionDemo disabled defaultValue={["item-1"]} />,
};
