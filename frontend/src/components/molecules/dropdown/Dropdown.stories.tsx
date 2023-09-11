import { StoryObj, Meta } from '@storybook/react';
import Dropdown from '.';

export default {
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'big'],
      description: '길이',
    },
    state: {
      type: 'string',
      control: 'select',
      options: ['default', 'focus'],
      description: '상태',
    },
  },
  render: (args) => <Dropdown {...args} />,
};

export const DefaultInput: Story = {
  ...Template,
  name: 'Default',
  args: {
    ...Template.args,
    state: 'default',
  },
};
