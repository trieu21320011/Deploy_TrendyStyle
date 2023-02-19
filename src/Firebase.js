// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
import  {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMrMyUDcwdZd6g9O24AAz0gGDGSqH1goA",
  authDomain: "trendy-style.firebaseapp.com",
  projectId: "trendy-style",
  storageBucket: "trendy-style.appspot.com",
  messagingSenderId: "369412192964",
  appId: "1:369412192964:web:c7d7748bc408b698d6e791",
  measurementId: "G-50592FL0L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app);