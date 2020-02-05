'use strict';

const airbnbConfiguration = require('./airbnb');

module.exports = {
    ...airbnbConfiguration,
    extends: [
        ...airbnbConfiguration.extends.splice(0, 2),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbConfiguration.extends,
    ],
};