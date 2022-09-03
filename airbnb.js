'use strict'

const defaultConfiguration = require('.')

module.exports = {
    ...defaultConfiguration,
    extends: [
        'airbnb-base',
        'plugin:import/recommended',
        'plugin:import/typescript',
        ...defaultConfiguration.extends,
    ],
    rules: {
        ...defaultConfiguration.rules,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                ts: 'never',
            },
        ],
    },
    settings: {
        'import/ignore': ['node_modules', '\\.d\\.ts$', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
        'import/resolver': {
            typescript: {
                alwaysTryTypes: false,
            },
        },
    },
}
