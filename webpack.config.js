const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // モードの設定
  mode: 'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader',
             'css-loader'
                /*
             {  loader: 'css-loader',
                options: {//modules: true,
                  modules: {
                    localIdentName: '[name]',
                  },
                  importLoaders: 1
                }
             },
             'postcss-loader' */
        ]
      }
    ]
  },

  // エントリーポイントの設定
  entry: {
    home: `./src/home.js`,
    //jq: `./src/jq.js`,
  },

  // ファイルの出力設定
  output: {
    // 出力するファイル名
    filename: "[name].js",

    //  出力先のパス
    // path: path.join(__dirname, 'dist')
    path: path.join(__dirname, 'public/assets')
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   scriptLoading: 'defer',
    // }),
    /*
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
*/
  ],

};
