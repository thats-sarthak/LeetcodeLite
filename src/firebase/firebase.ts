import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL2_HTy6CsnKmDfkiigCRxBNSZyVwCr_0",
  authDomain: "leetcode-c30e1.firebaseapp.com",
  projectId: "leetcode-c30e1",
  storageBucket: "leetcode-c30e1.appspot.com",
  messagingSenderId: "977399024449",
  appId: "1:977399024449:web:1df9cc18492a8d626c6fc0",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
