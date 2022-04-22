// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvnFHNrqN8PnG_eO9bfIg4oUKWFnxVIe4",
    authDomain: "netflix-clone-ed12f.firebaseapp.com",
    projectId: "netflix-clone-ed12f",
    storageBucket: "netflix-clone-ed12f.appspot.com",
    messagingSenderId: "1021148429080",
    appId: "1:1021148429080:web:3b4c0ed82f6402a6acfc6d",
    measurementId: "G-4Y01WYR4LY"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }