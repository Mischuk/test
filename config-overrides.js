const TerserPlugin = require('terser-webpack-plugin');

function convertToBoolean(value = '') {
  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }

  return false;
}

module.exports = function override(config, env) {
  const BUILD_EXTERNALS = convertToBoolean(process.env.BUILD_EXTERNALS);

  console.log('BUILD_EXTERNALS', BUILD_EXTERNALS);

  if (env === 'production') {
    config.devtool = false;
    config.mode = 'production';
    config.entry = './src/entry.tsx';
    config.output = {
      ...config.output,
      filename: 'signwidget.js',
      library: 'signWidget',
      libraryTarget: 'umd',
      globalObject: 'this',
    };

    if (BUILD_EXTERNALS) {
      config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
      };
    }

    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [new TerserPlugin()],
      usedExports: true,
      mergeDuplicateChunks: true,
      removeAvailableModules: true,
      sideEffects: true,
    };
  }

  return config;
};
