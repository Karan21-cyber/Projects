import { initializeApp } from "firebase/app";
//importing the getAuth from the firebase
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD3VLJj-jjH86JwC6kdX4ZwI19NiFwXZYE",
  authDomain: "filmflex-ce893.firebaseapp.com",
  projectId: "filmflex-ce893",
  storageBucket: "filmflex-ce893.appspot.com",
  messagingSenderId: "1096331562777",
  appId: "1:1096331562777:web:ad66e3c510961619b63f88",
  measurementId: "G-5YK20ZWK7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app , auth };