import { StoryObj, Meta } from '@storybook/react';
import Dropdown from '.';
import { DropdownItems } from '@src/types/props';

const items: DropdownItems[] = [
  {
    label: '일반',
    key: 0,
  },
  {
    label: '자기계발',
    key: 1,
  },
  {
    label: '금융',
    key: 2,
  },
  {
    label: '소설',
    key: 3,
  },
];

export default {
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const Template: Story = {
  name: 'Default',
  render: () => <Dropdown items={items} setInput={() => {}} />,
};

export const DefaultDrop: Story = {
  ...Template,
  name: 'Default',
};
