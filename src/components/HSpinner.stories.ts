import type { Meta, StoryObj } from '@storybook/vue3';

import HSpinner from './HSpinner.vue';

const meta = {
  title: 'Feedback/HSpinner',
  component: HSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['x-small', 'small', 'default'] },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof HSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const AllSizes: Story = {
  args: {},
  render: (args: any) => ({
    components: { HSpinner },
    setup() {
      return { args };
    },
    template: `
    <div class="flex gap-8">
      <HSpinner />
      <HSpinner size="small" />
      <HSpinner size="x-small" />
    </div>
    `,
  }),
};
