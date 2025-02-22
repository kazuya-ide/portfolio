import type { Preview } from "@storybook/react";
import "../app/globals.css"; // globals.css をインポート
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
