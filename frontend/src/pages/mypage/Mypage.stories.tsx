import { StoryObj, Meta } from '@storybook/react';
import Mypage from '.';

export default {
  component: Mypage,
} as Meta<typeof Mypage>;

type Story = StoryObj<typeof Mypage>;

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
  render: (args) => <Mypage {...args} />,
};

export const authorMypage: Story = {
  ...Template,
  name: 'authorMypage',
  args: {
    ...Template.args,
    role: 'author',
  },
};

export const userMypage: Story = {
  ...Template,
  name: 'userMypage',
  args: {
    ...Template.args,
    role: 'user',
  },
};
