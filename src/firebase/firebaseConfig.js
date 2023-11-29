import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTSEVu07Dh3PFjvl_vA6EppBINYsb3jAg",
  authDomain: "ecommercelucasstrangis.firebaseapp.com",
  projectId: "ecommercelucasstrangis",
  storageBucket: "ecommercelucasstrangis.appspot.com",
  messagingSenderId: "33742508576",
  appId: "1:33742508576:web:3881cbb650699090e36245"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)