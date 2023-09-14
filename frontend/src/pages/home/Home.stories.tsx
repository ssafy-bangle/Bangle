import { StoryObj, Meta } from '@storybook/react';
import Home from '.';

export default {
  component: Home,
} as Meta<typeof Home>;

type Story = StoryObj<typeof Home>;

const Template: Story = {
  name: 'Default',
  render: () => <Home />,
};

export const Default: Story = {
  ...Template,
};
