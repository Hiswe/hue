import type { Meta, StoryObj } from '@storybook/vue3';

import HChipGroup from './HChipGroup.vue';
import HChip from './HChip.vue';

const meta = {
  title: 'Form/HChipGroup',
  component: HChipGroup,
  tags: ['autodocs'],
  argTypes: { },
  args: {
    label: 'chip group label',
    modelValue: [],
  },
} satisfies Meta<typeof HChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: (args: any) => ({
    components: { HChipGroup, HChip },
    setup() {
      return { args };
    },
    template: `
    <HChipGroup v-bind="args">
      <HChip value="Lucifer Morningstar" label="Lucifer Morningstar" />
      <HChip value="Samael" label="Samael" />
      <HChip value="Lightbringer" label="Lightbringer" />
    </HChipGroup>
    `,
  }),
};
