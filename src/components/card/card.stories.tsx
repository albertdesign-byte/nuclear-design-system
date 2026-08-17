import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InboxIcon, ScanLineIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  CardContentFlexibilityPreview,
  CardResponsivePreview,
  CardVariantsPreview,
  HealthcareCardExamplesPreview,
} from "@/components/docs/components/card/card-preview-blocks";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
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
    CardMedia,
    CardContent,
    CardFooter,
  },
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Responsive, content-driven surface with wrapping headers, media, actions, and footers. Card never truncates content by default.",
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
        <CardTitle>
          <h3>Patient summary</h3>
        </CardTitle>
        <CardDescription>MRN 48291 · Cardiology</CardDescription>
      </CardHeader>
      <CardContent>
        Review intake details before scheduling the radiology visit.
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View record
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => <CardVariantsPreview />,
  parameters: { layout: "padded" },
};

export const ContentFlexibility: Story = {
  render: () => <CardContentFlexibilityPreview />,
  parameters: { layout: "padded" },
};

export const ResponsiveBehavior: Story = {
  render: () => <CardResponsivePreview />,
  parameters: { layout: "padded" },
};

export const HealthcareExamples: Story = {
  render: () => <HealthcareCardExamplesPreview />,
  parameters: { layout: "padded" },
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardMedia
        role="img"
        aria-label="Abstract imaging study preview"
        className="flex aspect-video items-center justify-center bg-[var(--color-surface-muted)]"
      >
        <ScanLineIcon className="size-12 text-[var(--color-text-muted)]" aria-hidden />
      </CardMedia>
      <CardHeader>
        <CardTitle>
          <h3>Chest CT with contrast</h3>
        </CardTitle>
        <CardDescription>246 images · Acquired today</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <h3>No reports</h3>
        </CardTitle>
        <CardDescription>No reports have been added.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-[var(--space-stack-sm)]">
        <InboxIcon className="size-5 text-[var(--color-text-muted)]" aria-hidden />
        <p className="text-[var(--color-text-muted)]">
          Create the first report when findings are ready.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Create report
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const NarrowMobile: Story = {
  render: () => (
    <div className="w-[17.5rem] max-w-full">
      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Long patient coordination summary title</h3>
          </CardTitle>
          <CardDescription>
            The full description remains visible at a narrow width.
          </CardDescription>
          <CardAction>
            <Button variant="ghost" size="sm">
              Edit details
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          Dynamic content grows without a fixed height or hidden overflow.
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button variant="outline" size="sm">
            Save draft
          </Button>
          <Button size="sm">Finalize</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl items-start gap-[var(--space-card-gap)] md:grid-cols-2">
      {(["default", "sm"] as const).map((size) => (
        <Card key={size} size={size}>
          <CardHeader>
            <CardTitle>
              <h3>{size === "default" ? "Default spacing" : "Compact spacing"}</h3>
            </CardTitle>
            <CardDescription>
              {size === "default"
                ? "Standard workflows and content."
                : "Dense dashboard summaries."}
            </CardDescription>
          </CardHeader>
          <CardContent>Content remains fully flexible at either size.</CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: { layout: "padded" },
};
