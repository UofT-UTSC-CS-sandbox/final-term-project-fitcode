const path = require("path");

module.exports = {
  entry: "/src/index.jsx",
  output: { path: path.resolve(__dirname, "../fitQuest/core/static/js") },
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
        test: /.css$/, // Use CSS loader for CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".js", ".jsx"],
  },
};