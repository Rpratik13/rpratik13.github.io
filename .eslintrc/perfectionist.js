import fs from 'fs';
import path from 'path';
import perfectionist from 'eslint-plugin-perfectionist';

function getFoldersInDirectory(directoryPath) {
  try {
    const filesAndFolders = fs.readdirSync(directoryPath);

    const folders = filesAndFolders.filter((item) => {
      const fullPath = path.join(directoryPath, item);

      return fs.statSync(fullPath).isDirectory();
    });

    return folders;
  } catch (_error) {
    return [];
  }
}

const folders = getFoldersInDirectory('.');

const perfectionistCustomGroupValues = folders.map((folder) => {
  return {
    groupName: folder,
    elementNamePattern: `^@/${folder}(/.*|$)`,
  };
});

const perfectionistRules = {
  'perfectionist/sort-exports': 'error',
  'perfectionist/sort-imports': [
    'error',
    {
      customGroups: perfectionistCustomGroupValues,
      groups: [
        'external',
        ...perfectionistCustomGroupValues.map((g) => g.groupName),
        'unknown',
      ],
      maxLineLength: 80,
      newlinesBetween: 1,
      order: 'asc',
      type: 'line-length',
    },
  ],
  'perfectionist/sort-interfaces': 'error',
  'perfectionist/sort-jsx-props': 'error',
  'perfectionist/sort-modules': 'error',
  'perfectionist/sort-named-imports': 'error',
  'perfectionist/sort-objects': 'error',
  'perfectionist/sort-switch-case': 'error',
  'perfectionist/sort-union-types': 'error',
};

export { perfectionist as perfectionistPlugin, perfectionistRules };
