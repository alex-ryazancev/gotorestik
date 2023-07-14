const { defineConfig } = require('@vue/cli-service');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bandaumnikov.ru',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gotorestik/'
    : '/'
};
