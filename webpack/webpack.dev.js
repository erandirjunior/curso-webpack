const { PATHS, webpack } = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./myplugin.js');

const devConfig = {
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
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MyPlugin({
			path: PATHS.build,
			message: 'HELLO !!!'
		})
	]
};

module.exports = devConfig;