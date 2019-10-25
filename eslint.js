'use strict';

const defaultConfiguration = require('.');

module.exports = {
    ...defaultConfiguration,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        ...defaultConfiguration.extends,
    ],
};
