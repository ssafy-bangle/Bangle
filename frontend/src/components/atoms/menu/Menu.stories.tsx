import { StoryObj, Meta } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    name: {
      type: 'string',
      control: 'select',
      options: ['홈', '출판', '마이페이지'],
    },
  },
  render: (args) => <Button {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    ...Template.args,
  },
};
