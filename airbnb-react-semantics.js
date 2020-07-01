'use strict';

const airbnbReactConfiguration = require('./airbnb-react');

module.exports = {
    ...airbnbReactConfiguration,
    extends: [
        ...airbnbReactConfiguration.extends.splice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbReactConfiguration.extends,
    ],
};
