import type { Meta, StoryObj } from '@storybook/vue3';

import HSwitch from './HSwitch.vue';

const meta = {
  title: 'Form/HSwitch',
  component: HSwitch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean', defaultValue: false },
    label: { control: 'text' },
  },
  args: {
    disabled: false,
    loading: false,
    label: '',
  },
} satisfies Meta<typeof HSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'a switch label',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
