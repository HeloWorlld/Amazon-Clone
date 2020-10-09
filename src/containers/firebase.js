import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDR8exX5T6JSgshB3AkJD0_R0fDxxRwNhQ",
    authDomain: "clone-263e7.firebaseapp.com",
    databaseURL: "https://clone-263e7.firebaseio.com",
    projectId: "clone-263e7",
    storageBucket: "clone-263e7.appspot.com",
    messagingSenderId: "980379070950",
    appId: "1:980379070950:web:400b968fd9ee16578b6627",
    measurementId: "G-GYX99G7GMS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
