const eslintConfiguration = require('../eslint');

describe('ESLint', () => {
    test('configuration is exported correctly', () => {
        expect(eslintConfiguration).toEqual({
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: './tsconfig.json' },
            rules: { 'no-undef': 'off' },
        });
    });
});
