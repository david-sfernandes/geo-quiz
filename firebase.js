import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // measurementId: process.env.MEASUREMENT_ID,
  // appId: process.env.APP_ID,

  apiKey: "AIzaSyCo-raiDhw9Wy5DaxsqW-KFzKpxZB4UHAs",
  authDomain: "geo-quiz-99e9d.firebaseapp.com",
  projectId: "geo-quiz-99e9d",
  storageBucket: "geo-quiz-99e9d.appspot.com",
  messagingSenderId: "7272807758",
  measurementId: "G-B98LBE3454",
  appId: "1:7272807758:web:036bbc01a354a432f9b21f",
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage = getStorage();
