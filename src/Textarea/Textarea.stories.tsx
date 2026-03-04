import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: 'Type your message here.' } };
export const Disabled: Story = { args: { disabled: true, placeholder: 'Disabled' } };

export const Typed: Story = {
  args: { placeholder: 'Type here...' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await userEvent.type(textarea, 'Hello world');
    expect(textarea).toHaveValue('Hello world');
  },
};
