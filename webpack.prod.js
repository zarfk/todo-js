const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const miniCssExtractPlugin    = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const  TerserPlugin           = require("terser-webpack-plugin" ) ;
const path                    = require("path");

module.exports = {

    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin()],
        minimizer: [ new optimizeCssAssetsPlugin() ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                 test: /styles\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            filename: './index.html'
        }),
        new miniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
            }),
    ]

}

