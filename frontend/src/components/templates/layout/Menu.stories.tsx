import { StoryObj, Meta } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  render: (args) => <Button {...args} />,
};

export const LongBigBtn: Story = {
  ...Template,
  name: 'Long & Big',
  args: {
    ...Template.args,
  },
};
