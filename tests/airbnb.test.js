const airbnbConfiguration = require('../airbnb');

describe('Airbnb', () => {
    test('configuration is exported correctly', () => {
        expect(airbnbConfiguration).toEqual({
            extends: [
                'airbnb-base',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
                'prettier/@typescript-eslint',
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
                    },
                ],
            },
            settings: {
                'import/extensions': ['.js', '.mjs', '.ts'],
                'import/ignore': [
                    'node_modules',
                    '\\.d\\.ts$',
                    '\\.(coffee|scss|css|less|hbs|svg|json)$',
                ],
                'import/resolver': {
                    node: {
                        extensions: ['.mjs', '.js', '.json', '.ts'],
                    },
                    typescript: { alwaysTryTypes: false },
                },
            },
        });
    });
});
