module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['import', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                'no-inline-styles': false,
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@pages': './src/pages',
                    '@redux': './src/redux',
                    '@routes': './src/routes',
                    '@utils': './src/utils',
                },
            },
        },
    },
};
