import type { Meta, StoryObj } from '@storybook/react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from './Chart';

const meta: Meta = {
  title: 'Components/Chart',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1, 220 70% 50%))',
  },
};

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-48 w-full max-w-sm">
      <BarChart data={chartData}>
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickFormatter={(v) => v.slice(0, 3)} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
