import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';


export default {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
      images: path.resolve(__dirname, './src/images')
    },
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  // controls if and how source maps are generated (https://webpack.js.org/configuration/devtool/#devtool)
  devtool: 'source-map',
  entry: [
    // must be first entry to properly set public path
    // './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    '@babel/polyfill',
    './src/index'
  ],
  // instructs webpack to target a specific environment (https://webpack.js.org/configuration/target/#target)
  target: 'web',
  output: {
    path: `${__dirname}/src`, // note: physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('development') },
    }),
    new webpack.HotModuleReplacementPlugin(),
    // generate index.html containing references to generated bundles (https://github.com/jantimon/html-webpack-plugin)
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/images/favicon.ico',
      minify: { removeComments: true, collapseWhitespace: true },
      inject: true
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader', options: { retainLines: true } }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'url-loader', options: { limit: 10000, mimetype: 'image/svg+xml' } }],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, modules: true, localIdentName: '[local]___[hash:base64:5]' }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [require('autoprefixer')], }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true, includePaths: [path.resolve(__dirname, 'src', 'scss')] }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/index.scss'),
              ]
            },
          }
        ],
        exclude: '/node_modules/',
      }
    ]
  }
};
