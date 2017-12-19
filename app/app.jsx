var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!./styles/app.scss')

ReactDOM.render(
	<p>BoilerPlate 3 Project</p>,
	document.getElementById('app')
);