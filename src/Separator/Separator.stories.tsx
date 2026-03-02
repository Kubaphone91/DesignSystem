import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm">Above</p>
      {/* decorative={false} gives role="separator" for ARIA; default is decorative=true */}
      <Separator className="my-2" decorative={false} />
      <p className="text-sm">Below</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toBeInTheDocument();
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-2">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};
