import { StoryObj, Meta } from '@storybook/react';
import Mypage from '.';

export default {
  component: Mypage,
} as Meta<typeof Mypage>;

type Story = StoryObj<typeof Mypage>;

const Template: Story = {
  name: 'Default',
  render: () => <Mypage />,
};

export const defaultMypage: Story = {
  ...Template,
};
