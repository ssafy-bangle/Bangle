import { StoryObj, Meta } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'big'],
      description: '크기',
    },
    title: {
      type: 'string',
      description: '제목',
    },
    icon: {
      type: 'string',
      description: '아이콘',
    },
  },
  render: (args) => <Button {...args} />,
};

export const SmallChip: Story = {
  ...Template,
  name: 'Search',
  args: {
    ...Template.args,
    size: 'small',
    title: '테스트 케이스',
    icon: '🙄'
  },
};

export const BigChip: Story = {
  ...Template,
  name: 'Book',
  args: {
    ...Template.args,
    size: 'big',
    title: '테스트 케이스',
  },
};