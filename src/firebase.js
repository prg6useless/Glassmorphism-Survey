// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6RCB0LhhIqsFHQ5-7LZ8d9lAv2ZdVSGk",
  authDomain: "glassmorphism-hci.firebaseapp.com",
  projectId: "glassmorphism-hci",
  storageBucket: "glassmorphism-hci.appspot.com",
  messagingSenderId: "1058829049510",
  appId: "1:1058829049510:web:00ea367bc6a8c723c7de67",
  measurementId: "G-DTXTY0GVCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
