import { StoryObj, Meta } from '@storybook/react';
import Info from '.';

export default {
  component: Info,
} as Meta<typeof Info>;

type Story = StoryObj<typeof Info>;

const Template: Story = {
  name: 'Default',
  render: () => <Info />,
};

export const Default: Story = {
  ...Template,
};
