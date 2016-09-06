var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./index.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.s?css$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }
    ]
  }
};
