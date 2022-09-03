'use strict'

const eslintConfiguration = require('./eslint')

module.exports = {
    ...eslintConfiguration,
    extends: [
        ...eslintConfiguration.extends.slice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...eslintConfiguration.extends.slice(3, eslintConfiguration.extends.length),
    ],
}
