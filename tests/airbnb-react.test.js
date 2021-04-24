const airbnbReactConfiguration = require('../airbnb-react');

describe('Airbnb (React)', () => {
    test('configuration is exported correctly', () => {
        expect(airbnbReactConfiguration).toEqual({
            extends: [
                'airbnb',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: './tsconfig.json' },
            rules: {
                'no-undef': 'off',
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        mjs: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
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
