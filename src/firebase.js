import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5Dy9Y6kiwU854BkKInw4xKeOYHiG_6VI",
    authDomain: "todoapp-c32b2.firebaseapp.com",
    projectId: "todoapp-c32b2",
    storageBucket: "todoapp-c32b2.appspot.com",
    messagingSenderId: "763329424045",
    appId: "1:763329424045:web:edf103f704e20270163424",
    measurementId: "G-058LL5G7KH"
})

const database = firebaseApp.firestore();

export default database;