const config = require('./webpack.config.js');
config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true,
  open: true // opens the project in the browser when the server starts
};

config.devtool = 'inline-source-map';
module.exports = config;
