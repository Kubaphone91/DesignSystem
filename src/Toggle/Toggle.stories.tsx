import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = { render: () => <Toggle>Toggle</Toggle> };
export const Outline: Story = { render: () => <Toggle variant="outline">Outline</Toggle> };

export const Pressed: Story = {
  render: () => <Toggle>Click me</Toggle>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button');
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('data-state', 'on');
  },
};
