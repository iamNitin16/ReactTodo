var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
	config.set({
		browsers : ['Firefox'],
		singleRun : true,
		frameworks : ['mocha'],
		files : [
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/foundation-sites/dist/foundation.min.js',
			'app/tests/**/*.test.jsx'
		],
		preprocessors : {
			'app/tests/**/*.test.jsx' : ['webpack', 'sourcemap']
		},
		reporters : ['mocha'],
		client : {
			mocha : {
				timeout : '10000'
			}
		},
		webpack : webpackConfig,
		webpackServer : {
			noInfo : true
		}
	});
};