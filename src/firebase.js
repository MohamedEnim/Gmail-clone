// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd1Of3k_yuVZRy45Nl5ECJMx8iQljcNOw",
  authDomain: "clone-cv.firebaseapp.com",
  projectId: "clone-cv",
  storageBucket: "clone-cv.appspot.com",
  messagingSenderId: "236387216907",
  appId: "1:236387216907:web:e20e8b3ad4623a9894e10e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebase };
