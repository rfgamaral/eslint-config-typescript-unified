'use strict'

const defaultConfiguration = require('.')

module.exports = {
    ...defaultConfiguration,
    extends: [
        ...defaultConfiguration.extends.slice(0, 1),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...defaultConfiguration.extends.slice(1, defaultConfiguration.extends.length),
    ],
}
