// Flat config for ESLint v9+ focusing on .astro files only (no TS parser needed)
export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
  // Astro plugin recommended (flat) config
  // Using dynamic import to avoid requiring Node ESM resolution issues
  (await import("eslint-plugin-astro")).configs["flat/recommended"],
];

