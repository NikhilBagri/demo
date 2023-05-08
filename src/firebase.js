// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5KPPTJ91SgtvEow9vy54NXktbaoZxH_0",
  authDomain: "auth-daa3e.firebaseapp.com",
  projectId: "auth-daa3e",
  storageBucket: "auth-daa3e.appspot.com",
  messagingSenderId: "530687730833",
  appId: "1:530687730833:web:ec063c5c6ced87fcd9cb30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
