const path = require('path');
const webpack = require('webpack');
const pugIncludeGlob = require('pug-include-glob');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (NODE_ENV) => {
  const pluginsOptions = [
    new StyleLintPlugin()
  ];

  const config = {
    entry: './src/autoload.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          enforce: "pre",
          test: /\.pug$/,
          exclude: /node_modules/,
          loader: "pug-lint-loader",
          options: require('./.pug-lintrc.js'),
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            plugins:[pugIncludeGlob()]
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.json']
    },
    plugins: pluginsOptions,
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map'
  };

  if (NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }

  return config;
};
