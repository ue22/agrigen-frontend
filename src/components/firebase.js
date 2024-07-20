import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "YOUR-APIKEY",
  authDomain: "YOUR-AUTHDOMAIN",
  projectId: "YOUR-PROJECTID",
  storageBucket: "YOUR-STORAGEBUCKET",
  messagingSenderId: "YOUR-MESSAGINGSENDERID",
  appId: "YOUR-APPID"
};

// firebase.js (or wherever you initialize Firebase)
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import the Firestore library if needed

import firebaseConfig from './firebaseConfig';

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


