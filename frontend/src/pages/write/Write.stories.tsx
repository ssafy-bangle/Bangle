import { StoryObj, Meta } from '@storybook/react';
import UploadBookCover from '.';

export default {
  component: UploadBookCover,
} as Meta<typeof UploadBookCover>;

type Story = StoryObj<typeof UploadBookCover>;

const Template: Story = {
  name: 'Default',
  render: () => <UploadBookCover />,
};

export const Default: Story = {
  ...Template,
};
