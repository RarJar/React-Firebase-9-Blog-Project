import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAny_Gml3RTfzxVL2sA_NO37C2l22QTO1s",
  authDomain: "library-management-abf5f.firebaseapp.com",
  projectId: "library-management-abf5f",
  storageBucket: "library-management-abf5f.appspot.com",
  messagingSenderId: "568764478154",
  appId: "1:568764478154:web:a5889c1139f554007d7a33",
  measurementId: "G-N4L6S9Q6XD",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
export { db };