import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible';

const meta: Meta = {
  title: 'Components/Collapsible',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-64">
        <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 bg-muted rounded-md text-sm font-medium">
          Toggle content
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
          Hidden content revealed on toggle.
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
