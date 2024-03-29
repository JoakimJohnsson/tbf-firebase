import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA4yBmSmQ-RLTzroqIYkr9A42VQcl_Zh1Y",
    authDomain: "thebaseballfield.firebaseapp.com",
    databaseURL: "https://thebaseballfield.firebaseio.com",
    projectId: "thebaseballfield",
    storageBucket: "thebaseballfield.appspot.com",
    messagingSenderId: "115379456982",
    appId: "1:115379456982:web:4d0adc5c1a56b0579b7277"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously()
    .then(() => {
        console.log("Sign in confirmed");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, + " : " + errorMessage);
    });

export default firebase;
