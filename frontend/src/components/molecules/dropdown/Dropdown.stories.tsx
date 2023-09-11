import { StoryObj, Meta } from '@storybook/react';
import DropdownItem from '.';

export default {
  component: DropdownItem,
} as Meta<typeof DropdownItem>;

type Story = StoryObj<typeof DropdownItem>;

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
  render: (args) => <DropdownItem {...args} />,
};

export const DefaultInput: Story = {
  ...Template,
  name: 'Default',
  args: {
    ...Template.args,
    state: 'default',
  },
};
