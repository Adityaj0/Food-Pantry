// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK_Qebmzp8RqyphjDd7eN0Mj5iQfST118",
  authDomain: "login-1c935.firebaseapp.com",
  projectId: "login-1c935",
  storageBucket: "login-1c935.appspot.com",
  messagingSenderId: "989048224453",
  appId: "1:989048224453:web:d617d3eab50ab5a3b60eac"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


