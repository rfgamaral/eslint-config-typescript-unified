'use strict'

const recommendedConfiguration = require('./recommended')

module.exports = {
    ...recommendedConfiguration,
    extends: [
        'airbnb',
        ...recommendedConfiguration.extends.slice(1, recommendedConfiguration.extends.length),
    ],
    rules: {
        ...recommendedConfiguration.rules,
        'import/extensions': [
            ...recommendedConfiguration.rules['import/extensions'].slice(0, 2),
            {
                ...recommendedConfiguration.rules['import/extensions'][2],
                jsx: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
    },
}
