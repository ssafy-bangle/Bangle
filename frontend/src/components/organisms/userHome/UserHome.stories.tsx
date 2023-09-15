import { StoryObj, Meta } from '@storybook/react';
import UserHome from '.';

export default {
  component: UserHome,
} as Meta<typeof UserHome>;

type Story = StoryObj<typeof UserHome>;

const Template: Story = {
  name: 'Default',
  render: () => <UserHome />,
};

export const Default: Story = {
  ...Template,
};
