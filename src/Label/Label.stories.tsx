import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Label } from './Label';
import { Input } from '../Input/Input';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email-field">Email address</Label>
      <Input id="email-field" type="email" placeholder="email@example.com" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Email address')).toBeInTheDocument();
    expect(canvas.getByRole('textbox')).toBeInTheDocument();
  },
};
