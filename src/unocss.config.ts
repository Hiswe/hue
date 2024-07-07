import {
  defineConfig,
  presetWind,
  transformerDirectives,
} from 'unocss';

// relative import is mandatory since it used in vite-config where alias are defined
// import { rules, theme } from './unocss.config-tailwind';

export default defineConfig({
  // rules,
  // theme,
  presets: [
    presetWind(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    pipeline: {
      // https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
      include: [
        /\.(vue|html)($|\?)/,
        // include storybook files
        /\.stories\.ts$/,
        `src/**/*.stories.ts`,
      ],
    },
    inline: [
      // plain text
      `<div class="flex flex-col gap-4 gap-8">Some text</div>`,
      `<div class="flex flex-col gap-8">Some text</div>`,
    ],
    filesystem: [`src/**/*.stories.ts`],
    // extractContent: {
    //   filesystem: [`**/*.stories.ts`],
    // },
  },
});
