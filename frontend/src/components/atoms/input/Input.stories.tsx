import { StoryObj, Meta } from '@storybook/react';
import Input from '.';

export default {
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    mode: {
      type: 'string',
      control: 'select',
      options: ['default', 'focus', 'error'],
      description: '모드',
    },
    content: {
      type: 'string',
      description: '내용',
    },
  },
  render: (args) => <Input {...args} />,
};

export const DefaultInput: Story = {
  ...Template,
  name: 'Default',
  args: {
    ...Template.args,
    mode: 'default',
    content: '테스트컨텐츠',
  },
};

export const FocusInput: Story = {
  ...Template,
  name: 'Focus',
  args: {
    ...Template.args,
    mode: 'focus',
    content: '테스트컨텐츠',
  },
};

export const ErrorInput: Story = {
  ...Template,
  name: 'Error',
  args: {
    ...Template.args,
    mode: 'error',
    content: '테스트컨텐츠',
  },
};
