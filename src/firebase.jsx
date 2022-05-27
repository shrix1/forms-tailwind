// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkpUHI2Ist-SQeuK8okhQpKzNtr7K_T74",
  authDomain: "forms-db-check.firebaseapp.com",
  databaseURL: "https://forms-db-check-default-rtdb.firebaseio.com",
  projectId: "forms-db-check",
  storageBucket: "forms-db-check.appspot.com",
  messagingSenderId: "696504306291",
  appId: "1:696504306291:web:bcabc82534f647ef1c3806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
