# @rfgamaral/eslint-config-typescript-unified

[![development ci](https://github.com/rfgamaral/eslint-config-typescript-unified/workflows/Development%20CI/badge.svg)](https://github.com/rfgamaral/eslint-config-typescript-unified/actions?query=workflow%3A%22Development+CI%22)
[![codecov](https://codecov.io/gh/rfgamaral/eslint-config-typescript-unified/branch/master/graph/badge.svg)](https://codecov.io/gh/rfgamaral/eslint-config-typescript-unified)
[![npm](https://img.shields.io/npm/v/@rfgamaral/eslint-config-typescript-unified.svg)](https://www.npmjs.com/package/@rfgamaral/eslint-config-typescript-unified)
[![minified size](https://img.shields.io/bundlephobia/min/@rfgamaral/eslint-config-typescript-unified.svg)](https://bundlephobia.com/result?p=@rfgamaral/eslint-config-typescript-unified)
[![downloads](https://img.shields.io/npm/dt/@rfgamaral/eslint-config-typescript-unified.svg)](https://www.npmtrends.com/@rfgamaral/eslint-config-typescript-unified)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/npm/l/@rfgamaral/eslint-config-typescript-unified.svg)](LICENSE)

A unified [ESLint](https://eslint.org/) configuration with sensible defaults for [TypeScript](https://www.typescriptlang.org/) projects.

## Installation

This package provides multiple [ESLint Shareable Configurations](https://eslint.org/docs/developer-guide/shareable-configs) for your convenience. To make use of any of them, you must first install [`eslint`](https://github.com/eslint/eslint), [`prettier`](https://github.com/prettier/prettier) and [`typescript`](https://github.com/Microsoft/TypeScript) since this package does not do it for you. Then install it with:

```sh
npm install --save-dev @rfgamaral/eslint-config-typescript-unified
```

## Usage

Once `@rfgamaral/eslint-config-typescript-unified` is installed, you can use any of the available configurations in the [`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).

### Default

Default configuration with recommended rules from [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier):

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified"
}
```

### ESLint

Extends the default configuration with [recommended rules](https://eslint.org/docs/rules/) from ESLint:

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/eslint"
}
```

### Airbnb

Extends the default configuration with [base rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) from Aribnb:

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/airbnb"
}
```

### Airbnb (React)

Extends the Airbnb configuration with [React rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) from Airbnb:

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/airbnb-react"
}
```

### Airbnb (React + Hooks)

Extends the Airbnb React configuration with [Hooks rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) from Airbnb:

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/airbnb-react-hooks"
}
```

### Recommended

Extends the Airbnb configuration with my own [opinionated rules](https://github.com/rfgamaral/eslint-config-typescript-unified/blob/master/tests/recommended.test.js):

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/recommended"
}
```

### Recommended (React)

Extends the Airbnb (React) configuration with my own [opinionated rules](https://github.com/rfgamaral/eslint-config-typescript-unified/blob/master/tests/recommended-react.test.js):

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/recommended-react"
}
```

### Recommended (React + Hooks)

Extends the Airbnb (React + Hooks) configuration with my own [opinionated rules](https://github.com/rfgamaral/eslint-config-typescript-unified/blob/master/tests/recommended-react-hooks.test.js):

```json
{
  "extends": "@rfgamaral/eslint-config-typescript-unified/recommended-react-hooks"
}
```

### Semantics (type-checking)

For all the configurations mentioned above, the TypeScript rules are fast feedback rules which operate purely based on syntax (no type-checking). If you want some additional highly valuable rules that operate on semantics (type-checking), just suffix any of the configuration names above with `-semantics`. You can read a little bit more about it [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage).

## Frequently Asked Questions

### Why is ESLint's `no-undef` rule disabled?

This rule is disabled to prevent ESLint from reporting `no-undef` false positives for Interfaces and Types. More details at [typescript-eslint/typescript-eslint#342](https://github.com/typescript-eslint/typescript-eslint/issues/342).

The TypeScript compiler will catch undeclared variables by default, so we don't need this rule.

### Why are `*.d.ts` files being ignored for all Airbnb and Recommended configurations?

Airbnb and Recommended configurations make use of [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) which triggers `import/no-cycle` false positives for cyclic dependencies between `type` imports. More details at [benmosher/eslint-plugin-import#1453](https://github.com/benmosher/eslint-plugin-import/issues/1453).

### How to configure a mixed JavaScript/TypeScript codebase with any of the Recommended configurations?

Recommended configurations require explicit return types on functions and class methods ([explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)) which triggers false positives for JavaScript files. To workaround that, please ensure add the following override to disable the rule for `.js` and `.jsx` files:

```json
{
  "overrides": [
    {
      "files": ["*.{js,jsx}"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
```

## License

The use of this source code is governed by an MIT-style license that can be found in the [LICENSE](LICENSE) file.
