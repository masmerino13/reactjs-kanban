module.exports = {
  reactRefresh: true,
  entry: 'src/index',
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        additionalData: `@import "@/variables.scss";`
      }
    }
  }
}