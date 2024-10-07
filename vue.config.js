const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    port: process.env.VUE_APP_PORT || 3000
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.resolve(__dirname),
        '@src': path.resolve(__dirname, 'src/'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@programs': path.resolve(__dirname, 'src/programs/'),
        '@svg': path.resolve(__dirname, 'src/svg/')
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'api/'),
          to: path.resolve(__dirname, 'dist/api/')
        },
        {
          from: path.resolve(__dirname, 'logs/'),
          to: path.resolve(__dirname, 'dist/logs/')
        }
      ]),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/)
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `vendor.${packageName}`;
            }
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true
                }
              }
            }
          ]
        }
      ]
    }
  }
};