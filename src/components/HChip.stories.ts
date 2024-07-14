import type { Meta, StoryObj } from '@storybook/vue3';

import HChip from './HChip.vue';

const meta = {
  title: 'Form/HChip',
  component: HChip,
  tags: ['autodocs'],
  argTypes: { },
  args: {
    label: 'chip label',
  },
} satisfies Meta<typeof HChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
