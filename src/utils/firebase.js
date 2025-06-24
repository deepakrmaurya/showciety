// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwpZDfcXkrOgQ_ehCyoI6RTXTbqrTgQbM",
  authDomain: "showciety-263f2.firebaseapp.com",
  projectId: "showciety-263f2",
  storageBucket: "showciety-263f2.firebasestorage.app",
  messagingSenderId: "1053860572976",
  appId: "1:1053860572976:web:7a8314263b72f0b0c4a2f5",
  measurementId: "G-1RM5JMJFE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
