import { StoryObj, Meta } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    length: {
      type: 'string',
      control: 'select',
      options: ['long', 'short'],
      description: '길이',
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['big', 'small'],
      description: '크기',
    },
    active: {
      type: 'boolean',
      control: 'select',
      options: [true, false],
      description: '활성화 여부',
    },
    content: {
      type: 'string',
      description: '내용',
    },
    icon: {
      type: 'string',
      description: '아이콘'
    }
  },
  render: (args) => <Button {...args} />,
};

export const LongBigBtn: Story = {
  ...Template,
  name: 'Long & Big',
  args: {
    ...Template.args,
    length: 'long',
    size: 'big',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const shortBigBtn: Story = {
  ...Template,
  name: 'Short & Big',
  args: {
    ...Template.args,
    length: 'short',
    size: 'big',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const LongSmallBtn: Story = {
  ...Template,
  name: 'Long & Small',
  args: {
    ...Template.args,
    length: 'long',
    size: 'small',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const shortSmallBtn: Story = {
  ...Template,
  name: 'Short & Small',
  args: {
    ...Template.args,
    length: 'short',
    size: 'small',
    active: true,
    content: '테스트컨텐츠',
  },
};

export const withIcon: Story = {
  ...Template,
  name: 'Short & Small & Icon',
  args: {
    ...Template.args,
    length: 'short',
    size: 'small',
    active: true,
    content: '테스트컨텐츠',
    icon: 'mode',
  },
};
