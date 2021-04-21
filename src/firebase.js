import firebase from 'firebase'

//insert config from firebase
const config = {
  apiKey: "AIzaSyBwgwkXQiDw-VHIu63i7OQCpZkmZEbSnO0",
  authDomain: "todo-e2465.firebaseapp.com",
  projectId: "todo-e2465",
  storageBucket: "todo-e2465.appspot.com",
  messagingSenderId: "461236693656",
  appId: "1:461236693656:web:a211786633429d8b3abeed",
  measurementId: "G-N2PV1DCSC8"
};
firebase.initializeApp(config);

export default firebase;