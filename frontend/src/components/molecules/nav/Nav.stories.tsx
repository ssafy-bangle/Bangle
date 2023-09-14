import { StoryObj, Meta } from '@storybook/react';
import Nav from '.';

export default {
  component: Nav,
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

const Template: Story = {
  name: 'Default',
  render: () => <Nav />,
};

export const defaultNav: Story = {
  ...Template,
};
