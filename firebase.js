
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIWRzJ-QrpliTxTLIAswtdw00o5m0DZ-Y",
  authDomain: "airbnb-projectjmk.firebaseapp.com",
  projectId: "airbnb-projectjmk",
  storageBucket: "airbnb-projectjmk.firebasestorage.app",
  messagingSenderId: "234571762116",
  appId: "1:234571762116:web:3087aa5a7405c9e93e3c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};