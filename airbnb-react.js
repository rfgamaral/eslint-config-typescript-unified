'use strict'

const airbnbConfiguration = require('./airbnb')

module.exports = {
    ...airbnbConfiguration,
    extends: [
        'airbnb',
        ...airbnbConfiguration.extends.slice(1, airbnbConfiguration.extends.length),
    ],
    rules: {
        ...airbnbConfiguration.rules,
        'import/extensions': [
            ...airbnbConfiguration.rules['import/extensions'].slice(0, 2),
            {
                ...airbnbConfiguration.rules['import/extensions'][2],
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
