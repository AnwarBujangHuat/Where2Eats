module.exports = {
  // ... some other config
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // ... some other plugins
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        alias: {
          images: 'app/assets/images',
          lottie: 'app/assets/lottie',
          atoms: 'app/components/atoms',
          molecules: 'app/components/molecules',
          config: 'app/configs',
          assets: 'app/assets',
          model: 'app/model',
          navigation: 'app/navigation',
          screens: 'app/screens',
          store: 'app/store',
        },
      },
    ],
  ],
};
