const defaultConfiguration = require('../')

describe('Default', () => {
    test('configuration is exported correctly', () => {
        expect(defaultConfiguration).toEqual({
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: './tsconfig.json' },
            rules: { 'no-undef': 'off' },
        })
    })
})
