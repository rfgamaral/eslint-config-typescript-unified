'use strict';

const airbnbConfiguration = require('./airbnb');

module.exports = {
    ...airbnbConfiguration,
    extends: ['airbnb', ...airbnbConfiguration.extends.splice(1, 3), 'prettier/react'],
    settings: {
        ...airbnbConfiguration.settings,
        'import/extensions': [
            ...airbnbConfiguration.settings['import/extensions'],
            ...['.jsx', '.tsx'],
        ],
    },
};
