// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'react', "unused-imports", "relative-path-checker"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "unused-imports/no-unused-imports": "error",
    "relative-path-checker/control-layer-imports": ['error', { alert: '@' }],
    "relative-path-checker/path-checker": ["error", { alias: '@' }],
  },
}
