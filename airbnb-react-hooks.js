'use strict'

const airbnbReactConfiguration = require('./airbnb-react')

module.exports = {
    ...airbnbReactConfiguration,
    extends: [
        ...airbnbReactConfiguration.extends.slice(0, 1),
        'airbnb/hooks',
        ...airbnbReactConfiguration.extends.slice(1, airbnbReactConfiguration.extends.length),
    ],
}
