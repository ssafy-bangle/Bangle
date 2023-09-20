import { StoryObj, Meta } from '@storybook/react';
import Card from '.';

export default {
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    type: {
      type: 'string',
      control: 'select',
      options: ['author', 'genre'],
      description: '크기',
    },
    title: {
      type: 'string',
      description: '제목',
    },
  },
  render: (args) => <Card {...args} />,
};

export const AuthorCard: Story = {
  ...Template,
  name: 'Author',
  args: {
    ...Template.args,
    type: 'author',
    title: '테스트 케이스',
  },
};

export const GenreCard: Story = {
  ...Template,
  name: 'Genre',
  args: {
    ...Template.args,
    type: 'genre',
    title: '로맨스',
  },
};
