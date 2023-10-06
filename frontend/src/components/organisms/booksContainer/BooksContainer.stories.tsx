import { StoryObj, Meta } from '@storybook/react';
import BooksContainer from '.';

export default {
  component: BooksContainer,
} as Meta<typeof BooksContainer>;

type Story = StoryObj<typeof BooksContainer>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    type: {
      type: 'string',
      control: 'select',
      options: ['book', 'author'],
      description: '타입',
    },
    page: {
      type: 'string',
      control: 'select',
      options: ['bookShelf', 'search', 'wishList'],
      description: '페이지',
    },
    title: {
      type: 'string',
      description: '제목',
    },
  },
  render: (args) => <BooksContainer {...args} />,
};

export const Default: Story = {
  ...Template,
  name: 'BookShelf',
  args: {
    ...Template.args,
    type: 'book',
    page: 'bookShelf',
    title: '테스트컨텐츠',
  },
};

export const SearchContainer: Story = {
  ...Template,
  name: 'Search',
  args: {
    ...Template.args,
    type: 'book',
    page: 'search',
    title: '테스트컨텐츠',
  },
};

export const AuthorContainer: Story = {
  ...Template,
  name: 'Author',
  args: {
    ...Template.args,
    type: 'author',
    page: 'search',
    title: '테스트컨텐츠',
  },
};
