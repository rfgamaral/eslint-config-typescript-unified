'use strict'

const recommendedReactHooksConfiguration = require('./recommended-react-hooks')

module.exports = {
    ...recommendedReactHooksConfiguration,
    extends: [
        ...recommendedReactHooksConfiguration.extends.slice(0, 4),
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...recommendedReactHooksConfiguration.extends.slice(
            4,
            recommendedReactHooksConfiguration.extends.length,
        ),
    ],
}
