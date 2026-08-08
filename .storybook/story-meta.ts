import type { Parameters } from "@storybook/nextjs-vite";

export const componentParameters = {
  layout: "centered",
  docs: {
    toc: true,
  },
} satisfies Parameters;

export const fullWidthParameters = {
  layout: "padded",
  docs: {
    toc: true,
  },
} satisfies Parameters;

