module.exports = {
  publicPath: '/epicmax/',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
}
