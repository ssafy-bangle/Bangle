import { StoryObj, Meta } from '@storybook/react';
import Rating from '.';

export default {
  component: Rating,
} as Meta<typeof Rating>;

type Story = StoryObj<typeof Rating>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    value: {
      type: 'number',
      control: 'select',
      options: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
      description: '점수',
    },
    label: {
      type: 'boolean',
      description: '텍스트',
    },
    editable: {
      type: 'boolean',
      description: '편집',
    },
  },
  render: (args) => <Rating {...args} />,
};

export const DefaultRating: Story = {
  ...Template,
  name: 'Default',
  args: {
    ...Template.args,
    value: 0,
    label: false,
    editable: true,
  },
};

export const ShowRating: Story = {
  ...Template,
  name: 'Review',
  args: {
    ...Template.args,
    value: 4.0,
    label: false,
    editable: false,
  },
};

export const LabelRating: Story = {
  ...Template,
  name: 'Label',
  args: {
    ...Template.args,
    value: 4.0,
    label: true,
    editable: false,
  },
};
