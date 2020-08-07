const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  entry: {
    main: './src/app.ts'
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [new CheckerPlugin()],
};
