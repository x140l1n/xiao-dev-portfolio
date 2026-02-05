const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production' && fs.existsSync('.env.pro')) {
  const envConfig = dotenv.parse(fs.readFileSync('.env.pro'));
  Object.keys(envConfig).forEach((key) => {
    if (key.startsWith('VUE_APP_')) {
      process.env[key] = envConfig[key];
    }
  });
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: process.env.VUE_APP_PORT || 3000,
    headers: {
      'Content-Security-Policy': ''
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].templateParameters = {
        cspMetaTag: `
          ${ process.env.NODE_ENV === 'production' ? `<meta http-equiv="Content-Security-Policy" content="
              default-src 'none';
              style-src 'self' 'unsafe-inline';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' recaptcha.net *.google.com www.gstatic.com www.googletagmanager.com;
              connect-src 'self' *.google-analytics.com recaptcha.net xiaojl.dev;
              img-src 'self' data:;
              font-src 'self' gstatic.com;
              frame-src *;
              base-uri 'self';
              form-action 'self';
              manifest-src 'self';
            ">` : '' }
        `
      };
      return args;
    });
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
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/)
    ],
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              if (!module.context) return 'vendors';
              const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match) return 'vendors';
              const packageName = match[1].replace('@', '');
              return `vendor.${packageName}`;
            }
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        api: 'modern-compiler',
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import']
        }
      }
    }
  }
});
