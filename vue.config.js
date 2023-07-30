const { defineConfig } = require('@vue/cli-service');

const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  indexPath: 'index.html',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    subpage: 'src/subpage/main.js',
  },
  lintOnSave: 'warning',
  transpileDependencies: true,
  productionSourceMap: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.configFile = path.resolve(__dirname, '.eslintrc.js');
        return options;
      });
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [require('autoprefixer')],
      },
    },
  },
});
