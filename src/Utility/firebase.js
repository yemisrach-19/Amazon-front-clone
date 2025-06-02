import firebase from "firebase/compat/app"; 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCoeg2DUMe2OtIJAbbBE2lzUDmU3lGxr4",
  authDomain: "clone-57ea4.firebaseapp.com",
  projectId: "clone-57ea4",
  storageBucket: "clone-57ea4.firebasestorage.app",
  messagingSenderId: "63928822828",
  appId: "1:63928822828:web:7bede0a4bcc40ff04b7589",
  measurementId: "G-V4GM00YD9Z",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore()
