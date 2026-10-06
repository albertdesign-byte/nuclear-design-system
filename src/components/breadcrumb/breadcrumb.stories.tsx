"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { Breadcrumb } from "./breadcrumb";

const defaultItems = [
  { label: "Home", href: "/" },
  { label: "Patients", href: "/patients" },
  { label: "Elena Morales" },
];

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Hierarchical location trail. Ancestor items are links; the current page is text with aria-current.",
      },
    },
  },
  args: {
    items: defaultItems,
    showHomeIcon: false,
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const WithHomeIcon: Story = {
  name: "With Home icon",
  args: {
    showHomeIcon: true,
  },
};

export const MultipleLevels: Story = {
  name: "Multiple levels",
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Components", href: "/components" },
      { label: "Button" },
    ],
  },
};

export const LongTrail: Story = {
  name: "Long trail",
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Patients", href: "/patients" },
      { label: "Records", href: "/patients/records" },
      { label: "Imaging", href: "/patients/records/imaging" },
      { label: "Mammogram", href: "/patients/records/imaging/mammogram" },
      { label: "Results report SRID-1001" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Patients", href: "/patients", disabled: true },
      { label: "Elena Morales" },
    ],
  },
};
