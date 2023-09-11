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
      options: ['short', 'medium', 'default', 'long'],
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
    size: 'default',
    state: 'default',
    placeholder: '테스트컨텐츠',
  },
};

export const FocusInput: Story = {
  ...Template,
  name: 'Focus',
  args: {
    ...Template.args,
    size: 'default',
    state: 'focus',
    placeholder: '테스트컨텐츠',
  },
};

export const ErrorInput: Story = {
  ...Template,
  name: 'Error',
  args: {
    ...Template.args,
    size: 'default',
    state: 'error',
    placeholder: '테스트컨텐츠',
  },
};

export const LongInput: Story = {
  ...Template,
  name: 'Long',
  args: {
    ...Template.args,
    size: 'long',
    state: 'default',
    placeholder: '테스트컨텐츠',
  },
};

export const ShortInput: Story = {
  ...Template,
  name: 'Short',
  args: {
    ...Template.args,
    size: 'short',
    state: 'default',
    placeholder: '테스트컨텐츠',
  },
};

export const MediumInput: Story = {
  ...Template,
  name: 'Medium',
  args: {
    ...Template.args,
    size: 'medium',
    state: 'default',
    placeholder: '테스트컨텐츠',
  },
};
