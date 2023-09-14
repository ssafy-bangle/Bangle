import { StoryObj, Meta } from '@storybook/react';
import AuthorHome from '.';

export default {
  component: AuthorHome,
} as Meta<typeof AuthorHome>;

type Story = StoryObj<typeof AuthorHome>;

const Template: Story = {
  name: 'Default',
  render: () => <AuthorHome />,
};

export const Tmp: Story = {
  ...Template,
};
