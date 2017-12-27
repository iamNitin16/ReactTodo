var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry : [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals :{
		jquery : 'jQuery'
	},
	plugins : [
		new webpack.ProvidePlugin({
			'$' : 'jquery',
			'jQuery' : 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor : {
				warnings : false
			}
		})
	],
	output : {
		path : __dirname,
		filename : './public/bundle.js'
	},
	resolve : {
		alias : {
			app : 'app',
			Todo : path.resolve(__dirname, 'app/components/Todo'),
			TodoList : path.resolve(__dirname, 'app/components/TodoList'),
			TodoApp : path.resolve(__dirname, 'app/components/TodoApp'),
			AddTodo : path.resolve(__dirname, 'app/components/AddTodo'),
			TodoSearch : path.resolve(__dirname, 'app/components/TodoSearch'),
			TodoAPI : path.resolve(__dirname, 'app/api/TodoAPI'),
			actions : path.resolve(__dirname, 'app/actions/actions'),
			reducers : path.resolve(__dirname, 'app/reducers/reducers'),
			configureStore : path.resolve(__dirname, 'app/store/configureStore')
		},
		extensions : ['.js', '.jsx']
	},
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				query : {
					presets : ['react', 'es2015', 'stage-0']
				},
				test : /\.jsx?$/,
				exclude : /(node_modules|bewer_components)/
			}
		]
	},
	devtool : process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};