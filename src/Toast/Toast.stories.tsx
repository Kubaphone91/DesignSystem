import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from './Toast';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <div className="relative">
        <Toast open={true} className="static flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastClose />
          </div>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
          <ToastAction altText="Undo" className="mt-2">Undo</ToastAction>
        </Toast>
      </div>
    </ToastProvider>
  ),
};

export const Destructive: Story = {
  render: () => (
    <ToastProvider>
      <div className="relative">
        <Toast open={true} variant="destructive" className="static flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
            <ToastClose />
          </div>
          <ToastDescription>There was a problem with your request.</ToastDescription>
          <ToastAction altText="Try again" className="mt-2">Try again</ToastAction>
        </Toast>
      </div>
    </ToastProvider>
  ),
};
