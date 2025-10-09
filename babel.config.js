module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'module-resolver',
      {
        root: '.',
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@hooks' : './src/hooks',
          '@routes' : './src/routes',
          '@screens' : './src/screens',
          '@theme'  : './src/theme',
        },
      },
    ],
  ],
};