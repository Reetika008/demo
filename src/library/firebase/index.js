// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../../config";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  onSnapshot,
  query,
  where,
  Timestamp,
  orderBy,
  connectFirestoreEmulator,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const firestoreDb = getFirestore(app);
// connectFirestoreEmulator(firestoreDb, "localhost", 8080);
// connectAuthEmulator(auth, "http://localhost:9099/");

export {
  auth,
  firestoreDb,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  onSnapshot,
  query,
  where,
  Timestamp,
  orderBy,
};
