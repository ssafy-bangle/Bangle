import { StoryObj, Meta } from '@storybook/react';
import SearchBar from '.';

export default {
  component: SearchBar,
} as Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

const Template: Story = {
  name: 'Default',
  render: () => <SearchBar />,
};

export const SearchBarInput: Story = {
  ...Template,
  name: 'PriceBtn',
};
