const airbnbSemanticsConfiguration = require('../airbnb-semantics')

describe('Airbnb', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(airbnbSemanticsConfiguration).toEqual({
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
