import globals from 'globals';
import tseslint from 'typescript-eslint';

import { extensions, plugins, rules } from './.eslintrc/index.js';

export default tseslint.config(
  { ignores: ['.next/'] },
  {
    extends: extensions,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins,
    rules,
  },
);
