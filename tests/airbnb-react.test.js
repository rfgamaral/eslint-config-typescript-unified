const airbnbReactConfiguration = require('../airbnb-react');

describe('Airbnb (React)', () => {
    test('configuration is exported correctly', () => {
        expect(airbnbReactConfiguration).toEqual({
            extends: [
                'airbnb',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
                'prettier/@typescript-eslint',
                'prettier/react',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: './tsconfig.json' },
            rules: { 'no-undef': 'off' },
            settings: {
                'import/extensions': ['.js', '.mjs', '.ts', '.jsx', '.tsx'],
                'import/ignore': [
                    'node_modules',
                    '\\.d\\.ts$',
                    '\\.(coffee|scss|css|less|hbs|svg|json)$',
                ],
                'import/resolver': { typescript: { alwaysTryTypes: false } },
            },
        });
    });
});
