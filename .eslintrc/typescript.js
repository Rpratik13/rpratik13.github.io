const typescriptRules = {
  '@typescript-eslint/explicit-function-return-type': 'error', // Must have function return type explicitly defined
  '@typescript-eslint/no-non-null-assertion': 'error', // No use of !
  '@typescript-eslint/no-unused-vars': [
    // No unused vars allowed except ones starting with _
    'warn',
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
};

export { typescriptRules };
