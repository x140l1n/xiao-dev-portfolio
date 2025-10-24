const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production' && fs.existsSync('.env.pro')) {
  dotenv.config({ path: '.env.pro' });
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: process.env.VUE_APP_PORT || 3000,
    headers: {
      'Content-Security-Policy': ''
    }
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
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/),
      new HtmlWebpackPlugin({
        inject: true,
        templateParameters: {
          cspMetaTag: `
            ${ process.env.NODE_ENV === 'production' ? `<meta http-equiv="Content-Security-Policy" content="
                default-src 'none';
                style-src 'self' 'unsafe-inline';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' recaptcha.net *.google.com www.gstatic.com www.googletagmanager.com;
                connect-src 'self' *.google-analytics.com recaptcha.net;
                img-src 'self' data:;
                font-src 'self' gstatic.com;
                frame-src *;
                base-uri 'self';
                form-action 'self';
                manifest-src 'self';
              ">` : '' }
          `
        },
        template: 'public/index.html'
      })
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