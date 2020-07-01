'use strict';

const recommendedReactConfiguration = require('./recommended-react');

module.exports = {
    ...recommendedReactConfiguration,
    extends: [
        ...recommendedReactConfiguration.extends.splice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...recommendedReactConfiguration.extends,
    ],
};
