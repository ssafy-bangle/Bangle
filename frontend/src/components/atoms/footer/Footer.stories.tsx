import { StoryObj, Meta } from '@storybook/react';
import { Footer } from './index.styled';

export default {
  component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

const Template: Story = {
  name: 'Default',
  render: () => <Footer />,
};

export const defaultFooter: Story = {
  ...Template,
  args: {
    ...Template.args,
  },
};
