'use strict'

const airbnbReactHooksConfiguration = require('./airbnb-react-hooks')

module.exports = {
    ...airbnbReactHooksConfiguration,
    extends: [
        ...airbnbReactHooksConfiguration.extends.slice(0, 4),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...airbnbReactHooksConfiguration.extends.slice(
            4,
            airbnbReactHooksConfiguration.extends.length,
        ),
    ],
}
