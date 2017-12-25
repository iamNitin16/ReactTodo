import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyBC-eYzxGV1rJGELv7EHIt5LbMjRp7E4U0",
		authDomain: "react-todo-app-98aa8.firebaseapp.com",
		databaseURL: "https://react-todo-app-98aa8.firebaseio.com",
		projectId: "react-todo-app-98aa8",
		storageBucket: "react-todo-app-98aa8.appspot.com",
		messagingSenderId: "740848818580"
	};

	firebase.initializeApp(config);
} catch (e) {
	
}

export var firebaseRef = firebase.database().ref();
export default firebase;