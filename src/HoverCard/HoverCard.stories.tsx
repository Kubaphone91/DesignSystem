import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';

const meta: Meta = {
  title: 'Components/HoverCard',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="underline cursor-pointer">@nextjs</HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">The React framework for production.</p>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('@nextjs');
    expect(trigger).toBeInTheDocument();
  },
};
