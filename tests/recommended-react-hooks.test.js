const recommendedReactHooksConfiguration = require('../recommended-react-hooks')

describe('Airbnb (React + Hooks)', () => {
    test('configuration is exported correctly', () => {
        expect(recommendedReactHooksConfiguration).toEqual({
            extends: [
                'airbnb',
                'airbnb/hooks',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            rules: {
                'no-undef': 'off',
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        mjs: 'never',
                        ts: 'never',
                        jsx: 'never',
                        tsx: 'never',
                    },
                ],
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
                            [expect.stringContaining('|process|')],
                            ['^\\u0000'],
                            ['^\\u0000@?\\w.*\\.(s?css|less)$'],
                            ['^\\u0000\\..*\\.(s?css|less)$'],
                            ['^react'],
                            ['^@?\\w'],
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            ['^.*\\.module\\.css$'],
                            ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
                        ],
                    },
                ],
                'simple-import-sort/exports': 'warn',
                'react/jsx-filename-extension': [
                    'error',
                    {
                        extensions: ['.jsx', '.tsx'],
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
