import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="py-1 text-sm">
          Item {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
};
