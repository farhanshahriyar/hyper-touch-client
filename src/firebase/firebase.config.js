// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKubCOKil8n9p40nWbz643LAFNli6ghs",
  authDomain: "hypertouch-auth.firebaseapp.com",
  projectId: "hypertouch-auth",
  storageBucket: "hypertouch-auth.appspot.com",
  messagingSenderId: "386567622625",
  appId: "1:386567622625:web:a21208d0b51343d3340ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;