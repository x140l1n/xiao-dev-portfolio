module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], '@babel/plugin-proposal-optional-chaining']
};
