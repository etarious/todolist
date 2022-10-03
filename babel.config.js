module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      'macros',
      "@babel/plugin-transform-flow-strip-types",
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-transform-strict-mode",
      "@babel/plugin-transform-runtime"
    ]
  }
}
