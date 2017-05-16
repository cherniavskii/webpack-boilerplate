var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: [require('babel-plugin-transform-object-rest-spread')]
					}
				}
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: 'index.html' }
		])
	],
	devServer: {
		publicPath: "/",
		contentBase: "./src",
		port: 8080,
		open: true
	}
};
