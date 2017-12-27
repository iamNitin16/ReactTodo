var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
		}),
		new webpack.DefinePlugin({
			'process.env' : {
				NODE_ENV : JSON.stringify(process.env.NODE_ENV),
				API_KEY : JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN : JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL : JSON.stringify(process.env.DATABASE_URL),
				PROJECT_ID : JSON.stringify(process.env.PROJECT_ID),
				STORAGE_BUCKET : JSON.stringify(process.env.STORAGE_BUCKET),
				MESSANGING_SENDER_ID : JSON.stringify(process.env.MESSANGING_SENDER_ID)
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