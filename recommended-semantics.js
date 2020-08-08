'use strict';

const recommendedConfiguration = require('./recommended');

module.exports = {
    ...recommendedConfiguration,
    extends: [
        ...recommendedConfiguration.extends.slice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...recommendedConfiguration.extends.slice(3, recommendedConfiguration.extends.length),
    ],
};
