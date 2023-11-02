// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQLjpzmTLCAgEUk4PFpeS_SCn3TDkxL2c",
  authDomain: "ecommerceprueba-a3bc9.firebaseapp.com",
  projectId: "ecommerceprueba-a3bc9",
  storageBucket: "ecommerceprueba-a3bc9.appspot.com",
  messagingSenderId: "955381689547",
  appId: "1:955381689547:web:f80ff27a83dd13b256ff4e",
  measurementId: "G-LGSPZNRYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;