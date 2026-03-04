/**
 * AcademicPal - Firebase Configuration
 * Initializes Firebase app instance for authentication and Firestore
 */
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const configA = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_A_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_A_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_A_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_A_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_A_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_A_APP_ID,
};

const appA = getApps().find(app => app.name === "appA") || initializeApp(configA, "appA");

export const authA = getAuth(appA);
export const providerA = new GoogleAuthProvider();
export const dbA = getFirestore(appA);

