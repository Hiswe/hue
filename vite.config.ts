import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';
import VueRouter from 'unplugin-vue-router/vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import tailwindcss from 'tailwindcss';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({}),
    // https://www.npmjs.com/package/@vitejs/plugin-vue
    vue(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // https://github.com/unplugin/unplugin-icons?tab=readme-ov-file#auto-importing
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: [
            `iconoir`,
            `h-icon`,
          ],
        }),
      ],
    }),
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        `vue`,
        `@vueuse/core`,
        VueRouterAutoImports,
      ],
    }),
    tailwindcss(),
    // https://github.com/unplugin/unplugin-icons?tab=readme-ov-file
    Icons({
      customCollections: {
        'h-icon': FileSystemIconLoader(
          `./src/assets/icons`,
          svg => svg.replace(/^<svg /, `<svg fill="currentColor" `),
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL(`./src`, import.meta.url)),
    },
  },
  // deps.optimizer.web.include
  // https://github.com/vitest-dev/vitest
  test: {
    include: [`**\/*.spec.ts`],
    environment: `happy-dom`,
    deps: { optimizer: { web: { include: [`@vue`] } } },
    setupFiles: [`./setup-test.ts`],
  },
});
