var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				include: __dirname
			},
			{
				test: /\.sass/,
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
				include: __dirname
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
				include: __dirname
			},
			{
				test: /\.less/,
				loader: 'style-loader!css-loader!less-loader',
				include: __dirname
			},
			{
				test: /\.styl/,
				loader: 'style-loader!css-loader!stylus-loader',
				include: __dirname
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=8192&name=[path][name].[ext]',
				include: __dirname
			}
		]
	}
};
