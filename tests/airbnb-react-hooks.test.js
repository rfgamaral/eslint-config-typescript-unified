const airbnbReactHooksConfiguration = require('../airbnb-react-hooks')

describe('Airbnb (React + Hooks)', () => {
    test('configuration is exported correctly', () => {
        expect(airbnbReactHooksConfiguration).toEqual({
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
