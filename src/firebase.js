import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAJ3BbrhmrBsgUxlHpeHrecTzkUWAacXfw",
    authDomain: "notes-21.firebaseapp.com",
    databaseURL: "https://notes-21.firebaseio.com",
    projectId: "notes-21",
    storageBucket: "notes-21.appspot.com",
    messagingSenderId: "230519648420",
    appId: "1:230519648420:web:14549a8933ef376deef631",
    measurementId: "G-KN1VN2P18J"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
