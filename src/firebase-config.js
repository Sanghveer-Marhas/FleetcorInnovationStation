// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYq214OPfuntxr--1HjxBv1xXqlajyDs8",
  authDomain: "innovationstationnew.firebaseapp.com",
  projectId: "innovationstationnew",
  storageBucket: "innovationstationnew.appspot.com",
  messagingSenderId: "52365508716",
  appId: "1:52365508716:web:c4e34a9b9f77e7f49e9849",
  measurementId: "G-SR3W9C6XW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
