import { StoryObj, Meta } from '@storybook/react';
import MunziBtn from '.';

export default {
  component: MunziBtn,
} as Meta<typeof MunziBtn>;

type Story = StoryObj<typeof MunziBtn>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    price: {
      type: 'number',
      description: '가격',
    },
    content: {
      type: 'string',
      description: '텍스트',
    },
  },
  render: (args) => <MunziBtn {...args} />,
};

export const PriceBtn: Story = {
  ...Template,
  name: 'PriceBtn',
  args: {
    ...Template.args,
    price: 10,
    content: '구매하기',
  },
};