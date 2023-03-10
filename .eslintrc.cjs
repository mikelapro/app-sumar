// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4], // Indentación con 4 espacios.
        'linebreak-style': ['off', 'windows'],
        'quotes': ['warn', 'single'], // Comilla simple para strings.
        'semi': ['error', 'always'], // Requiere ;.
        'space-in-parens': ['warn', 'always'] // Espacio entre parentesis.
    }

};
