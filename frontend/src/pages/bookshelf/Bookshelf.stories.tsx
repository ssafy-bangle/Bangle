import { StoryObj, Meta } from '@storybook/react';
import Bookshelf from '.';

export default {
  component: Bookshelf,
} as Meta<typeof Bookshelf>;

type Story = StoryObj<typeof Bookshelf>;

const Template: Story = {
  name: 'Default',
  render: () => <Bookshelf />,
};

export const Tmp: Story = {
  ...Template,
};
