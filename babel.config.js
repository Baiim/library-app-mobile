module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@pages': './src/pages',
                    '@redux': './src/redux',
                    '@routes': './src/routes',
                    '@utils': './src/utils',
                },
            },
        ],
    ],
};
