import { StoryObj, Meta } from '@storybook/react';
import Nav from '.';

export default {
  component: Nav,
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    role: {
      type: 'string',
      control: 'select',
      options: ['author', 'user'],
      description: '모드 선택',
    },
  },
  render: (args) => <Nav {...args} />,
};

export const authorNav: Story = {
  ...Template,
  name: 'authorNav',
  args: {
    ...Template.args,
    role: 'author',
  },
};

export const userNav: Story = {
  ...Template,
  name: 'userNav',
  args: {
    ...Template.args,
    role: 'user',
  },
};
