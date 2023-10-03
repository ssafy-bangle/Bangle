import { StoryObj, Meta } from '@storybook/react';
import LightBulb from '.';

export default {
  component: LightBulb,
} as Meta<typeof LightBulb>;

type Story = StoryObj<typeof LightBulb>;

const Template: Story = {
  name: 'Default',
  render: () => <LightBulb />,
};

export const Default: Story = {
  ...Template,
};
