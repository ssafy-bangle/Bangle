import { StoryObj, Meta } from '@storybook/react';
import Button from '.';
import InfoContent from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  render: () => <InfoContent />,
};

export const Default: Story = {
  ...Template,
};
