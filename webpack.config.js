const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Use in development
  mode: 'development',
  devtool: 'inline-source-map',
  
  // Use in production
  // mode: 'production',
  
  watch: true,
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Output Management',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(csv|tsv)$/i,
      //   use: ['csv-loader'],
      // },
      // {
      //   test: /\.xml$/i,
      //   use: ['xml-loader'],
      // },
      // {
      //   test: /\.toml$/i,
      //   type: 'json',
      //   parser: {
      //     parse: toml.parse,
      //   },
      // },
      // {
      //   test: /\.yaml$/i,
      //   type: 'json',
      //   parser: {
      //     parse: yaml.parse,
      //   },
      // },
      // {
      //   test: /\.json5$/i,
      //   type: 'json',
      //   parser: {
      //     parse: json5.parse,
      //   },
      // },
    ],
  },
};
