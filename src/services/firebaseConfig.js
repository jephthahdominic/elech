// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgJs7XiYf7NFYSRebJYYIfhqP6WAtBHQ",
  authDomain: "beautify-e4944.firebaseapp.com",
  databaseURL: "https://beautify-e4944-default-rtdb.firebaseio.com",
  projectId: "beautify-e4944",
  storageBucket: "beautify-e4944.firebasestorage.app",
  messagingSenderId: "163172607423",
  appId: "1:163172607423:web:7bf208e7c086437bf9ad0a",
  measurementId: "G-YP99CTW53K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestoreDb = getFirestore(app)

export {database, firestoreDb}
