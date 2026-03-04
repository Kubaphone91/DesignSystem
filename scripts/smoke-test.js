#!/usr/bin/env node
/**
 * SSR smoke test — verifies every exported component renders to HTML
 * without throwing when called with react-dom/server renderToString.
 *
 * Run after `yarn build`: node scripts/smoke-test.js
 */

'use strict';

const { renderToString } = require('react-dom/server');
const React = require('react');

// ── Import the built CJS bundle ──────────────────────────────────────────────
let pkg;
try {
  pkg = require('../dist/cjs/index.js');
} catch (err) {
  console.error('✗ Failed to import dist/cjs/index.js:', err.message);
  process.exit(1);
}

const {
  Button,
  Badge,
  Avatar, AvatarImage, AvatarFallback,
  Input,
  Label,
  Separator,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} = pkg;

// ── Test matrix ──────────────────────────────────────────────────────────────
const tests = [
  {
    name: 'Button (default)',
    render: () => React.createElement(Button, null, 'Click me'),
  },
  {
    name: 'Button (destructive, disabled)',
    render: () => React.createElement(Button, { variant: 'destructive', disabled: true }, 'Delete'),
  },
  {
    name: 'Badge',
    render: () => React.createElement(Badge, null, 'New'),
  },
  {
    name: 'Badge (secondary)',
    render: () => React.createElement(Badge, { variant: 'secondary' }, 'Beta'),
  },
  {
    name: 'Avatar with fallback',
    render: () =>
      React.createElement(Avatar, null,
        React.createElement(AvatarFallback, null, 'JD')
      ),
  },
  {
    name: 'Input',
    render: () => React.createElement(Input, { placeholder: 'Email', type: 'email' }),
  },
  {
    name: 'Input (disabled)',
    render: () => React.createElement(Input, { disabled: true, placeholder: 'Disabled' }),
  },
  {
    name: 'Label',
    render: () => React.createElement(Label, null, 'Email address'),
  },
  {
    name: 'Separator (horizontal)',
    render: () => React.createElement(Separator),
  },
  {
    name: 'Separator (vertical)',
    render: () => React.createElement(Separator, { orientation: 'vertical' }),
  },
  {
    name: 'Card (full composition)',
    render: () =>
      React.createElement(Card, null,
        React.createElement(CardHeader, null,
          React.createElement(CardTitle, null, 'Title'),
          React.createElement(CardDescription, null, 'Description'),
        ),
        React.createElement(CardContent, null, 'Content'),
        React.createElement(CardFooter, null,
          React.createElement(Button, null, 'Action'),
        ),
      ),
  },
];

// ── Run ───────────────────────────────────────────────────────────────────────
console.log('\nSSR smoke test\n');
let failed = false;

for (const { name, render } of tests) {
  try {
    const html = renderToString(render());
    if (!html || html.length === 0) {
      throw new Error('renderToString returned empty string');
    }
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
    failed = true;
  }
}

if (failed) {
  console.error('\n✗ SSR smoke test FAILED — fix errors above before publishing.\n');
  process.exit(1);
}

console.log('\n✓ All components render without throwing.\n');
