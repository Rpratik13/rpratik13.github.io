const lineAfterBlocks = ['block-like'];

const lineBeforeBlocks = [
  'break',
  'case',
  'continue',
  'export',
  'default',
  'for',
  'function',
  'if',
  'return',
  'switch',
  'throw',
  'try',
  'while',
];

const stylisticRules = {
  'padding-line-between-statements': [
    'error',
    ...lineAfterBlocks.map((block) => {
      return {
        blankLine: 'always',
        prev: block,
        next: '*',
      };
    }),
    ...lineBeforeBlocks.map((block) => {
      return {
        blankLine: 'always',
        prev: '*',
        next: block,
      };
    }),
  ],
};

export { stylisticRules };
