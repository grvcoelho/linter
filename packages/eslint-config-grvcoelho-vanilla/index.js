module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }
    ],
    'function-paren-newline': ['error', 'multiline'],
    'max-len': ['error', { code: 100, tabWidth: 2, }],
    'max-params': ['error', { max: 3 }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'prefer-const': 'error',
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
  },
}
