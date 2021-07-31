import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCv2BMBzMjcEKhz0jP1eOwiqjWeN-YIPow",
    authDomain: "ada-capstone-320219.firebaseapp.com",
    projectId: "ada-capstone-320219",
    storageBucket: "ada-capstone-320219.appspot.com",
    messagingSenderId: "415047997436",
    appId: "1:415047997436:web:afac89096be2873ee28479",
    measurementId: "G-E8V07HQX15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};