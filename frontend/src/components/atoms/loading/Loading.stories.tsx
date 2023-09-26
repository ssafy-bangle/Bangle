import { StoryObj, Meta } from '@storybook/react';
import Loading from '.';

export default {
  component: Loading,
} as Meta<typeof Loading>;

type Story = StoryObj<typeof Loading>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    content: {
      type: 'string',
    },
  },
  render: (args) => <Loading {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    ...Template.args,
  },
};
