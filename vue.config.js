const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    port: 3000
  },
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
          to: path.resolve(__dirname, 'dist/api/'),
          noErrorOnMissing: false
        }
      ])
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
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('scss')
      .oneOf('normal')
      .use('sass-loader')
      .loader('sass-loader')
      .tap((options) => {
        return {
          ...options,
          sassOptions: {
            quietDeps: true
          }
        };
      });
  }
};
