// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRB4N9jz_yZ7AC88JP831A_iLZEnyZ5Lk",
  authDomain: "clone-cb.firebaseapp.com",
  projectId: "clone-cb",
  storageBucket: "clone-cb.appspot.com",
  messagingSenderId: "832310817674",
  appId: "1:832310817674:web:123ed841853a38954cce73",
  measurementId: "G-01PGLX0R2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()