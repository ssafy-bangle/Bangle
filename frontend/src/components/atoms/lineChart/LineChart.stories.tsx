import { StoryObj, Meta } from '@storybook/react';
import { LineChart } from '.';

export default {
  component: LineChart,
} as Meta<typeof LineChart>;

type Story = StoryObj<typeof LineChart>;

const Template: Story = {
  name: 'Default',
  argTypes: {
    book: {
      cover: {
        type: 'string',
        description: '커버',
      },
      title: {
        type: 'string',
        description: '제목',
      },
      today_views: {
        type: 'number',
        description: '오늘조회수',
      },
      today_purchases: {
        type: 'number',
        description: '오늘구매수',
      },
      today_reviews: {
        type: 'number',
        description: '오늘리뷰수',
      },
      total_purchases: {
        type: 'number',
        description: '총구매수',
      },
    },
  },
  render: (args) => <LineChart {...args} />,
};

export const Default: Story = {
  ...Template,
};
