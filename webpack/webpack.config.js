const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./myplugin.js');

const PATHS = {
	src: path.join(__dirname, '../src'),
	build: path.resolve(__dirname, '../dist')
}

module.exports = {
	entry: {
		bundle: `${PATHS.src}/index.js`,
		//app: `${PATHS.src}/index2.js`
	},
	output: {
		filename: '[name].[hash:5].js',
		//filename: '[name].js',
		path: PATHS.build
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: PATHS.build,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
				        /*minimize: true,
				        removeComments: false,
				        collapseWhitespace: false*/
				    }
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'TW WebPack',
			template: `${PATHS.src}/index.html`
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MyPlugin({
			path: PATHS.build,
			message: 'HELLO !!!'
		})
	]
}