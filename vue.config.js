const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bandaumnikov.ru', // Replace with your API base URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' // Replace with the actual API endpoint path
        }
      }
    }
  }
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gotorestik/'
    : '/'
};
