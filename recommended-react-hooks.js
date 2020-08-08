'use strict';

const recommendedReactConfiguration = require('./recommended-react');

module.exports = {
    ...recommendedReactConfiguration,
    extends: [
        ...recommendedReactConfiguration.extends.slice(0, 1),
        'airbnb/hooks',
        ...recommendedReactConfiguration.extends.slice(
            1,
            recommendedReactConfiguration.extends.length
        ),
    ],
};
