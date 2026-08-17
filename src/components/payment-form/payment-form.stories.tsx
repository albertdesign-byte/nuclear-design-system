"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { PaymentForm } from "./payment-form";

const meta = {
  title: "Components/Payment Form",
  component: PaymentForm,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Card payment entry pattern composing `Label`, `Input`, and `StripeBadge`. Used on deposit and checkout screens.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    showStripeBadge: { control: "boolean" },
  },
  args: {
    size: "md",
    disabled: false,
    showStripeBadge: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PaymentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledPaymentForm(props: React.ComponentProps<typeof PaymentForm>) {
  const [nameOnCard, setNameOnCard] = useState("Elena Morales");
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [expiry, setExpiry] = useState("08/2028");
  const [cvv, setCvv] = useState("123");

  return (
    <PaymentForm
      {...props}
      nameOnCard={nameOnCard}
      cardNumber={cardNumber}
      expiry={expiry}
      cvv={cvv}
      onNameOnCardChange={setNameOnCard}
      onCardNumberChange={setCardNumber}
      onExpiryChange={setExpiry}
      onCvvChange={setCvv}
    />
  );
}

export const Playground: Story = {
  render: (args) => <ControlledPaymentForm {...args} />,
};

export const Default: Story = {
  render: () => <ControlledPaymentForm />,
};

export const Empty: Story = {
  render: () => (
    <PaymentForm
      nameOnCard=""
      cardNumber=""
      expiry=""
      cvv=""
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <ControlledPaymentForm disabled />
  ),
};

export const WithoutStripeBadge: Story = {
  render: () => (
    <ControlledPaymentForm showStripeBadge={false} />
  ),
};
