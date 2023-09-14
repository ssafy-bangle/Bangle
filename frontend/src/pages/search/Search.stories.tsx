import { StoryObj, Meta } from '@storybook/react';
import Search from '.';

export default {
  component: Search,
} as Meta<typeof Search>;

type Story = StoryObj<typeof Search>;

const Template: Story = {
  name: 'Default',
  render: () => <Search />,
};

export const Default: Story = {
  ...Template,
};
