'use strict'

const recommendedConfiguration = require('./recommended')

module.exports = {
    ...recommendedConfiguration,
    extends: [
        'airbnb',
        ...recommendedConfiguration.extends.slice(1, recommendedConfiguration.extends.length),
    ],
    rules: {
        ...recommendedConfiguration.rules,
        'import/extensions': [
            ...recommendedConfiguration.rules['import/extensions'].slice(0, 2),
            {
                ...recommendedConfiguration.rules['import/extensions'][2],
                jsx: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
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
                    ['^react'],
                    // Third-party modules
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
    },
}
