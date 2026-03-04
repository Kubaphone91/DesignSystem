import type { Preview, Decorator } from '@storybook/react';
import '../src/styles/globals.css';

const THEMES = ['base', 'brand-a', 'brand-b', 'gladio'] as const;
type Theme = (typeof THEMES)[number];

const withTheme: Decorator = (Story, context) => {
  const theme: Theme = context.globals.theme ?? 'base';
  return (
    <div className={`${theme}-theme min-h-screen bg-background text-foreground p-6`}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Design token theme',
      defaultValue: 'base',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'base', title: 'Base' },
          { value: 'brand-a', title: 'Brand A (Green)' },
          { value: 'brand-b', title: 'Brand B (Purple)' },
          { value: 'gladio', title: 'Gladio (Cyan)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
