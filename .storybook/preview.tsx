import type { Preview } from "@storybook/nextjs-vite";

import { withMedmoTheme } from "./decorators";

import "../src/app/globals.css";

const preview: Preview = {
  decorators: [withMedmoTheme],
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
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
          ["Overview", "AppShell", "MultiStepFlowLayout", "*"],
          "Screens",
          ["Overview", "Operational", ["Dashboard", "Tasks", "*"], "*"],
          "Products",
          ["Overview", "Patients", "MPF Portal", "*"],
        ],
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
