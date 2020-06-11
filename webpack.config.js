const merge = require("webpack-merge");

const publicPath = 'public';
const parts = require("./webpack/webpack.parts");
const commons = require("./webpack/webpack.common");

const PATHS = {
  app: __dirname,
  build: `${__dirname}/${publicPath}`,
  fixedPath: '/'
};
const productionConfig = merge([]);
const commonConfig = merge([commons.config()]);
const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  console.log('============= mode => ' + mode + ' =============');
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
