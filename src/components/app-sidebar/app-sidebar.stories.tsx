import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  LayoutDashboardIcon,
  MessageSquareIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { AppSidebar } from "./app-sidebar";

const items = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
];

const meta = {
  title: "Components/App Sidebar",
  component: AppSidebar,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Collapsible application navigation rail. Expanded shows labels; collapsed shows icon tooltips.",
      },
    },
  },
  argTypes: {
    defaultExpanded: { control: "boolean" },
    logoHref: { control: "text" },
  },
  args: {
    items,
    defaultExpanded: true,
    logoHref: "/",
  },
  decorators: [
    (Story) => (
      <div className="flex h-[28rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { defaultExpanded: true },
};

export const Collapsed: Story = {
  args: { defaultExpanded: false },
};
