import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkyDeEVwevtx1lDngp3lQ9wLX_VHxqj1Y",
  authDomain: "twitter-clone-next-3ac99.firebaseapp.com",
  projectId: "twitter-clone-next-3ac99",
  storageBucket: "twitter-clone-next-3ac99.appspot.com",
  messagingSenderId: "643614655100",
  appId: "1:643614655100:web:74e16023e447aa2ffd3ff9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
