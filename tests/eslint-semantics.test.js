const eslintSemanticsConfiguration = require('../eslint-semantics');

describe('ESLint', () => {
    describe('with semantics rules', () => {
        test('configuration is exported correctly', () => {
            expect(eslintSemanticsConfiguration).toEqual({
                extends: [
                    'eslint:recommended',
                    'plugin:@typescript-eslint/eslint-recommended',
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
