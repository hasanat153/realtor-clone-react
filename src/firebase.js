// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaEKu12JoIz3wwHRvsDdt_gMNnUzkcdNU",
  authDomain: "realtor-clone-react-43f9f.firebaseapp.com",
  projectId: "realtor-clone-react-43f9f",
  storageBucket: "realtor-clone-react-43f9f.appspot.com",
  messagingSenderId: "510617089283",
  appId: "1:510617089283:web:50856c811beaede61aa536",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
