import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
let auth = getAuth(app);
let storage = getStorage(app);

export { db, auth, storage };
