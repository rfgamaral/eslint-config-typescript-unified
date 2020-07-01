'use strict';

const airbnbConfiguration = require('./airbnb');

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
        'import/exports-last': 'error',
        'import/group-exports': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/__{mocks,tests}__/**/*.{js,ts}',
                    '**/*.{spec,test}.{js,ts}',
                    '**/*.{config,setup}.{js,ts}',
                ],
            },
        ],
        'import/no-default-export': 'error',
        'import/no-deprecated': 'warn',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: ['object', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'warn',
    },
};
