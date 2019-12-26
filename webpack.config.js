const path = require("path");

module.exports = {
  // ENTRY POINT
  entry: path.resolve(__dirname, "src/index.js"),

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || "development",

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, "src")
  }
};
