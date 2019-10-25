'use strict';

const airbnbReactConfiguration = require('./airbnb-react');

module.exports = {
    ...airbnbReactConfiguration,
    extends: [
        ...airbnbReactConfiguration.extends.splice(0, 1),
        'airbnb/hooks',
        ...airbnbReactConfiguration.extends,
    ],
};
