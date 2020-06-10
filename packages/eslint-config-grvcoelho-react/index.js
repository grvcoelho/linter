module.exports = {
  extends: [
    'airbnb',
    'grvcoelho-vanilla',
  ],
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'jsx-a11y/label-has-for': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react-hooks/rules-of-hooks': ['error'],
  },
}
