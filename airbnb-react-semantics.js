'use strict';

const airbnbReactConfiguration = require('./airbnb-react');

module.exports = {
    ...airbnbReactConfiguration,
    extends: [
        ...airbnbReactConfiguration.extends.slice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbReactConfiguration.extends.slice(3, airbnbReactConfiguration.extends.length),
    ],
};
