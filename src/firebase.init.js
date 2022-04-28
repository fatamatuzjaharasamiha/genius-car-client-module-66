// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQd5IdskdDvOAC7k7hbXB54w2SDLn8oGs",
  authDomain: "genius-car-b712a.firebaseapp.com",
  projectId: "genius-car-b712a",
  storageBucket: "genius-car-b712a.appspot.com",
  messagingSenderId: "181430172783",
  appId: "1:181430172783:web:a72a6dfa33b20266a3a19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;