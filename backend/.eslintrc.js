module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // warn on unused variables, but ignore those starting with underscore
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error', // treat unused variables as errors
    '@typescript-eslint/no-explicit-any': 'error', // treat explicit "any" types as errors
    '@typescript-eslint/no-unsafe-assignment': 'error', // treat unsafe assignment (e.g. "any" or "unknown" types) as errors
    '@typescript-eslint/no-unsafe-member-access': 'error', // treat unsafe member access (e.g. accessing "any" or "unknown" types) as errors
    '@typescript-eslint/no-unsafe-call': 'error', // treat unsafe function call (e.g. calling "any" or "unknown" types) as errors
    'no-unused-vars': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'function', next: 'function' }]
  }
};
