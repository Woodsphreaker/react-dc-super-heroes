module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
<<<<<<< HEAD
    // 'prettier/prettier': 'error',
=======
    'prettier/prettier': 'error',
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
    'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.js']}],
    'import/prefer-default-export': 'off',
    'quotes': ['error', 'single'],
    'object-curly-spacing': [2, 'always'],
    'semi': [2, 'never'],
  }
}
