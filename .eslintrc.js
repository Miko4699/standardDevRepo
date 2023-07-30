module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'always'],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'computed-property-spacing': ['error', 'never'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'no-async-promise-executor': 'off',
    'no-cond-assign': 'off',
    'no-eq-null': 'error',
    'no-extra-boolean-cast': 'off',
    'no-lone-blocks': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-new': 'error',
    'no-param-reassign': 'error',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    quotes: [1, 'single'],
    'semi-spacing': 'error',
  },
};
