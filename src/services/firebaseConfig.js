// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7TzDlxyB737-wzsLb0YxnyqG7ZF3pWq0",
  authDomain: "pixvalidate.firebaseapp.com",
  projectId: "pixvalidate",
  storageBucket: "pixvalidate.appspot.com",
  messagingSenderId: "254149863964",
  appId: "1:254149863964:web:8089b41665e6b1ff810dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
