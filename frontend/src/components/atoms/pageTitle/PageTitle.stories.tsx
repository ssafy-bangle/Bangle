import { StoryObj, Meta } from '@storybook/react';
import PageTitle from '.';
export default {
  component: PageTitle,
} as Meta<typeof PageTitle>;

type Story = StoryObj<typeof PageTitle>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    children: {
      type: 'string',
      control: 'select',
      options: ['마이페이지', '발행', '책장', '발행'],
      description: '길이',
    },
  },
  render: (args) => <PageTitle {...args}></PageTitle>,
};

export const Default: Story = {
  ...Template,
};
