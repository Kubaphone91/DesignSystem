import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <div className="px-16">
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {[1, 2, 3].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
                <span className="text-4xl font-semibold">{slide}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const carousel = canvas.getByRole('region', { name: /carousel/i });
    expect(carousel).toBeInTheDocument();
  },
};
