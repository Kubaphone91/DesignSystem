import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const SixteenByNine: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground text-sm">16:9</span>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={1} className="bg-muted rounded-full flex items-center justify-center">
        <span className="text-muted-foreground text-sm">1:1</span>
      </AspectRatio>
    </div>
  ),
};
