const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prodConfig = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							/*options: {
								modules: true,
								sourceMap: true
							}*/
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style-bundle.css')
	]
};

module.exports = prodConfig;