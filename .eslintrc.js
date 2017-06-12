// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: "module"
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  "rules": {
    "no-var": "error",
    "no-new": 0,
    "no-with": "error",
    "one-var": [
      "error",
      "never"
    ],
    "no-empty": "error",
    "no-console": "off",
    "no-cond-assign": [
      "error",
      "always"
    ],
    "brace-style": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-str": "error",
    "max-len": [
      "warn",
      {
        "code": 120,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignorePattern": "<.+"
      }
    ],
    "yoda": [
      "error",
      "never"
    ],
    "space-unary-ops": "error",
    "no-spaced-func": "error",
    "new-cap": "error",
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "space-infix-ops": "error",
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-extra-semi": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "indent": [
      "error",
      4,
      { "SwitchCase": 1 }
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "dot-notation": [
      "warn",
      {
        "allowPattern": "^[a-z]+(_[a-z]+)+$"
      }
    ],
    "wrap-iife": [
      "error",
      "inside"
    ],
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
