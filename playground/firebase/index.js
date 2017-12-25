import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBC-eYzxGV1rJGELv7EHIt5LbMjRp7E4U0",
	authDomain: "react-todo-app-98aa8.firebaseapp.com",
	databaseURL: "https://react-todo-app-98aa8.firebaseio.com",
	projectId: "react-todo-app-98aa8",
	storageBucket: "react-todo-app-98aa8.appspot.com",
	messagingSenderId: "740848818580"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app : {
		name : 'Todo App',
		version : '1.0.0'
	},
	isRunning : true,
	user : {
		name : 'iamNitin16',
		age : 22
	}
});