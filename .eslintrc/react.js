import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const reactPlugins = {
  'react-hooks': reactHooks,
  'react-refresh': reactRefresh,
};

const reactRules = {
  ...reactHooks.configs.recommended.rules,
  'react-hooks/exhaustive-deps': ['off'], // No need to add all dependency in hook dependencies
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};

export { reactPlugins, reactRules };
