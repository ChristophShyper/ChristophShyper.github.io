import js from '@eslint/js';
import pluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const tsRecommended = tseslint.configs.recommended;

export default [
  // Ignore build artifacts and static assets
  { ignores: ['dist/**', '.astro/**', 'public/**', 'node_modules/**'] },

  // Apply the core JS recommended rules only to plain JS files.
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Astro recommended rules (includes .astro support)
  ...pluginAstro.configs['flat/recommended'],

  // Apply TypeScript support only to TS files so it does not override Astro parsing.
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    plugins: tsRecommended[0].plugins,
    languageOptions: {
      ...tsRecommended[0].languageOptions,
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}', '**/*.astro/*.ts', '*.astro/*.ts'],
    rules: {
      ...tsRecommended[1].rules,
      ...tsRecommended[2].rules,
    },
  },

  // Enable parsing of <script> blocks inside .astro files as TypeScript when present
  {
    files: ['**/*.astro/*.ts'],
    languageOptions: { parser: tseslint.parser },
  },

  // Project-wide rule tweaks to reduce noisy failures
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      // Often fine to keep during development
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // TypeScript handles undefined checks; avoid duplicate reports
      'no-undef': 'off',
    },
  },

  // Astro generates this triple-slash reference; linting it is not useful.
  {
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
