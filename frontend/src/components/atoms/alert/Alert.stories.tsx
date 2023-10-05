import { StoryObj, Meta } from '@storybook/react';
import Alert from '.';

export default {
  component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

const Template: Story = {
  name: 'Default',
  render: () => <Alert state="error" />,
};

export const Default: Story = {
  ...Template,
};
