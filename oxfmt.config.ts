import { defineConfig } from 'oxfmt';

export default defineConfig({
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.md'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
});
