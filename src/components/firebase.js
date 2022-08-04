import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5X83SFefR2ky5VWpWU3gtoFkH-X_ifPI",
  authDomain: "react-hooks-blog-1e425.firebaseapp.com",
  projectId: "react-hooks-blog-1e425",
  storageBucket: "react-hooks-blog-1e425.appspot.com",
  messagingSenderId: "485831224915",
  appId: "1:485831224915:web:51f25442c0b93cbbb860a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();