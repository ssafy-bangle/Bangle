import { StoryObj, Meta } from '@storybook/react';
import Input from '.';

export default {
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    size: {
      type: 'string',
      control: 'select',
      options: ['short', 'long'],
      description: '길이',
    },
    state: {
      type: 'string',
      control: 'select',
      options: ['default', 'focus', 'error'],
      description: '상태',
    },
    placeholder: {
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
    size: 'short',
    state: 'default',
    placeholder: '테스트컨텐츠',
  },
};

export const FocusInput: Story = {
  ...Template,
  name: 'Focus',
  args: {
    ...Template.args,
    size: 'short',
    state: 'focus',
    placeholder: '테스트컨텐츠',
  },
};

export const ErrorInput: Story = {
  ...Template,
  name: 'Error',
  args: {
    ...Template.args,
    size: 'short',
    state: 'error',
    placeholder: '테스트컨텐츠',
  },
};
