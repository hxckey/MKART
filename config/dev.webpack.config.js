const config = require('./webpack.config.js');
config.devServer = {
  historyApiFallback: true,
  port: 8080, //use this port for the server
  liveReload: true, // refresh the browser when changes are saved
  open: true // opens the project in the browser when the server starts
};

config.devtool = 'inline-source-map';
module.exports = config;
