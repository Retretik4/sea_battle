module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": ["airbnb-base", "plugin:sonarjs/recommended", "plugin:jsdoc/recommended"],
    "plugins": ["sonarjs", "jsdoc"],
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
        "quotes": ["error", "double"],
        //eslint default
        "import/prefer-default-export": "off",
        "import/extensions": ['error', 'always', { ignorePackages: true }],
        "indent": ["error", 4],
        "arrow-parens": ["error", "as-needed"],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "lines-between-class-members":["error", "always", { "exceptAfterSingleLine": true }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        // jsdoc
        "jsdoc/require-returns-description": 0,
        "jsdoc/require-param-description": 0,
    },
};
