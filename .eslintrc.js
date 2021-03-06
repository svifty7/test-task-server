module.exports = {
    root: true,
    env: {
        browser: true
    },
    globals: {
        expect: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: [
        'airbnb-base'
    ],
    rules: {
        'no-new': [
            0
        ],
        'max-len': [
            1,
            120
        ],
        'consistent-return': [
            1
        ],
        'comma-dangle': ['error', {
            arrays: 'only-multiline',
            objects: 'only-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
            functions: 'never'
        }],
        'arrow-parens': [
            2,
            'as-needed'
        ],
        'object-curly-spacing': ['error', 'always', {
            objectsInObjects: false
        }],
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],
        'import/extensions': [
            0
        ],
        'import/no-extraneous-dependencies': [
            0
        ],
        'import/no-unresolved': [
            0
        ],
        'import/no-webpack-loader-syntax': [
            0
        ],
        'indent': [
            2,
            4, {
                SwitchCase: 1,
                ignoredNodes: [
                    'TemplateLiteral'
                ]
            }
        ],
        'generator-star-spacing': [
            0
        ],
        'no-await-in-loop': [
            0
        ],
        'no-nested-ternary': [
            1
        ],
        'no-return-assign': [
            1
        ],
        'object-property-newline': [
            0
        ],
        'no-console': [
            0
        ],
        'no-mixed-operators': [
            0
        ],
        'no-bitwise': [
            0
        ],
        'no-plusplus': [
            0
        ],
        'no-restricted-syntax': [
            2,
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'linebreak-style': 'off',
        'template-curly-spacing': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state'
                ]
            }
        ],
        'semi': 'off'
    }
};
