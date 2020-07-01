'use strict';

const recommendedReactConfiguration = require('./recommended-react');

module.exports = {
    ...recommendedReactConfiguration,
    extends: [
        ...recommendedReactConfiguration.extends.splice(0, 1),
        'airbnb/hooks',
        ...recommendedReactConfiguration.extends,
    ],
};
