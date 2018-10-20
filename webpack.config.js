const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // Entry point for your application
  entry: './app/index.js',

  module: {
    rules: [

      // loader for js files invoking the transpiler from ES6 to ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // loader for html files
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },

      // loader for image files
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },

      // loader for SCSS preprocessor
      {
        test: /\.scss$/,
        use: [
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // fallback to style-loader in development
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  // needed for react-router on development server 
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};