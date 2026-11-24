// @ts-check

import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import oxlint from 'eslint-plugin-oxlint';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    files: ['src/**/*.ts'],
    ignores: ['**/node_modules/**', '**/dist/**'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
    ],

    rules: {
      '@typescript-eslint/member-ordering': 'error',
    },
  },

  ...(await oxlint.buildFromConfigFile('./oxlint.config.ts')),

  prettierConfig,
);
