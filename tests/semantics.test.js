const defaultSemanticsConfiguration = require('../semantics');

describe('Default', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(defaultSemanticsConfiguration).toEqual({
                extends: [
                    'plugin:@typescript-eslint/recommended',
                    'plugin:@typescript-eslint/recommended-requiring-type-checking',
                    'plugin:prettier/recommended',
                ],
                parser: '@typescript-eslint/parser',
                parserOptions: { project: './tsconfig.json' },
                rules: { 'no-undef': 'off' },
            });
        });
    });
});
