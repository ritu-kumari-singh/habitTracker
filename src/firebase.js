import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM9poRUsYO9M6Fq9eWqG8EyV44xq3Z5fk",
  authDomain: "habittracker-2a074.firebaseapp.com",
  projectId: "habittracker-2a074",
  storageBucket: "habittracker-2a074.appspot.com",
  messagingSenderId: "846136325831",
  appId: "1:846136325831:web:05e05cee375606989370e2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
