const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your JavaScript application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: 'babel-loader', // Use babel-loader for transpiling JavaScript
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for handling CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // Generates an HTML file with <script> injected
      template: './public/index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML filename
    }),
  ],
  devtool: 'source-map', // Generate source maps for debugging
  devServer: {
    contentBase: './dist', // Serve files from the 'dist' directory
    port: 8080, // Port number
  },
};
