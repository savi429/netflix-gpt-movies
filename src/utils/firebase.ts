// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOBLK0B_wn6ZNX9GFuT1rObDpo2Oc2yAA",
  authDomain: "netflix-gpt-b94bd.firebaseapp.com",
  projectId: "netflix-gpt-b94bd",
  storageBucket: "netflix-gpt-b94bd.appspot.com",
  messagingSenderId: "695716120956",
  appId: "1:695716120956:web:facb719dbfd9568b04bcf9",
  measurementId: "G-D8F94F08CP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
console.log(analytics);
