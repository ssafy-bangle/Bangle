import { StoryObj, Meta } from '@storybook/react';
import { LineChart } from '.';

export default {
  component: LineChart,
} as Meta<typeof LineChart>;

type Story = StoryObj<typeof LineChart>;

const Template: Story = {
  name: 'Default',
  render: () => <LineChart />,
};

export const Default: Story = {
  ...Template,
};
