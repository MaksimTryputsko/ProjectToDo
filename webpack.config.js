const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
         test: /\.js$/,
         use: 'babel-loader',
         exclude: /node_modules/,
        },
        {
         test: /\.(scss|css)$/,
         use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
         test: /\.(png|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
        },
        {
         test: /\.svg$/,
         type: 'asset/resource',
         generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
         },
        },
    ],
 },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
    }),
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: ['dist'],
            },
        },
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
  ],
  
  devServer: {
       watchFiles: path.join(__dirname, 'src'),
       port: 9000,
  },
  optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                ['svgo', { name: 'preset-default' }],
              ],
            },
          },
        }),
      ],
  },
  
};