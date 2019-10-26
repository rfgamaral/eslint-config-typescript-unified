const airbnbReactHooksSemanticsConfiguration = require('../airbnb-react-hooks-semantics');

describe('Airbnb (React + Hooks)', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(airbnbReactHooksSemanticsConfiguration).toEqual({
                extends: [
                    'airbnb',
                    'airbnb/hooks',
                    'plugin:@typescript-eslint/recommended',
                    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
});