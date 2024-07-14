import type { Meta, StoryObj } from '@storybook/vue3';

import HBtn from './HBtn.vue';
import IconoirArrowRight from '~icons/iconoir/arrow-right';

const meta = {
  title: 'Containment/HBtn',
  component: HBtn,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    icon: { control: 'boolean', defaultValue: false },
    variant: { control: 'inline-radio', options: ['flat', 'text', 'outlined'] },
    loading: { control: 'boolean', defaultValue: false },
    size: { control: 'inline-radio', options: ['x-small', 'small', 'default'] },
    text: { control: 'text' },
  },
  args: {
    disabled: false,
    icon: false,
    loading: false,
    text: 'Button label',
  },
} satisfies Meta<typeof HBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: (args: any) => ({
    components: { HBtn },
    setup() {
      return { args };
    },
    template: `
    <div>
      <HBtn v-bind="args"  />
    </div>
    `,
  }),
};

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
  render: (args: any) => ({
    components: { HBtn },
    setup() {
      return { args };
    },
    template: `
      <div>
        <HBtn v-bind="args" text="Button label" />
      </div>
    `,
  }),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args: any) => ({
    components: { HBtn },
    setup() {
      return { args };
    },
    template: `
      <div>
        <HBtn v-bind="args" text="Button label" />
      </div>
    `,
  }),
};

export const IconAndText: Story = {
  args: {
    variant: 'flat',
  },
  render: (args: any) => ({
    components: { HBtn, IconoirArrowRight },
    setup() {
      return { args };
    },
    template: `
      <div>
        <HBtn v-bind="args">
          <IconoirArrowRight />
          Button label
        </HBtn>
      </div>
    `,
  }),
};

export const Icon: Story = {
  args: { },
  render: (args: any) => ({
    components: { HBtn, IconoirArrowRight },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <HBtn variant="flat" icon>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="text" icon>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="outlined" icon>
            <IconoirArrowRight />
          </HBtn>
        </div>
        <div class="flex gap-8">
          <HBtn variant="flat" icon size="small">
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="text" icon size="small">
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="outlined" icon size="small">
            <IconoirArrowRight />
          </HBtn>
        </div>
        <div class="flex gap-8">
          <HBtn variant="flat" icon size="x-small">
            <IconoirArrowRight class="size-3" />
          </HBtn>
          <HBtn variant="text" icon size="x-small">
            <IconoirArrowRight class="size-3" />
          </HBtn>
          <HBtn variant="outlined" icon size="x-small">
            <IconoirArrowRight class="size-3" />
          </HBtn>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: { },
  render: (args: any) => ({
    components: { HBtn, IconoirArrowRight },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <HBtn variant="flat" disabled>
            <IconoirArrowRight />
            Button label
          </HBtn>
          <HBtn variant="text" disabled>
            <IconoirArrowRight />
            Button label
          </HBtn>
          <HBtn variant="outlined" disabled>
            <IconoirArrowRight />
            Button label
          </HBtn>
        </div>
        <div class="flex gap-8">
          <HBtn variant="flat" icon disabled>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="text" icon disabled>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="outlined" icon disabled>
            <IconoirArrowRight />
          </HBtn>
        </div>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: { },
  render: (args: any) => ({
    components: { HBtn, IconoirArrowRight },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <HBtn variant="flat" loading text="Button label" />
          <HBtn variant="text" loading text="Button label" />
          <HBtn variant="outlined" loading text="Button label" />
        </div>
        <div class="flex gap-8">
          <HBtn variant="flat" loading>
            <IconoirArrowRight />
            Button label
          </HBtn>
          <HBtn variant="text" loading>
            <IconoirArrowRight />
            Button label
          </HBtn>
          <HBtn variant="outlined" loading>
            <IconoirArrowRight />
            Button label
          </HBtn>
        </div>
        <div class="flex gap-8">
          <HBtn variant="flat" icon loading>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="text" icon loading>
            <IconoirArrowRight />
          </HBtn>
          <HBtn variant="outlined" icon loading>
            <IconoirArrowRight />
          </HBtn>
        </div>
      </div>
    `,
  }),
};
