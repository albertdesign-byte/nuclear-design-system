import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { DepositSummary } from "./deposit-summary";

const sampleItems = [
  {
    title: "MRI Brain without contrast",
    lines: [
      { label: "Facility fee", amount: "$850.00" },
      { label: "Radiologist read", amount: "$120.00", emphasis: true },
    ],
  },
  {
    title: "Booking deposit",
    lines: [{ label: "Refundable deposit", amount: "$50.00" }],
  },
];

const meta = {
  title: "Components/Deposit Summary",
  component: DepositSummary,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Pricing breakdown pattern for checkout and deposit screens. Composes `Separator` with line items and a total row.",
      },
    },
  },
  argTypes: {
    totalLabel: { control: "text" },
    totalAmount: { control: "text" },
  },
  args: {
    items: sampleItems,
    totalLabel: "Total due now",
    totalAmount: "$1,020.00",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DepositSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const SingleSection: Story = {
  args: {
    items: [
      {
        title: "Deposit",
        lines: [{ label: "Refundable booking deposit", amount: "$50.00" }],
      },
    ],
    totalLabel: "Due today",
    totalAmount: "$50.00",
  },
};

export const MultipleSections: Story = {
  args: {
    items: sampleItems,
    totalAmount: "$1,020.00",
  },
};
