module.exports = {
  // ... some other config
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // ... some other plugins
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          'images': './assets/images',
          'lottie': './assets/lottie',
          'atoms': './components/atoms',
          'molecules': './components/molecules',
          'config': './configs',
          'model': './model',
          'navigation': './navigation',
          'screens': './screens',
          'store': './store',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
