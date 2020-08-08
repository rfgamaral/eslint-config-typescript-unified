const recommendedReactHooksConfiguration = require('../recommended-react-hooks');

describe('Airbnb (React + Hooks)', () => {
    test('configuration is exported correctly', () => {
        expect(recommendedReactHooksConfiguration).toEqual({
            extends: [
                'airbnb',
                'airbnb/hooks',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
                'prettier/@typescript-eslint',
                'prettier/react',
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
                        jsx: 'never',
                        tsx: 'never',
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
        });
    });
});
