const airbnbReactHooksConfiguration = require('../airbnb-react-hooks');

describe('Airbnb (React + Hooks)', () => {
    test('configuration is exported correctly', () => {
        expect(airbnbReactHooksConfiguration).toEqual({
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
