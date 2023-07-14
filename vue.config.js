const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bandaumnikov.ru', // Замените на базовый URL вашего API
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' // Замените на фактический путь к конечной точке вашего API
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gotorestik/'
    : '/'
});
