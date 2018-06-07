const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
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
	}
}