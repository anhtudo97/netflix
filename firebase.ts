// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: 'https://netflix-next-cb739-default-rtdb.asia-southeast1.firebasedatabase.app/',

  apiKey: "AIzaSyADRg80Z8gibcRvmm9U62NGhKUyKLQ1j7w",
  authDomain: "netflix-next-cb739.firebaseapp.com",
  projectId: "netflix-next-cb739",
  storageBucket: "netflix-next-cb739.appspot.com",
  messagingSenderId: "592469277943",
  appId: "1:592469277943:web:eae2f64f7346501f0967f2"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }