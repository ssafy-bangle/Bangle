import { StoryObj, Meta } from '@storybook/react';
import Modal from '.';

export default {
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    title: {
      type: 'string',
      description: '제목',
    },
    type: {
      type: 'string',
      description: '텍스트',
    },
  },
  render: (args) => <Modal {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    ...Template.args,
    type: 'publish',
    title: '테스트케이스',
  },
};
