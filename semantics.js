'use strict';

const defaultConfiguration = require('.');

module.exports = {
    ...defaultConfiguration,
    extends: [
        ...defaultConfiguration.extends.splice(0, 1),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...defaultConfiguration.extends,
    ],
};
