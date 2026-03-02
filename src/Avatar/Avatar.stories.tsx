import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Inline 1×1 transparent PNG — avoids external network requests in Chromatic
const PLACEHOLDER_IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={PLACEHOLDER_IMG} alt="User avatar" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('JD')).toBeInTheDocument();
  },
};

export const InitialsOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('AB')).toBeInTheDocument();
  },
};

export const Large: Story = {
  render: () => (
    <Avatar className="h-16 w-16">
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  ),
};
