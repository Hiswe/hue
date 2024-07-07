import type { Preview } from '@storybook/vue3';
import '@unocss/reset/tailwind.css';
// https://storybook.js.org/recipes/tailwindcss
import '../src/app.css';

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
