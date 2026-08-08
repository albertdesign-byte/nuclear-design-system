import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

import { componentParameters, fullWidthParameters } from "../../../.storybook/story-meta";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  subcomponents: {
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter,
  },
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Surface container for grouped content. Compose with CardHeader, CardContent, and CardFooter.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
  args: {
    size: "default",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Patient summary</CardTitle>
        <CardDescription>ID #48291 · Stable</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
          Review intake details before scheduling the radiology visit.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View record
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>María González</CardTitle>
        <CardDescription>ID #48291 · 58 years</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-[var(--space-stack-sm)]">
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)]">
          <span className="text-[var(--color-text-muted)]">Status</span>
          <Badge variant="secondary">Stable</Badge>
        </div>
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)]">
          <span className="text-[var(--color-text-muted)]">Next appointment</span>
          <span>18 Jul 2026</span>
        </div>
      </CardContent>
      <CardFooter>
        <button
          type="button"
          className="text-[length:var(--text-body-small-size)] text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)]"
        >
          View record
        </button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Deposit summary</CardTitle>
        <CardDescription>Due now before confirmation</CardDescription>
        <CardAction>
          <Badge variant="outline">Pending</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
          $45.00 due today. Remaining balance is paid at the imaging center.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-[var(--space-stack-md)] md:grid-cols-2">
      <Card size="default">
        <CardHeader>
          <CardTitle>Default spacing</CardTitle>
          <CardDescription>Standard card padding rhythm.</CardDescription>
        </CardHeader>
        <CardContent>Uses `--space-card` spacing tokens.</CardContent>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Compact spacing</CardTitle>
          <CardDescription>Dense layouts and nested panels.</CardDescription>
        </CardHeader>
        <CardContent>Uses reduced card spacing tokens.</CardContent>
      </Card>
    </div>
  ),
};
