const recommendedSemanticsConfiguration = require('../recommended-semantics')

describe('Airbnb', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(recommendedSemanticsConfiguration).toEqual({
                extends: [
                    'airbnb-base',
                    'plugin:import/recommended',
                    'plugin:import/typescript',
                    'plugin:@typescript-eslint/recommended-requiring-type-checking',
                    'plugin:@typescript-eslint/recommended',
                    'plugin:prettier/recommended',
                ],
                parser: '@typescript-eslint/parser',
                parserOptions: {
                    project: './tsconfig.json',
                },
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
                    'import/extensions': [
                        'error',
                        'ignorePackages',
                        {
                            js: 'never',
                            mjs: 'never',
                            ts: 'never',
                        },
                    ],
                    'import/first': 'error',
                    'import/newline-after-import': 'error',
                    'import/no-default-export': 'error',
                    'import/no-duplicates': 'error',
                    'import/no-named-as-default': 'error',
                    'import/no-named-as-default-member': 'error',
                    'no-undef': 'off',
                    'prettier/prettier': 'warn',
                    'simple-import-sort/exports': 'warn',
                    'simple-import-sort/imports': [
                        'warn',
                        {
                            groups: [
                                [expect.stringContaining('|process|')],
                                ['^\\u0000'],
                                ['^\\u0000@?\\w.*\\.(s?css|less)$'],
                                ['^\\u0000\\..*\\.(s?css|less)$'],
                                ['^@?\\w'],
                                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                                ['^.*\\.module\\.css$'],
                                ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
                            ],
                        },
                    ],
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
})
