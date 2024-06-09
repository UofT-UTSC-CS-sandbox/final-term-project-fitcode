const path = require("path");

module.exports = {
  entry: "/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "../fitQuest/core/static/js"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // injects CSS into the DOM
          'css-loader' // interprets @import and url() like import/require() and will resolve them
        ]
      }
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".js", ".jsx"],
  },
};
