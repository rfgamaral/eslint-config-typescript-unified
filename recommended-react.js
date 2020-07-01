'use strict';

const recommendedConfiguration = require('./recommended');

module.exports = {
    ...recommendedConfiguration,
    extends: ['airbnb', ...recommendedConfiguration.extends.splice(1, 4), 'prettier/react'],
    rules: {
        ...recommendedConfiguration.rules,
        'import/extensions': [
            ...recommendedConfiguration.rules['import/extensions'].splice(0, 2),
            {
                ...recommendedConfiguration.rules['import/extensions'][0],
                jsx: 'never',
                tsx: 'never',
            },
        ],
    },
};
