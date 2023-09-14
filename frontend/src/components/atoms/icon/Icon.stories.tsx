import { StoryObj, Meta } from '@storybook/react';
import Icon from '.';

export default {
  component: Icon,
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    name: {
      type: 'string',
      description: '아이콘 이름',
    },
  },
  render: (args) => <Icon {...args} />,
};

export const Default: Story = {
  ...Template,
  name: 'Small',
  args: {
    ...Template.args,
  },
};
