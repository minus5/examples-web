const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { 
        test: [path.resolve('src')],
        loader: 'babel-loader', 
        query: { 
          presets: ['es2015', 'react', 'stage-3'],
          plugins: ['transform-runtime', 'babel-plugin-transform-class-properties'],
          cacheDirectory: true 
        } 
      },
    ]
  },
  entry: {
    "index": "./src/index",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ]  
};
