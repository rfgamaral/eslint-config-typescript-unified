'use strict';

const recommendedConfiguration = require('./recommended');

module.exports = {
    ...recommendedConfiguration,
    extends: [
        ...recommendedConfiguration.extends.splice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...recommendedConfiguration.extends,
    ],
};
