// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3dpJ3t3po5gXMXM9kxBwgSiW2VAyYIjE",
  authDomain: "mynca-dac35.firebaseapp.com",
  projectId: "mynca-dac35",
  storageBucket: "mynca-dac35.appspot.com",
  messagingSenderId: "705924847693",
  appId: "1:705924847693:web:3296dd3dc78c2c2fb4e404",
  measurementId: "G-J2HLQZYVBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);