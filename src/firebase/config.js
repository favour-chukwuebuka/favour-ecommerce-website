import  { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyA72Jfi_WXWie-i641mAYhLv3QgiynzLxQ",
    authDomain: "doctors-portal-6bc13.firebaseapp.com",
    projectId: "doctors-portal-6bc13",
    storageBucket: "doctors-portal-6bc13.appspot.com",
    messagingSenderId: "725454304359",
    appId: "1: 725454304359:web:49840cbf09a6b578e210c2",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
