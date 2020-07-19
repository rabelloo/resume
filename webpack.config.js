const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
          { loader: path.resolve('scripts/web-component.js') },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }],
    }),
  ],
  serve: {
    content: path.resolve(__dirname, 'dist'),
    port: 4200,
    clipboard: false,
    hmr: true,
    // http2: true,   // needs an SSL key configured
    open: true,
  },
};
