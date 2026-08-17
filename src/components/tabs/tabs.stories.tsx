import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsFolderContentClassName,
  tabsSegmentedContentClassName,
} from "./";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Workspace tabs for switching related views. List variants: default, line, and folder.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    defaultValue: "summary",
    orientation: "horizontal",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

function TabsDemo({
  variant = "default",
  orientation = "horizontal",
}: {
  variant?: "default" | "line" | "folder";
  orientation?: "horizontal" | "vertical";
}) {
  const isFolder = variant === "folder";

  return (
    <Tabs
      defaultValue="summary"
      orientation={orientation}
      className={isFolder ? "gap-0" : undefined}
    >
      <TabsList variant={variant}>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
      </TabsList>
      <TabsContent
        value="summary"
        className={isFolder ? tabsFolderContentClassName : tabsSegmentedContentClassName}
      >
        Clinical summary.
      </TabsContent>
      <TabsContent
        value="labs"
        className={isFolder ? tabsFolderContentClassName : tabsSegmentedContentClassName}
      >
        Lab results.
      </TabsContent>
      <TabsContent
        value="notes"
        className={isFolder ? tabsFolderContentClassName : tabsSegmentedContentClassName}
      >
        Internal notes.
      </TabsContent>
    </Tabs>
  );
}

export const Playground: Story = {
  render: (args) => <TabsDemo orientation={args.orientation} />,
};

export const Default: Story = {
  render: () => <TabsDemo variant="default" />,
};

export const Line: Story = {
  render: () => <TabsDemo variant="line" />,
};

export const Folder: Story = {
  render: () => <TabsDemo variant="folder" />,
};

export const Vertical: Story = {
  render: () => <TabsDemo orientation="vertical" />,
};
