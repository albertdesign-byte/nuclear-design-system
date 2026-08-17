import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  FooterLinkStatesPreview,
  FooterResponsivePreview,
} from "@/components/docs/components/app-footer/app-footer-preview-blocks";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { AppFooter } from "./app-footer";

const meta = {
  title: "Components/App Footer",
  component: AppFooter,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Responsive Medmo application footer with a clickable brand lockup, grouped navigation, unified interaction states, and accessible external links.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "patients"],
    },
    device: {
      control: "select",
      options: ["mobile", "tablet", "desktop"],
    },
  },
  args: {
    variant: "patients",
    device: "desktop",
  },
} satisfies Meta<typeof AppFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const PatientsDesktop: Story = {
  args: { variant: "patients", device: "desktop" },
};

export const PatientsTablet: Story = {
  args: { variant: "patients", device: "tablet" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};

export const PatientsMobile: Story = {
  args: { variant: "patients", device: "mobile" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const DefaultLegal: Story = {
  args: { variant: "default", device: "desktop" },
};

export const InteractionStates: Story = {
  render: () => <FooterLinkStatesPreview />,
  parameters: { layout: "padded" },
};

export const ResponsiveBehavior: Story = {
  render: () => <FooterResponsivePreview />,
  parameters: { layout: "padded" },
};
