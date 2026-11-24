import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'node',
    'promise',
  ],
  env: {
    node: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  categories: {
    correctness: 'error',
    suspicious: 'warn',
    style: 'error',
  },
  rules: {
    'sort-keys': 'off',
    'sort-imports': 'off',

    'no-duplicate-imports': [
      'error',
      {
        allowSeparateTypeImports: true,
      },
    ],

    'typescript/consistent-type-imports': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-explicit-any': 'error',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          lowercase: true,
        },
      },
    ],

    'oxc/no-barrel-file': ['error', { threshold: 1 }],

    'import/no-nodejs-modules': 'off',

    'import/consistent-type-specifier-style': 'error',
    'import/no-cycle': 'error',
  },
});
