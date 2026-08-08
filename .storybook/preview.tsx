import type { Preview } from "@storybook/nextjs-vite";

import { withMedmoTheme } from "./decorators";

import "../src/app/globals.css";

const preview: Preview = {
  decorators: [withMedmoTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: [
          "Foundations",
          ["Overview", "*"],
          "Components",
          ["*"],
          "Patterns",
          ["Overview", "*"],
          "Templates",
          ["Overview", "*"],
        ],
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
