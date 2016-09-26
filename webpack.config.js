var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.js',
		home: './home_page.js',
		contact: './contact_page.js',
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "[name].js"
	},

	plugins: [
		commonsPlugin,
		new extractTextPlugin('styles.css')
	],

	devServer: {
		contentBase: 'public'
	},

	watch: true,

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: extractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: extractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10'
			},
		]
	},
	resolve: {
		extensions: ['', '.js', '.es6']
	}
};