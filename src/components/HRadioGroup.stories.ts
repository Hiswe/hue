import type { Meta, StoryObj } from '@storybook/vue3';

import HRadioGroup from './HRadioGroup.vue';
import HRadio from './HRadio.vue';

const meta = {
  title: 'Form/HRadioGroup',
  component: HRadioGroup,
  tags: ['autodocs'],
  argTypes: { },
  args: {
    label: 'radio group label',
    modelValue: 'Lucifer Morningstar',
  },
} satisfies Meta<typeof HRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: (args: any) => ({
    components: { HRadioGroup, HRadio },
    setup() {
      return { args };
    },
    template: `
    <HRadioGroup v-bind="args">
      <HRadio value="Lucifer Morningstar" label="Lucifer Morningstar" />
      <HRadio value="Samael" label="Samael" />
      <HRadio value="Lightbringer" label="Lightbringer" />
    </HRadioGroup>
    `,
  }),
};
