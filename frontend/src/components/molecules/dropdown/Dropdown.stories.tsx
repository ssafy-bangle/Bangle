import { StoryObj, Meta } from '@storybook/react';
import Dropdown from '.';
import { DropdownItems } from '@src/types/props';

const genreList = ['인문', 'SF', '자기계발', '로맨스', '소설', '건강', '경제', '취미', '어학', '여행'];
const itemList = genreList.map((genre: string, idx: number) => ({
  label: genre,
  key: idx,
}));

const items: DropdownItems[] = itemList;

export default {
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const Template: Story = {
  name: 'Default',
  render: () => <Dropdown items={items} setInput={() => {}} />,
};

export const Default: Story = {
  ...Template,
  name: 'Default',
};
