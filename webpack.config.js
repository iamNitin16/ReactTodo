var webpack = require('webpack');
var path = require('path');

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
		})
	],
	output : {
		path : __dirname,
		filename : './public/bundle.js'
	},
	resolve : {
		alias : {
			Todo : path.resolve(__dirname, 'app/components/Todo'),
			TodoList : path.resolve(__dirname, 'app/components/TodoList'),
			TodoApp : path.resolve(__dirname, 'app/components/TodoApp'),
			AddTodo : path.resolve(__dirname, 'app/components/AddTodo')
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
	devtool : 'cheap-module-eval-source-map'
};