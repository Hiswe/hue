import type { StorybookConfig } from '@storybook/vue3-vite';
// import Unocss from 'unocss/vite';
// import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [`../src/**/*.mdx`, `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@chromatic-com/storybook`,
    `@storybook/addon-interactions`,
  ],
  framework: {
    name: `@storybook/vue3-vite`,
    options: {},
  },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   // const { mergeConfig } = await import(`vite`);

  //   return mergeConfig(config, {
  //     plugins: [
  //       Unocss({
  //         content: {
  //           pipeline: {
  //             // https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
  //             include: [
  //               /\.(vue|html)($|\?)/,
  //               // include storybook files
  //               /\.stories\.ts$/,
  //               `src/**/*.stories.ts`,
  //               `**/*.stories.ts`,
  //             ],
  //           },
  //           inline: [
  //             // plain text
  //             `<div class="flex flex-col gap-4 gap-8">Some text</div>`,
  //             `<div class="flex flex-col gap-8">Some text</div>`,
  //           ],
  //           filesystem: [`src/**/*.stories.ts`],
  //           // extractContent: {
  //           //   filesystem: [`**/*.stories.ts`],
  //           // },
  //         },
  //       }),
  //     ],
  //   });
  // },
};
export default config;
