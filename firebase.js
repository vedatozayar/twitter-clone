// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbUnGudvOSDjJUi6KjA4CecPNsMCNDYzI',
  authDomain: 'twitter-clone-7d07d.firebaseapp.com',
  projectId: 'twitter-clone-7d07d',
  storageBucket: 'twitter-clone-7d07d.appspot.com',
  messagingSenderId: '200887250447',
  appId: '1:200887250447:web:68cfb397d43951ec87fd7a',
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
