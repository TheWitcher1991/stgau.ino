import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDhMSuyiwWSLIZyt4OWK65ms3JueMykT5I",
    authDomain: "stgauino.firebaseapp.com",
    projectId: "stgauino",
    storageBucket: "stgauino.appspot.com",
    messagingSenderId: "954746004699",
    appId: "1:954746004699:web:3b555c2f661839afa358fe"
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()