import { StoryObj, Meta } from '@storybook/react';
import NoValue from '.';

export default {
  component: NoValue,
} as Meta<typeof NoValue>;

type Story = StoryObj<typeof NoValue>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    type: {
      type: 'string',
      description: '타입',
    },
  },
  render: (args) => <NoValue {...args} />,
};

export const DefaultNo: Story = {
  ...Template,
  name: 'Default',
  args: {
    ...Template.args,
    type: 'bookDetail',
  },
};

export const SearchNo: Story = {
  ...Template,
  name: 'Search',
  args: {
    ...Template.args,
    type: 'search',
  },
};
