import { defineConfig } from 'lint-staged/config';

export default defineConfig({
  '*.{js,jsx,ts,tsx,mjs,cjs}': [
    'oxlint --fix',
    'eslint --fix --cache',
    'oxfmt --no-error-on-unmatched-pattern',
  ],
});
