// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxW1FCW3V79TOnw4n-C9md_T-ZwmI9YPo",
  authDomain: "the-dragon-news-609b2.firebaseapp.com",
  projectId: "the-dragon-news-609b2",
  storageBucket: "the-dragon-news-609b2.appspot.com",
  messagingSenderId: "332844101813",
  appId: "1:332844101813:web:67bc5f4a935d876b2dcefc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;