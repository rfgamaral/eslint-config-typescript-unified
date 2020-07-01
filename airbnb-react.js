'use strict';

const airbnbConfiguration = require('./airbnb');

module.exports = {
    ...airbnbConfiguration,
    extends: ['airbnb', ...airbnbConfiguration.extends.splice(1, 4), 'prettier/react'],
    rules: {
        ...airbnbConfiguration.rules,
        'import/extensions': [
            ...airbnbConfiguration.rules['import/extensions'].splice(0, 2),
            {
                ...airbnbConfiguration.rules['import/extensions'][0],
                jsx: 'never',
                tsx: 'never',
            },
        ],
    },
};
