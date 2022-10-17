// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiA7kYCk7ZVULSQaM_-EIysMxYc8ThWXA",
  authDomain: "dev-cv-builder.firebaseapp.com",
  projectId: "dev-cv-builder",
  storageBucket: "dev-cv-builder.appspot.com",
  messagingSenderId: "831586423848",
  appId: "1:831586423848:web:727a86418cb79c4992d11d",
  measurementId: "G-WMLKX3CVP5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);
