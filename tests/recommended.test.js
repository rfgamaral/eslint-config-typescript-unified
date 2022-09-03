const recommendedConfiguration = require('../recommended')

describe('Recommended', () => {
    test('configuration is exported correctly', () => {
        expect(recommendedConfiguration).toEqual({
            extends: [
                'airbnb-base',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: './tsconfig.json' },
            rules: {
                '@typescript-eslint/explicit-function-return-type': [
                    'warn',
                    {
                        allowExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ],
                '@typescript-eslint/no-unused-vars': 'off',
                'no-undef': 'off',
                'import/exports-last': 'error',
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        mjs: 'never',
                        ts: 'never',
                    },
                ],
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
                        groups: [
                            'object',
                            'builtin',
                            'external',
                            'internal',
                            'parent',
                            'sibling',
                            'index',
                        ],
                        'newlines-between': 'always',
                    },
                ],
                'import/prefer-default-export': 'off',
                'prettier/prettier': 'warn',
            },
            settings: {
                'import/ignore': [
                    'node_modules',
                    '\\.d\\.ts$',
                    '\\.(coffee|scss|css|less|hbs|svg|json)$',
                ],
                'import/resolver': {
                    typescript: {
                        alwaysTryTypes: false,
                    },
                },
            },
        })
    })
})
