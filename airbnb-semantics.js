'use strict'

const airbnbConfiguration = require('./airbnb')

module.exports = {
    ...airbnbConfiguration,
    extends: [
        ...airbnbConfiguration.extends.slice(0, 3),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbConfiguration.extends.slice(3, airbnbConfiguration.extends.length),
    ],
}
