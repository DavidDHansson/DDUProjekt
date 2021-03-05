import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyByj9ZccNKUlHYK2rkRvbYavOnJUoDPmHA",
    authDomain: "hansson-4.firebaseapp.com",
    databaseURL: "https://hansson-4.firebaseio.com",
    projectId: "hansson-4",
    storageBucket: "hansson-4.appspot.com",
    messagingSenderId: "870517585908",
    appId: "1:870517585908:web:e588a98b33bb4e2b656ba1",
    measurementId: "G-57QYPPMYRG"
});

export default firebase;
