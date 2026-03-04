import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './Sonner';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="relative h-16">
      <p className="text-sm text-muted-foreground">
        Sonner Toaster renders toast notifications. Import and use the{' '}
        <code className="text-xs bg-muted px-1 rounded">SonnerToaster</code> component at your app root, then call{' '}
        <code className="text-xs bg-muted px-1 rounded">toast()</code> from the sonner package.
      </p>
      <Toaster />
    </div>
  ),
};
