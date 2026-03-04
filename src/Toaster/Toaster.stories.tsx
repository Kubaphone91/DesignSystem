import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './Toaster';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="relative h-16">
      <p className="text-sm text-muted-foreground">
        The Toaster component mounts a fixed viewport for toast notifications. It is invisible until a toast is triggered.
      </p>
      <Toaster />
    </div>
  ),
};
