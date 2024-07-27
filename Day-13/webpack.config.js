// Task 8 (Using Webpack and webpack CLI)

const path = require("path");

module.exports = {
  entry: "./imports.mjs",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        /* use: {
          loader: "babel-loader",
        },*/
      },
    ],
  },
};
