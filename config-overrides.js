const AssetManifestPlugin = require('@do/seashell-bridge/AssetManifestPlugin');

module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    config.plugins.push(new AssetManifestPlugin());
    // config.module.rules.push(      {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-react'],
    //         plugins: [require.resolve('@do/seashell-bridge/BridgeAliasPlugin')],
    //       },
    //     },
    //   ],
    // })
    return config;
  },
};