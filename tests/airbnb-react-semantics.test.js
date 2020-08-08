const airbnbReactSemanticsConfiguration = require('../airbnb-react-semantics');

describe('Airbnb (React)', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(airbnbReactSemanticsConfiguration).toEqual({
                extends: [
                    'airbnb',
                    'plugin:import/typescript',
                    'plugin:@typescript-eslint/recommended',
                    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
});
