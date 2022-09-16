// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT9oss0ZW50FzM6bNMaPchT5Oe2fk6dBo",
  authDomain: "scriv-574c5.firebaseapp.com",
  projectId: "scriv-574c5",
  storageBucket: "scriv-574c5.appspot.com",
  messagingSenderId: "475680139271",
  appId: "1:475680139271:web:440ec9573addbab92662a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)



