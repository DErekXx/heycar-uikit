import { addons } from '@storybook/addons';
import { addParameters, configure } from '@storybook/react';
import { LIVE_EXAMPLES_ADDON_ID } from 'storybook-addon-live-examples';

import scope from './scope';
import alfaTheme from './theme';
import { editorTheme } from './editorTheme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addons.setConfig({
  [LIVE_EXAMPLES_ADDON_ID]: {
    editorTheme,
    // sandboxPath: '/docs/sandbox',
    copyText: ['Copy', 'Copied'],
    expandText: ['Show code', 'Hide code'],
    shareText: ['Share', 'Share'],
    borderColor: 'var(--color-neutral-100)',
    borderRadius: '0',
    actionBg: '#fff',
    actionColor: 'var(--color-primary-500)',
    actionAccent: 'var(--color-primary-700)',
    errorsBg: 'var(--color-error-500)',
    errorsColor: 'var(--color-error-700)',
    fontBase: 'var(--font-family-system)',
    fontSizeBase: 16,
    fontSizeCode: 14,
    defaultCanvas: true,
    scope: {
      ...scope,
    },
  },
});

addParameters({
  viewMode: 'docs',
  docs: {
    theme: alfaTheme,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Introduction',
        'Guidelines',
        [
          'Installation',
          'Integration workflows',
          [
            'Introduction',
            '1. Happy Path',
            '2. Almost Happy Path',
            '3. Adding new component',
          ],
          'Contributing',
          'Package structure convention',
          'Code style guide convention',
        ],
        'Components',
      ],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure(
  [
    require.context('../docs', true, /\.stories\.mdx$/),
    require.context(
      '../packages',
      true,
      /(?<!\/node_modules.*)\.stories\.(tsx|mdx)$/,
    ),
  ],
  module,
);
