import js from '@eslint/js';
import pluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // Ignore build artifacts and static assets
  { ignores: ['dist/**', '.astro/**', 'public/**', 'node_modules/**'] },

  // Set common globals for browser and node across JS/TS files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // JavaScript recommended rules
  js.configs.recommended,

  // Astro recommended rules (includes .astro support)
  ...pluginAstro.configs['flat/recommended'],

  // TypeScript recommended rules for .ts/.tsx files
  ...tseslint.configs.recommended,

  // Enable parsing of <script> blocks inside .astro files as TypeScript when present
  {
    files: ['**/*.astro/*.ts'],
    languageOptions: { parser: tseslint.parser },
  },

  // Project-wide rule tweaks to reduce noisy failures
  {
    rules: {
      // Often fine to keep during development
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // TypeScript handles undefined checks; avoid duplicate reports
      'no-undef': 'off',
    },
  },
];

