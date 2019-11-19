import firebase from 'firebase/app'
import 'firebase/firestore'

// copy Firebase SDK snippet from the firebase console (config option)
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
export const db =  !firebase.apps.length ? firebase.initializeApp({ projectId: config.projectId }).firestore() : firebase.firestore();

// Initialize a collection
export const questionsCollection = db.collection('questions');
