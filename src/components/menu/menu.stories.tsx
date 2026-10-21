import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { isMenuNavGroup } from "./menu.groups";
import { Menu } from "./menu";
import type { MenuNavItem } from "./menu.types";

const items: MenuNavItem[] = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
];

const expandableItems: MenuNavItem[] = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboardIcon },
  {
    label: "Patients",
    icon: UsersIcon,
    children: [
      { label: "All patients", href: "#all-patients" },
      { label: "New referral", href: "#new-referral" },
    ],
  },
  {
    label: "Orders",
    icon: BriefcaseMedicalIcon,
    children: [
      { label: "My orders", href: "#orders" },
      { label: "Active", href: "#orders-active" },
      { label: "Eliminated", href: "#orders-eliminated" },
    ],
  },
  { label: "Messages", href: "#messages", icon: MessageSquareIcon },
];

const expandableActiveItems: MenuNavItem[] = expandableItems.map((item) =>
  isMenuNavGroup(item) && item.label === "Patients"
    ? {
        ...item,
        children: [
          { label: "All patients", href: "#all-patients", active: true },
          { label: "New referral", href: "#new-referral" },
        ],
      }
    : item
);

const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Collapsible application navigation rail. Default is a flat list of links. Expandable parents toggle a nested level; only children navigate. Collapsed shows icon tooltips and hides nested items. Collapse stays pinned at the bottom. Distinct from Dropdown Menu, which is an overlay action menu.",
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
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { defaultExpanded: true },
  parameters: {
    docs: {
      description: {
        story:
          "Default configuration: leaf items with href and no children. Clicking a leaf navigates.",
      },
    },
  },
};

export const Expandable: Story = {
  args: {
    items: expandableItems,
    defaultExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Expandable configuration: clicking Orders expands or collapses. My orders, Active, and Eliminated are the navigation links. Nested items have no icons.",
      },
    },
  },
};

export const ExpandableMultipleOpen: Story = {
  args: {
    items: expandableItems,
    defaultExpanded: true,
    defaultOpenGroups: ["Patients", "Orders"],
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple parent groups can stay expanded at the same time.",
      },
    },
  },
};

export const ExpandableActiveNested: Story = {
  args: {
    items: expandableActiveItems,
    defaultExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "An active nested item uses aria-current and opens its parent group on initialize. The parent can still be collapsed afterward.",
      },
    },
  },
};

export const Collapsed: Story = {
  args: { defaultExpanded: false },
  parameters: {
    docs: {
      description: {
        story: "Existing collapsed rail: icons and tooltips, labels hidden.",
      },
    },
  },
};

export const ExpandableCollapsed: Story = {
  args: {
    items: expandableItems,
    defaultExpanded: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Collapsed Expandable rail hides nested items and does not open a flyout. Parent clicks do not expand the rail.",
      },
    },
  },
};
