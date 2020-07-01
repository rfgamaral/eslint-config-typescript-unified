'use strict';

const airbnbReactHooksConfiguration = require('./airbnb-react-hooks');

module.exports = {
    ...airbnbReactHooksConfiguration,
    extends: [
        ...airbnbReactHooksConfiguration.extends.splice(0, 4),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbReactHooksConfiguration.extends,
    ],
};
