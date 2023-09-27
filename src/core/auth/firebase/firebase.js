
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVfTW5kjTcJq-QfhLrq2wPmRlaeNZFFOk",
  authDomain: "bexup-efcf4.firebaseapp.com",
  projectId: "bexup-efcf4",
  storageBucket: "bexup-efcf4.appspot.com",
  messagingSenderId: "968728086229",
  appId: "1:968728086229:web:8f625174fe7be00b5d845c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initilize Firestore database
const db = getFirestore(app)
//Initialize auth
const auth = getAuth(app);


export { db,auth }