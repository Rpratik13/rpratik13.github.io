import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import { baseRules } from './base.js';
import { jsxA11yPlugin } from './jsxA11y.js';
import { stylisticRules } from './stylistic.js';
import { typescriptRules } from './typescript.js';
import { reactPlugins, reactRules } from './react.js';
import { importPlugin, importRules } from './import.js';
import { perfectionistPlugin, perfectionistRules } from './perfectionist.js';
import { unusedImportsPlugin, unusedImportsRules } from './unusedImports.js';

const extensions = [js.configs.recommended, ...tseslint.configs.recommended];

const plugins = {
  ...reactPlugins,
  import: importPlugin,
  'jsx-a11y': jsxA11yPlugin,
  perfectionist: perfectionistPlugin,
  'unused-imports': unusedImportsPlugin,
};

const rules = {
  ...baseRules,
  ...importRules,
  ...perfectionistRules,
  ...reactRules,
  ...stylisticRules,
  ...unusedImportsRules,
  ...typescriptRules,
};

export { extensions, plugins, rules };
