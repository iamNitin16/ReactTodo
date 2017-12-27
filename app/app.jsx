var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from './firebase/index';
import router from './router/index';

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(actions.login(user.uid));
		hashHistory.push('/todos');
	}
	else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
	}
});

store.dispatch(actions.startAddTodos());

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!./styles/app.scss')

ReactDOM.render(
	<Provider store={store}>
		{router}	
	</Provider>,
	document.getElementById('app')
);