module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  // rules: {
  //   "react/jsx-uses-vars": "error",
  //   "react/jsx-uses-react": "error"
  // }
  // rules: {
  //   "no-unused-vars": [
  //     "error",
  //     {
  //       "varsIgnorePattern": "React"
  //     }
  //   ]
  // }
}
