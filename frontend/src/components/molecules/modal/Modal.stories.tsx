import { StoryObj, Meta } from '@storybook/react';
import Modal from '.';

export default {
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    open: {
      type: 'boolean',
      description: '여부',
    },
    title: {
      type: 'string',
      description: '제목',
    },
    type: {
      type: 'string',
      description: '텍스트',
    },
    firstPrice: {
      type: 'number',
      description: '가격1',
    },
    secondPrice: {
      type: 'number',
      description: '가격2',
    },
  },
  render: (args) => <Modal {...args} />,
};

export const DefaultModal: Story = {
  ...Template,
  name: 'DefaultModal',
  args: {
    ...Template.args,
    open: true,
    type: 'publish',
    title: '테스트케이스',
    firstPrice: 5,
    secondPrice: 10,
  },
};
