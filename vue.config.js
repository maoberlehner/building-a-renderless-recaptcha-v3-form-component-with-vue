const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  devServer: {
    proxy: {
      '/.netlify': {
        target: `http://localhost:9000`,
        pathRewrite: { '^/.netlify/functions': `` },
      },
    },
  },
  lintOnSave: false,
};
