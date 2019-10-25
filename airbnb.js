'use strict';

const defaultConfiguration = require('.');

module.exports = {
    ...defaultConfiguration,
    extends: ['airbnb-base', ...defaultConfiguration.extends],
    settings: {
        'import/extensions': ['.js', '.mjs', '.ts'],
        'import/ignore': ['node_modules', '\\.d\\.ts$', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
        'import/resolver': {
            typescript: {
                alwaysTryTypes: false,
            },
        },
    },
};
