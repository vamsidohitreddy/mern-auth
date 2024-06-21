// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-dec1b.firebaseapp.com",
  projectId: "mern-auth-dec1b",
  storageBucket: "mern-auth-dec1b.appspot.com",
  messagingSenderId: "742565181920",
  appId: "1:742565181920:web:2cd6826580c95713a85385"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);