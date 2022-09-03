'use strict'

const airbnbConfiguration = require('./airbnb')

module.exports = {
    ...airbnbConfiguration,
    rules: {
        ...airbnbConfiguration.rules,
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-duplicates': 'error',
        'import/no-default-export': 'error',
        'prettier/prettier': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // Node.js builtins generated from a regex (ref: https://git.io/JMJfU)
                    [`^(${require('module').builtinModules.join('|')})(/|$)`],
                    // Third-party modules (side effects)
                    ['^\\u0000'],
                    // Third-party stylesheets (side effects)
                    ['^\\u0000@?\\w.*\\.(s?css|less)$'],
                    // Internal stylesheets (side effects)
                    ['^\\u0000\\..*\\.(s?css|less)$'],
                    // React and related modules
                    ['^@?\\w'],
                    // Internal parent-level modules
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Internal same-level modules
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Internal CSS Modules
                    ['^.*\\.module\\.css$'],
                    // Internal type imports as a separate group
                    // (sorting like non-type imports are grouped)
                    ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'warn',
    },
}
