import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/**/*.mdx", // app 以下の全ての .mdx ファイルを読み込む
    "../app/**/*.stories.@(js|jsx|ts|tsx)", // app 以下の全ての stories ファイルを読み込む
  ],
  addons: [
    // "@storybook/addon-onboarding", // この行をコメントアウトまたは削除
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-nextjs", // 追加
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {  nextConfigPath: require('path').resolve(__dirname, "../next.config.js"),},
  },
  staticDirs: ["..\\public"],
  // features オブジェクトごと削除
};
export default config;