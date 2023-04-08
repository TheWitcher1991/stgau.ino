import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

import API from './setting'

const firebaseConfig = {
    apiKey: API.API_KEY,
    authDomain: API.AUTH_DOMAIN,
    projectId: API.PROJECT_ID,
    storageBucket: API.STORAGE_BUCKET,
    messagingSenderId: API.MESSAGE_SENDER_ID,
    appId: API.APP_ID
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()