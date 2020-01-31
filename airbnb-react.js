'use strict';

const airbnbConfiguration = require('./airbnb');

module.exports = {
    ...airbnbConfiguration,
    extends: ['airbnb', ...airbnbConfiguration.extends.splice(1, 3), 'prettier/react'],
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
    settings: {
        ...airbnbConfiguration.settings,
        'import/extensions': [
            ...airbnbConfiguration.settings['import/extensions'],
            ...['.jsx', '.tsx'],
        ],
        'import/resolver': {
            ...airbnbConfiguration.settings['import/resolver'],
            node: {
                ...airbnbConfiguration.settings['import/resolver'].node,
                extensions: [
                    ...airbnbConfiguration.settings['import/resolver'].node.extensions,
                    '.jsx',
                    '.tsx',
                ],
            },
        },
    },
};
