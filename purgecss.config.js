module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/css/*.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
